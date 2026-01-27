"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Rocket, 
  Sparkles, 
  Wrench, 
  Bug, 
  ShieldCheck,
  Zap,
  Chrome,
  Smartphone
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ChangelogContent() {
  const versions = [
    {
      version: "1.6.1",
      status: "Latest",
      date: "January 27, 2026",
      icon: <Sparkles className="h-5 w-5 text-sky-400" />,
      tagColor: "bg-sky-500",
      summary: "Refined UI elements and improved developer documentation.",
      sections: [
        {
          title: "Improvements",
          icon: <Wrench className="h-4 w-4 text-emerald-400" />,
          items: [
            "Enhanced iOS icon visibility in waitlist modals for better accessibility on dark backgrounds.",
            "Updated internal agent documentation for improved development workflow."
          ]
        }
      ]
    },
    {
      version: "1.6.0",
      status: "Previous",
      date: "November 5, 2025",
      icon: <Rocket className="h-5 w-5 text-sky-400" />,
      tagColor: "bg-sky-500",
      summary: "Major stability and authentication update. Refined the core login flow and background persistence logic.",
      sections: [
        {
          title: "Fixes",
          icon: <Bug className="h-4 w-4 text-rose-400" />,
          items: [
            "Critical fix for login bugs that prevented dashboard access.",
            "Resolved session persistence issues in the background script.",
            "Improved 'Proceed' button reliability during intention prompts."
          ]
        },
        {
          title: "Improvements",
          icon: <Wrench className="h-4 w-4 text-emerald-400" />,
          items: [
            "Streamlined authentication state management.",
            "Bumped manifest dependencies for better security."
          ]
        }
      ]
    },
    {
      version: "1.5.0",
      status: "Previous",
      date: "October 30, 2025",
      icon: <ShieldCheck className="h-5 w-5 text-indigo-400" />,
      tagColor: "bg-indigo-500",
      summary: "Security and flexibility update. Introduced more ways to sign in and protect your data.",
      sections: [
        {
          title: "Features",
          icon: <Sparkles className="h-4 w-4 text-amber-400" />,
          items: [
            "Added Native Email & Password authentication.",
            "Implemented 'Skip for now' anonymous development mode.",
            "Refined Firestore security rules for private user data."
          ]
        }
      ]
    },
    {
      version: "1.4.0",
      status: "Previous",
      date: "September 12, 2025",
      icon: <Wrench className="h-5 w-5 text-emerald-400" />,
      tagColor: "bg-emerald-500",
      summary: "Architecture refactor for better cross-browser support and performance.",
      sections: [
        {
          title: "Improvements",
          icon: <Wrench className="h-4 w-4 text-emerald-400" />,
          items: [
            "Refactored to use browser.storage API for better compatibility.",
            "Optimized data management between background and popup scripts.",
            "Enhanced site-blocking engine for faster response times."
          ]
        }
      ]
    },
    {
      version: "1.3.0",
      status: "Previous",
      date: "July 9, 2025",
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      tagColor: "bg-amber-500",
      summary: "Community launch and behavioral refinement update.",
      sections: [
        {
          title: "Features",
          icon: <Sparkles className="h-4 w-4 text-amber-400" />,
          items: [
            "Mandatory intention prompts: must provide a reason and rating.",
            "Implemented the 'How dumb is this visit?' 5-point scale.",
            "Added Product Hunt community integration badge."
          ]
        },
        {
          title: "Improvements",
          icon: <Wrench className="h-4 w-4 text-emerald-400" />,
          items: [
            "Set explicit install and uninstall behaviors.",
            "Fixed issue reporting links in the dashboard."
          ]
        }
      ]
    },
    {
      version: "1.2.0",
      status: "Legacy",
      date: "January 20, 2025",
      icon: <Zap className="h-5 w-5 text-slate-400" />,
      tagColor: "bg-slate-700",
      summary: "Automatic blocking and privacy overhaul.",
      sections: [
        {
          title: "Features",
          icon: <Sparkles className="h-4 w-4 text-slate-400" />,
          items: [
            "Automatic blocking feature with instant background triggers.",
            "Permission requests consolidated into a cleaner flow.",
            "Notifications for blocked site events implemented."
          ]
        }
      ]
    },
    {
      version: "1.1.0",
      status: "Legacy",
      date: "December 15, 2024",
      icon: <Zap className="h-5 w-5 text-slate-400" />,
      tagColor: "bg-slate-700",
      summary: "User experience enhancements and dark mode implementation.",
      sections: [
        {
          title: "Updates",
          icon: <Sparkles className="h-4 w-4 text-slate-400" />,
          items: [
            "Added full Dark Mode support for the popup and dashboard.",
            "Optimized SEO for the extension lander.",
            "Fixed mobile responsiveness issues for onboarding pages."
          ]
        },
        {
          title: "Fixes",
          icon: <Bug className="h-4 w-4 text-slate-400" />,
          items: [
            "Fixed login identity matching bug.",
            "Removed unnecessary identity permissions for leaner build."
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1a2a] text-slate-200 selection:bg-sky-500/30">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0f1a2a]/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center transition-transform group-hover:scale-110">
              <Image src="/iconog.png" alt="Icon" width={32} height={32} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-sky-400">Intentionality</span>
          </Link>
          <Button asChild variant="link" size="sm" className="text-slate-400 hover:text-sky-400 transition-colors no-underline rounded-full">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back Home</Link>
          </Button>
        </div>
      </nav>

      <main className="pt-32 pb-24 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-6 border-sky-500/30 text-sky-400 bg-sky-500/5 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">
            Extension History
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tighter">What&apos;s New</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            The evolution of the Intentionality Chrome Extension—built to help you take back control of your browsing.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {versions.map((v, i) => (
            <motion.section
              key={v.version}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 md:pl-16 pb-12 border-l border-white/10 last:pb-0"
            >
              {/* Timeline Marker */}
              <div className={`absolute left-[-16px] top-0 w-8 h-8 rounded-full bg-[#0f1a2a] border-2 border-white/10 flex items-center justify-center shadow-2xl z-10`}>
                {v.icon}
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-10 hover:border-white/20 transition-all duration-300 shadow-2xl group">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-1 tracking-tight">Version {v.version}</h2>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Chrome className="h-3 w-3" />
                      <span className="text-sm font-medium">{v.date}</span>
                    </div>
                  </div>
                  <Badge className={`${v.tagColor} text-white shadow-lg shadow-sky-500/10 rounded-full px-4 py-1 uppercase tracking-tighter text-[10px]`}>
                    {v.status}
                  </Badge>
                </div>

                <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-2xl group-hover:text-slate-200 transition-colors font-medium">
                  {v.summary}
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                  {v.sections.map((section, si) => (
                    <div key={si} className="space-y-5">
                      <div className="flex items-center gap-2 mb-2">
                        {section.icon}
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
                          {section.title}
                        </h3>
                      </div>
                      <ul className="space-y-4">
                        {section.items.map((item, ii) => (
                          <li key={ii} className="flex items-start gap-3 group/item">
                            <div className="h-1.5 w-1.5 rounded-full bg-sky-500/40 mt-2 group-hover/item:bg-sky-500 transition-colors shrink-0" />
                            <span className="text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-300 transition-colors">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Mobile App CTA - Fixed Contrast */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-12 text-center bg-white/[0.02] rounded-[3rem] border border-white/5 shadow-2xl"
        >
          <Smartphone className="h-8 w-8 text-green-500/40 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Mobile App Coming Soon</h3>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">We&apos;re bringing intentionality to Android and iOS. Stay tuned for the mobile release notes.</p>
          <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-full px-10 h-12 shadow-xl shadow-sky-500/20 transition-all active:scale-95">
            <Link href="/downloads">View Platforms</Link>
          </Button>
        </motion.div>
      </main>

      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
           <p className="text-slate-600 text-xs tracking-widest uppercase">© 2026 Intentionality • Evolution through intention</p>
        </div>
      </footer>
    </div>
  );
}
