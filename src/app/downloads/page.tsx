"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Chrome, 
  Smartphone, 
  ArrowLeft,
  CheckCircle2,
  Download,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Downloads() {
  const platforms = [
    {
      name: "Chrome Extension",
      status: "Available",
      description: "Privacy-first browsing habits for desktop. 100% offline functionality with minimal anonymous data sync.",
      icon: <Chrome className="h-8 w-8 text-sky-400" />,
      link: "https://chromewebstore.google.com/detail/intentionality/bgmlmjomgakcgkgngpeimmkofpicpbfn",
      buttonText: "Add to Chrome",
      available: true
    },
    {
      name: "Android App",
      status: "Coming Soon",
      description: "Fully offline mobile control. Local app monitoring with zero personal data collection.",
      icon: <svg className="h-8 w-8 text-green-500" viewBox="0 0 256 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
        <defs>
          <mask id="android-mask-dl">
            <rect width="256" height="150" fill="white" />
            <path d="M194.59 113.712c5.122-3.41 5.867-11.3 1.661-17.62-4.203-6.323-11.763-8.682-16.883-5.273-5.122 3.41-5.868 11.3-1.662 17.621 4.203 6.322 11.764 8.682 16.883 5.272ZM78.518 108.462c4.206-6.321 3.46-14.21-1.662-17.62-5.123-3.41-12.68-1.05-16.886 5.27-4.203 6.323-3.458 14.212 1.662 17.622 5.122 3.41 12.683 1.05 16.886-5.272Z" fill="black" />
          </mask>
        </defs>
        <path fill="currentColor" mask="url(#android-mask-dl)" d="M255.285 143.47c-.084-.524-.164-1.042-.251-1.56a128.119 128.119 0 0 0-12.794-38.288 128.778 128.778 0 0 0-23.45-31.86 129.166 129.166 0 0 0-22.713-18.005c.049-.08.09-.168.14-.25 2.582-4.461 5.172-8.917 7.755-13.38l7.576-13.068c1.818-3.126 3.632-6.26 5.438-9.386a11.776 11.776 0 0 0 .662-10.484 11.668 11.668 0 0 0-4.823-5.536 11.85 11.85 0 0 0-5.004-1.61 11.963 11.963 0 0 0-2.218.018 11.738 11.738 0 0 0-8.968 5.798c-1.814 3.127-3.628 6.26-5.438 9.386l-7.576 13.069c-2.583 4.462-5.173 8.918-7.755 13.38-.282.487-.567.973-.848 1.467-.392-.157-.78-.313-1.172-.462-14.24-5.43-29.688-8.4-45.836-8.4-.442 0-.879 0-1.324.006-14.357.143-28.152 2.64-41.022 7.12a119.434 119.434 0 0 0-4.42 1.642c-.262-.455-.532-.911-.79-1.367-2.583-4.462-5.173-8.918-7.755-13.38L65.123 15.25c-1.818-3.126-3.632-6.259-5.439-9.386A11.736 11.736 0 0 0 48.5.048 11.71 11.71 0 0 0 43.49 1.66a11.716 11.716 0 0 0-4.077 4.063c-.281.474-.532.967-.742 1.473a11.808 11.808 0 0 0-.365 8.188c.259.786.594 1.554 1.023 2.296a3973.32 3973.32 0 0 1 5.439 9.386c2.53 4.357 5.054 8.713 7.58 13.069 2.582 4.462 5.168 8.918 7.75 13.38.02.038.046.075.065.112A129.184 129.184 0 0 0 45.32 64.38a129.693 129.693 0 0 0-22.2 24.015 127.737 127.737 0 0 0-9.34 15.24 128.238 128.238 0 0 0-10.843 28.764 130.743 130.743 0 0 0-1.951 9.524c-.087.518-.167 1.042-.247 1.56A124.978 124.978 0 0 0 0 149.118h256c-.205-1.891-.449-3.77-.734-5.636l.019-.012Z" />
      </svg>,
      link: "#",
      buttonText: "Coming Soon",
      available: false
    },
    {
      name: "iOS App",
      status: "Coming Soon",
      description: "Mindful usage tracking for iPhone and iPad. Coming soon to the App Store.",
      icon: <svg className="h-8 w-8 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>,
      link: "#",
      buttonText: "Coming Soon",
      available: false
    },
    {
      name: "Firefox Add-on",
      status: "Coming Soon",
      description: "Privacy-focused extension for Firefox users. Built with the same core intentionality logic.",
      icon: <svg className="h-8 w-8 text-orange-400" viewBox="0 0 256 265" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
        <path fill="currentColor" d="M248.033 88.713c-5.569-13.399-16.864-27.866-25.71-32.439a133.169 133.169 0 0 1 12.979 38.9l.023.215c-14.49-36.126-39.062-50.692-59.13-82.41a155.1 155.1 0 0 1-3.019-4.907 40.605 40.605 0 0 1-1.412-2.645 23.31 23.31 0 0 1-1.912-5.076.331.331 0 0 0-.291-.331.469.469 0 0 0-.241 0c-.016 0-.043.03-.063.037-.02.006-.063.036-.092.049l.049-.086c-32.19 18.849-43.113 53.741-44.118 71.194a64.108 64.108 0 0 0-35.269 13.593 38.336 38.336 0 0 0-3.307-2.506 59.417 59.417 0 0 1-.36-31.324 94.912 94.912 0 0 0-30.848 23.841h-.06c-5.079-6.438-4.722-27.667-4.431-32.102a22.957 22.957 0 0 0-4.279 2.272 93.435 93.435 0 0 0-12.526 10.73 111.954 111.954 0 0 0-11.98 14.375v.019-.023A108.26 108.26 0 0 0 4.841 108.92l-.171.846a203.818 203.818 0 0 0-1.26 8.003c0 .096-.02.185-.03.281a122.12 122.12 0 0 0-2.08 17.667v.662c.086 98.661 106.944 160.23 192.344 110.825a128.165 128.165 0 0 0 62.12-89.153c.215-1.653.39-3.29.582-4.96a131.8 131.8 0 0 0-8.313-64.378ZM100.322 189.031c.599.288 1.161.599 1.776.873l.089.057a68.838 68.838 0 0 1-1.865-.93Zm29.357-77.297Zm105.656-16.315v-.123l.023.136-.023-.013Z" />
        <path fill="currentColor" d="M185.754 103.778c.278.195.536.39.797.585a69.775 69.775 0 0 0-11.904-15.525C134.815 48.999 164.208 2.457 169.165.093l.049-.073c-32.19 18.849-43.113 53.741-44.118 71.194 1.495-.103 2.976-.229 4.504-.229a64.68 64.68 0 0 1 56.154 32.793Z" />
        <path fill="currentColor" d="M83.852 80.545a81.51 81.51 0 0 1 2.645 1.756 59.407 59.407 0 0 1-.36-31.324 94.926 94.926 0 0 0-30.849 23.841c.625-.017 19.216-.351 28.564 5.727Z" />
        <path fill="currentColor" d="M2.471 139.411c9.89 58.443 62.857 103.063 122.989 104.766 55.652 1.574 91.205-30.732 105.894-62.248a116.067 116.067 0 0 0 3.988-86.497v-.122c0-.096-.02-.153 0-.123l.023.215c4.547 29.684-10.552 58.443-34.155 77.889l-.073.166c-45.989 37.455-90.002 22.598-98.91 16.533a64.67 64.67 0 0 1-1.865-.929c-26.814-12.817-37.891-37.247-35.517-58.198a32.912 32.912 0 0 1-30.359-19.096 48.336 48.336 0 0 1 47.117-1.891 63.821 63.821 0 0 0 48.119 1.891c-.049-1.042-22.353-9.92-31.05-18.484-4.646-4.58-6.851-6.786-8.805-8.442a38.145 38.145 0 0 0-3.307-2.507c-.761-.519-1.617-1.081-2.645-1.756-9.348-6.078-27.939-5.744-28.554-5.727h-.059c-5.079-6.438-4.722-27.667-4.431-32.101a22.862 22.862 0 0 0-4.279 2.271 93.373 93.373 0 0 0-12.526 10.73 112.062 112.062 0 0 0-12.03 14.342v.019-.023A108.26 108.26 0 0 0 4.841 108.92c-.062.261-4.616 20.167-2.37 30.491Z" />
      </svg>,
      link: "#",
      buttonText: "Coming Soon",
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1a2a] text-slate-200 selection:bg-sky-500/30">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[60%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full" />
      </div>

      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0f1a2a]/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
              <Image src="/iconog.png" alt="Intentionality Icon" width={32} height={32} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Intentionality</span>
          </Link>
          <Button asChild variant="ghost" size="sm" className="text-slate-400 hover:text-white">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back Home</Link>
          </Button>
        </div>
      </nav>

      <main className="pt-32 pb-20 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Download Intentionality</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Choose your platform and start building a more intentional relationship with your digital world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={`h-full bg-white/5 border-white/10 ${platform.available ? 'hover:border-sky-500/30' : 'opacity-70'} transition-all group overflow-hidden relative`}>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform">
                      {platform.icon}
                    </div>
                    <Badge variant="outline" className={`${platform.available ? 'border-sky-500/50 text-sky-400 bg-sky-500/5' : 'border-slate-700 text-slate-500 bg-slate-800/50'}`}>
                      {platform.status}
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">{platform.name}</h2>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {platform.description}
                  </p>
                  
                  {platform.available ? (
                    <Button asChild className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold h-12">
                      <a href={platform.link} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        {platform.buttonText}
                      </a>
                    </Button>
                  ) : (
                    <Button disabled className="w-full bg-white/5 text-slate-500 border border-white/5 font-bold h-12 cursor-not-allowed">
                      {platform.buttonText}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <section className="mt-24 max-w-4xl mx-auto bg-sky-500/5 border border-sky-500/20 rounded-[2rem] p-8 md:p-12 text-center">
           <h3 className="text-2xl font-bold text-white mb-4">Need help setting up?</h3>
           <p className="text-slate-400 mb-8">Check our documentation or reach out to our support team for assistance with installation.</p>
           <div className="flex flex-wrap justify-center gap-4">
             <Button variant="outline" className="border-white/10 hover:bg-white/5">View Guide</Button>
             <Button asChild variant="outline" className="border-white/10 hover:bg-white/5">
                <Link href="/report-problem">Contact Support</Link>
             </Button>
           </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
           <p className="text-slate-500 text-sm">© 2026 Intentionality. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
