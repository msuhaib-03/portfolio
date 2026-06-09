import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "@/data/personal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:       `${personal.fullName} — ${personal.title}`,
  description: `${personal.bio} Based in ${personal.location}.`,
  keywords:    ["Full Stack Developer", "Next.js", "React", "TypeScript", "Pakistan", personal.fullName],
  authors:     [{ name: personal.fullName }],
  creator:     personal.fullName,
  openGraph: {
    type:        "website",
    title:       `${personal.fullName} — ${personal.title}`,
    description: personal.bio,
    siteName:    `${personal.fullName} Portfolio`,
  },
  twitter: {
    card:        "summary_large_image",
    title:       `${personal.fullName} — ${personal.title}`,
    description: personal.bio,
  },
};

export const viewport: Viewport = {
  themeColor:   "#00ff88",
  colorScheme:  "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-white selection:bg-cyber-green/25">
        {children}
      </body>
    </html>
  );
}
