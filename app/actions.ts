"use server";

import { isOnCanvasEditingAllowed } from '@/static/constant-vals';
import fs from 'fs';
import path from 'path';

export async function saveNodeCoordinates(
  nodes: { id: string, x: number, y: number }[],
  target: 'desktop' | 'mobile' = 'desktop'
) {
  if (isOnCanvasEditingAllowed) {
    throw new Error('Saving coordinates to code is only allowed when canvas mode is on.');
  }

  const configPath = path.join(process.cwd(), 'components', 'nodes', 'home-nodes', 'home-nodes-config.ts');

  if (!fs.existsSync(configPath)) {
    throw new Error('Config file not found: ' + configPath);
  }

  const content = fs.readFileSync(configPath, 'utf8');

  // Find exact boundaries so we never touch the wrong array
  const desktopStart = content.indexOf('export const desktopNodes');
  const mobileStart  = content.indexOf('export const mobileNodes');
  const mobileEdgesStart = content.indexOf('export const mobileEdges');

  if (desktopStart === -1 || mobileStart === -1) {
    throw new Error('Could not locate desktopNodes or mobileNodes in config file.');
  }

  // Desktop section: between desktopNodes and mobileNodes
  // Mobile section:  between mobileNodes and mobileEdges (or end of file)
  const sectionStart = target === 'desktop' ? desktopStart : mobileStart;
  const sectionEnd   = target === 'desktop' ? mobileStart  : (mobileEdgesStart !== -1 ? mobileEdgesStart : content.length);

  const before  = content.substring(0, sectionStart);
  let   section = content.substring(sectionStart, sectionEnd);
  const after   = content.substring(sectionEnd);

  nodes.forEach(node => {
    const regex = new RegExp(
      `(id:\\s*"${node.id}"[\\s\\S]*?position:\\s*\\{\\s*x:\\s*)-?\\d+(\\.\\d+)?(\\s*,\\s*y:\\s*)-?\\d+(\\.\\d+)?(\\s*\\})`,
    );
    section = section.replace(regex, `$1${Math.round(node.x)}$3${Math.round(node.y)}$5`);
  });

  fs.writeFileSync(configPath, before + section + after, 'utf8');

  return { success: true, target };
}
