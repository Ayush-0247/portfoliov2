import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinayisactive",
  description: "Vinayisactive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Just antialiased, no font variables needed here anymore */}
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}