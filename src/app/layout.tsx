import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerifText = DM_Serif_Text({
  weight: ["400"],
  variable: "--font-dm-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://intentionality.app"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Intentionality | Stop Mindless Scrolling & Reclaim Your Focus",
    template: "%s | Intentionality",
  },
  description: "Take control of your browsing habits. Pause before you scroll. Add Intentionality for mindful, distraction-free browsing.",
  other: {
    "ai-content": "https://intentionality.app/llms.txt",
  },
  icons: {
    icon: [
      { url: "/iconog.png", type: "image/png" },
    ],
    shortcut: "/iconog.png",
    apple: "/iconog.png",
  },
  openGraph: {
    title: "Intentionality | Stop Mindless Scrolling & Reclaim Your Focus",
    description: "Take control of your browsing habits. Pause before you scroll.",
    url: "https://intentionality.app/",
    siteName: "Intentionality",
    images: [
      {
        url: "/iconog.png",
        width: 512,
        height: 512,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/iconog.png" />
        <link rel="help" href="/llms.txt" type="text/plain" title="AI Agent Guide" />
        <script
          defer
          data-website-id="dfid_nxDCF3qkroOrl6p5DJTsL"
          data-domain="intentionality.app"
          src="https://datafa.st/js/script.js"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerifText.variable} antialiased bg-[#0f1a2a]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
