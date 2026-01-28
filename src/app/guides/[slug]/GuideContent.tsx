"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Chrome,
    ArrowRight,
    CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Guide } from "@/lib/guides";

export default function GuideContent({ guide }: { guide: Guide }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": guide.title,
        "description": guide.description,
        "author": {
            "@type": "Organization",
            "name": "Intentionality"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Intentionality",
            "logo": {
                "@type": "ImageObject",
                "url": "https://intentionality.app/iconog.png"
            }
        },
        "datePublished": "2026-01-28",
        "image": "https://intentionality.app/iconog.png"
    };

    return (
        <div className="min-h-screen bg-[#0f1a2a] text-slate-200 selection:bg-sky-500/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Background Glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0f1a2a]/80 backdrop-blur-md">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <ArrowLeft className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                            <Image src="/iconog.png" alt="Intentionality Icon" width={32} height={32} />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white hidden sm:inline-block">Intentionality</span>
                    </div>
                    <Button asChild variant="secondary" size="sm" className="bg-white text-[#0f1a2a] hover:bg-slate-200">
                        <Link href="/downloads">Install Now</Link>
                    </Button>
                </div>
            </nav>

            {/* Guide Header */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <Badge variant="outline" className="mb-6 border-sky-500/30 text-sky-400 bg-sky-500/5 px-4 py-1">
                            Digital Well-being Guide
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                            {guide.content.heading}
                        </h1>
                        <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                            {guide.content.introduction}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Guide Content */}
            <section className="pb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid gap-12">
                        {guide.content.sections.map((section, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Card className="bg-white/5 border-white/10 overflow-hidden">
                                    <CardContent className="p-8 md:p-12">
                                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 text-sm font-bold">
                                                {i + 1}
                                            </span>
                                            {section.title}
                                        </h2>
                                        <p className="text-slate-300 text-lg leading-relaxed">
                                            {section.content}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 p-8 md:p-12 rounded-3xl bg-sky-500/10 border border-sky-500/20"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            {guide.content.conclusion}
                        </p>
                        <div className="h-px bg-white/10 mb-8" />
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Ready to browse intentionally?</h3>
                                <p className="text-slate-400">Join thousands of users breaking the dopamine loop.</p>
                            </div>
                            <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white rounded-full font-bold group">
                                <a href="https://chromewebstore.google.com/detail/intentionality/bgmlmjomgakcgkgngpeimmkofpicpbfn">
                                    <Chrome className="mr-2 h-5 w-5" />
                                    Add to Chrome
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Why use Intentionality?</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { title: "Break Habit Loops", desc: "Interrupt mindless scrolling with a simple prompt." },
                            { title: "Privacy First", desc: "Your data never leaves your device." },
                            { title: "Gain Insights", desc: "Understand your digital habits with local analytics." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-3">
                                <div className="flex justify-center">
                                    <CheckCircle2 className="h-8 w-8 text-sky-400" />
                                </div>
                                <h3 className="font-bold text-white">{item.title}</h3>
                                <p className="text-sm text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded flex items-center justify-center overflow-hidden">
                                <Image src="/iconog.png" alt="Intentionality Icon" width={24} height={24} />
                            </div>
                            <span className="font-bold text-white">Intentionality</span>
                        </Link>
                        <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/changelog" className="hover:text-white transition-colors">View Changelog</Link>
                            <Link href="/report-problem" className="hover:text-white transition-colors">Contact Support</Link>
                        </div>
                        <p className="text-xs text-slate-600">© 2026 Intentionality. Built with intention.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}