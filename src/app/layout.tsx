import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intentionality | Downloads",
  description: "Get Intentionality on all your devices. Available for Chrome, and coming soon to Android, iOS, and Firefox.",
  icons: {
    icon: [
      { url: "/iconog.png", type: "image/png" },
    ],
    shortcut: "/iconog.png",
    apple: "/iconog.png",
  },
  openGraph: {
    title: "Intentionality",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f1a2a]`}
      >
        {children}
      </body>
    </html>
  );
}
