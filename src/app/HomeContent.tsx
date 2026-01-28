"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
    Chrome,
    Zap,
    ShieldCheck,
    BarChart3,
    MessageSquareQuote,
    ArrowRight,
    Github,
    CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { initAnalytics } from "@/lib/firebase";
import WaitlistModal from "@/components/WaitlistModal";
import FirefoxIcon from "@/components/icons/FirefoxIcon";
import AndroidIcon from "@/components/icons/AndroidIcon";
import IOSIcon from "@/components/icons/iOSIcon";
import { getPlatform, type Platform } from "@/lib/utils";

export default function HomeContent() {
    const [waitlistModal, setWaitlistModal] = React.useState<{ isOpen: boolean; platform: 'android' | 'ios' | 'firefox' }> ({
        isOpen: false,
        platform: 'android'
    });
    const [platform, setPlatform] = React.useState<Platform>('chrome');

    const heroIconRef = useRef(null);
    const isHeroIconInView = useInView(heroIconRef, {
        amount: "some",
        margin: "-64px 0px 0px 0px" // Account for navbar height
    });

    useEffect(() => {
        initAnalytics();
        setPlatform(getPlatform());
    }, []);

    const openWaitlistModal = (platform: 'android' | 'ios' | 'firefox') => {
        setWaitlistModal({ isOpen: true, platform });
    };

    const closeWaitlistModal = () => {
        setWaitlistModal(prev => ({ ...prev, isOpen: false }));
    };

    const features = [
        {
            title: "Mindful Prompts",
            description: "Instead of mindless scrolling, Intentionality asks 'Why are you visiting?' to break the habit loop.",
            icon: <MessageSquareQuote className="h-6 w-6 text-sky-400" />,
            color: "bg-sky-500/10"
        },
        {
            title: "Privacy First",
            description: "Everything stays on your device. Only minimal, anonymous data is synced for basic statistics.",
            icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
            color: "bg-emerald-500/10"
        },
        {
            title: "Deep Insights",
            description: "Visual charts of your most visited sites and the reasons behind them, processed locally.",
            icon: <BarChart3 className="h-6 w-6 text-amber-400" />,
            color: "bg-amber-500/10"
        },
        {
            title: "Offline Ready",
            description: "Works perfectly without an internet connection. Your data remains yours, always.",
            icon: <Zap className="h-6 w-6 text-rose-400" />,
            color: "bg-rose-500/10"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0f1a2a] text-slate-200 selection:bg-sky-500/30">
            {/* Background Glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0f1a2a]/80 backdrop-blur-md">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <motion.div
                        initial={false}
                        animate={{
                            opacity: isHeroIconInView ? 0 : 1,
                            y: isHeroIconInView ? -20 : 0,
                            pointerEvents: isHeroIconInView ? "none" : "auto"
                        }}
                        transition={{ 
                            duration: 0.4, 
                            ease: [0.23, 1, 0.32, 1] 
                        }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center transition-transform hover:scale-110">
                            <Image src="/iconog.png" alt="Intentionality Icon" width={32} height={32} />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Intentionality</span>
                    </motion.div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <a href="#features" className="hover:text-white transition-colors">Features</a>
                        <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
                        <a href="/changelog" className="hover:text-white transition-colors">Changelog</a>
                        <Button asChild variant="secondary" size="sm" className="bg-white text-[#0f1a2a] hover:bg-slate-200">
                            <Link href="/downloads">Install Now</Link>
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 overflow-hidden">
                <motion.div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Central Icon and Logo */}
                        <motion.div
                            ref={heroIconRef}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-col items-center justify-center gap-6 mb-12"
                        >
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sky-500/20 flex items-center justify-center bg-[#16253b] border border-white/10 transition-transform hover:scale-105 duration-500">
                                <Image src="/iconog.png" alt="Intentionality Icon" width={128} height={128} priority />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-3xl md:text-4xl font-black tracking-tighter text-white">Intentionality</span>
                                <div className="h-1 w-12 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full" />
                            </div>
                        </motion.div>

                        <Badge variant="outline" className="mb-6 border-sky-500/30 text-sky-400 bg-sky-500/5 px-4 py-1">
                            v1.6.2 is now available for Chrome & Android
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                            Browse with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Intention</span>,<br />Not Impulse.
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
                            Break the cycle of mindless scrolling and learn to <span className="text-slate-200 font-medium">browse</span> with purpose. <span className="text-slate-200 font-medium">Intentionality</span> empowers you to overcome the immediate <span className="text-slate-200 font-medium">impulse</span> for distraction by prompting you to pause and reflect on your digital habits.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-6">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
                                {(platform === 'chrome' || platform === 'other') && (
                                    <Button asChild size="lg" className="h-14 px-8 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-lg font-semibold shadow-lg shadow-sky-500/20 group">
                                        <a href="https://chromewebstore.google.com/detail/intentionality/bgmlmjomgakcgkgngpeimmkofpicpbfn">
                                            <Chrome className="mr-2 h-5 w-5" />
                                            Add to Chrome
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </Button>
                                )}

                                {platform === 'android' && (
                                    <Button onClick={() => openWaitlistModal('android')} size="lg" className="h-14 px-8 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-lg font-semibold shadow-lg shadow-sky-500/20 group">
                                        <AndroidIcon className="mr-2" size={20} />
                                        Join Android Waitlist
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                )}

                                {platform === 'ios' && (
                                    <Button onClick={() => openWaitlistModal('ios')} size="lg" className="h-14 px-8 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-lg font-semibold shadow-lg shadow-sky-500/20 group">
                                        <IOSIcon className="mr-2" size={20} />
                                        Join iOS Waitlist
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                )}

                                {platform === 'firefox' && (
                                    <Button onClick={() => openWaitlistModal('firefox')} size="lg" className="h-14 px-8 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-lg font-semibold shadow-lg shadow-sky-500/20 group">
                                        <FirefoxIcon className="mr-2" size={20} />
                                        Join Firefox Waitlist
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                )}
                            </div>

                            <Link href="/downloads" className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-1 group">
                                View all platforms
                                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-20 relative max-w-5xl mx-auto"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-sky-500/10">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2a] via-transparent to-transparent z-10" />
                            <div className="aspect-video w-full bg-slate-800">
                                <iframe
                                    src="https://www.youtube.com/embed/PXsUAK_GsIQ"
                                    title="Intentionality Demo"
                                    className="w-full h-full border-0"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 p-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl hidden lg:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-500/20 rounded-lg">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-slate-400">Procrastination</p>
                                    <p className="text-sm font-bold text-white">Reduced by 80%</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 bg-white/[0.02]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything you need to focus</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Powerful tools designed to help you regain control over your digital life.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Card className="h-full bg-white/5 border-white/10 hover:border-sky-500/30 transition-all group">
                                    <CardContent className="p-8">
                                        <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                            {feature.icon}
                                        </div>
                                        <div className="text-xl font-bold text-white mb-3">{feature.title}</div>
                                        <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works / Platform Tabs */}
            <section id="how-it-works" className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Choose your platform</h2>
                            <p className="text-slate-400">Seamless integration wherever you browse or scroll.</p>
                        </div>

                        <Tabs defaultValue="chrome" className="w-full">
                            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl mx-auto mb-12 bg-white/5 border border-white/10 p-1 rounded-2xl h-auto md:h-12 items-stretch">
                                <TabsTrigger
                                    value="chrome"
                                    className="data-[state=active]:bg-sky-500 data-[state=active]:text-white text-slate-400 hover:text-slate-100 transition-all duration-300 rounded-xl px-4 py-3 md:py-0 flex items-center justify-center gap-2"
                                >
                                    <Chrome className="size-4 shrink-0" />
                                    <span className="font-semibold">Chrome</span>
                                </TabsTrigger>
                                <TabsTrigger
                                    value="mobile"
                                    className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-slate-400 hover:text-slate-100 transition-all duration-300 rounded-xl px-4 py-3 md:py-0 flex items-center justify-center gap-2"
                                >
                                    <svg className="size-4 shrink-0" viewBox="0 0 256 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                        <defs>
                                            <mask id="android-mask-trigger">
                                                <rect width="256" height="150" fill="white" />
                                                <path d="M194.59 113.712c5.122-3.41 5.867-11.3 1.661-17.62-4.203-6.323-11.763-8.682-16.883-5.273-5.122 3.41-5.868 11.3-1.662 17.621 4.203 6.322 11.764 8.682 16.883 5.272ZM78.518 108.462c4.206-6.321 3.46-14.21-1.662-17.62-5.123-3.41-12.68-1.05-16.886 5.27-4.203 6.323-3.458 14.212 1.662 17.622 5.122 3.41 12.683 1.05 16.886-5.272Z" fill="black" />
                                            </mask>
                                        </defs>
                                        <path fill="currentColor" mask="url(#android-mask-trigger)" d="M255.285 143.47c-.084-.524-.164-1.042-.251-1.56a128.119 128.119 0 0 0-12.794-38.288 128.778 128.778 0 0 0-23.45-31.86 129.166 129.166 0 0 0-22.713-18.005c.049-.08.09-.168.14-.25 2.582-4.461 5.172-8.917 7.755-13.38l7.576-13.068c1.818-3.126 3.632-6.26 5.438-9.386a11.776 11.776 0 0 0 .662-10.484 11.668 11.668 0 0 0-4.823-5.536 11.85 11.85 0 0 0-5.004-1.61 11.963 11.963 0 0 0-2.218.018 11.738 11.738 0 0 0-8.968 5.798c-1.814 3.127-3.628 6.26-5.438 9.386l-7.576 13.069c-2.583 4.462-5.173 8.918-7.755 13.38-.282.487-.567.973-.848 1.467-.392-.157-.78-.313-1.172-.462-14.24-5.43-29.688-8.4-45.836-8.4-.442 0-.879 0-1.324.006-14.357.143-28.152 2.64-41.022 7.12a119.434 119.434 0 0 0-4.42 1.642c-.262-.455-.532-.911-.79-1.367-2.583-4.462-5.173 8.918-7.755-13.38L65.123 15.25c-1.818-3.126-3.632-6.259-5.439-9.386A11.736 11.736 0 0 0 48.5.048 11.71 11.71 0 0 0 43.49 1.66a11.716 11.716 0 0 0-4.077 4.063c-.281.474-.532.967-.742 1.473a11.808 11.808 0 0 0-.365 8.188c.259.786.594 1.554 1.023 2.296a3973.32 3973.32 0 0 1 5.439 9.386c2.53 4.357 5.054 8.713 7.58 13.069 2.582 4.462 5.168 8.918 7.75 13.38.02.038.046.075.065.112A129.184 129.184 0 0 0 45.32 64.38a129.693 129.693 0 0 0-22.2 24.015 127.737 127.737 0 0 0-9.34 15.24 128.238 128.238 0 0 0-10.843 28.764 130.743 130.743 0 0 0-1.951 9.524c-.087.518-.167 1.042-.247 1.56A124.978 124.978 0 0 0 0 149.118h256c-.205-1.891-.449-3.77-.734-5.636l.019-.012Z" />
                                    </svg>
                                    <span className="font-semibold">Android</span>
                                </TabsTrigger>
                                <TabsTrigger
                                    value="ios"
                                    className="data-[state=active]:bg-slate-200 data-[state=active]:text-slate-900 text-slate-400 hover:text-slate-100 transition-all duration-300 rounded-xl px-4 py-3 md:py-0 flex items-center justify-center gap-2"
                                >
                                    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                                    <span className="font-semibold">iOS</span>
                                </TabsTrigger>
                                <TabsTrigger
                                    value="firefox"
                                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-slate-400 hover:text-slate-100 transition-all duration-300 rounded-xl px-4 py-3 md:py-0 flex items-center justify-center gap-2"
                                >
                                    <svg className="size-4 shrink-0" viewBox="0 0 256 265" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                        <path fill="currentColor" d="M248.033 88.713c-5.569-13.399-16.864-27.866-25.71-32.439a133.169 133.169 0 0 1 12.979 38.9l.023.215c-14.49-36.126-39.062-50.692-59.13-82.41a155.1 155.1 0 0 1-3.019-4.907 40.605 40.605 0 0 1-1.412-2.645 23.31 23.31 0 0 1-1.912-5.076.331.331 0 0 0-.291-.331.469.469 0 0 0-.241 0c-.016 0-.043.03-.063.037-.02.006-.063.036-.092.049l.049-.086c-32.19 18.849-43.113 53.741-44.118 71.194a64.108 64.108 0 0 0-35.269 13.593 38.336 38.336 0 0 0-3.307-2.506 59.417 59.417 0 0 1-.36-31.324 94.912 94.912 0 0 0-30.848 23.841h-.06c-5.079-6.438-4.722-27.667-4.431-32.102a22.957 22.957 0 0 0-4.279 2.272 93.435 93.435 0 0 0-12.526 10.73 111.954 111.954 0 0 0-11.98 14.375v.019-.023A108.26 108.26 0 0 0 4.841 108.92l-.171.846a203.818 203.818 0 0 0-1.26 8.003c0 .096-.02.185-.03.281a122.12 122.12 0 0 0-2.08 17.667v.662c.086 98.661 106.944 160.23 192.344 110.825a128.165 128.165 0 0 0 62.12-89.153c.215-1.653.39-3.29.582-4.96a131.8 131.8 0 0 0-8.313-64.378ZM100.322 189.031c.599.288 1.161.599 1.776.873l.089.057a68.838 68.838 0 0 1-1.865-.93Zm29.357-77.297Zm105.656-16.315v-.123l.023.136-.023-.013Z" />
                                        <path fill="currentColor" d="M185.754 103.778c.278.195.536.39.797.585a69.775 69.775 0 0 0-11.904-15.525C134.815 48.999 164.208 2.457 169.165.093l.049-.073c-32.19 18.849-43.113 53.741-44.118 71.194 1.495-.103 2.976-.229 4.504-.229a64.68 64.68 0 0 1 56.154 32.793Z" />
                                        <path fill="currentColor" d="M83.852 80.545a81.51 81.51 0 0 1 2.645 1.756 59.407 59.407 0 0 1-.36-31.324 94.926 94.926 0 0 0-30.849 23.841c.625-.017 19.216-.351 28.564 5.727Z" />
                                        <path fill="currentColor" d="M2.471 139.411c9.89 58.443 62.857 103.063 122.989 104.766 55.652 1.574 91.205-30.732 105.894-62.248a116.067 116.067 0 0 0 3.988-86.497v-.122c0-.096-.02-.153 0-.123l.023.215c4.547 29.684-10.552 58.443-34.155 77.889l-.073.166c-45.989 37.455-90.002 22.598-98.91 16.533a64.67 64.67 0 0 1-1.865-.929c-26.814-12.817-37.891-37.247-35.517-58.198a32.912 32.912 0 0 1-30.359-19.096 48.336 48.336 0 0 1 47.117-1.891 63.821 63.821 0 0 0 48.119 1.891c-.049-1.042-22.353-9.92-31.05-18.484-4.646-4.58-6.851-6.786-8.805-8.442a38.145 38.145 0 0 0-3.307-2.507c-.761-.519-1.617-1.081-2.645-1.756-9.348-6.078-27.939-5.744-28.554-5.727h-.059c-5.079-6.438-4.722-27.667-4.431-32.101a22.862 22.862 0 0 0-4.279 2.271 93.373 93.373 0 0 0-12.526 10.73 112.062 112.062 0 0 0-12.03 14.342v.019-.023A108.26 108.26 0 0 0 4.841 108.92c-.062.261-4.616 20.167-2.37 30.491Z" />
                                    </svg>
                                    <span className="font-semibold">Firefox</span>
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="chrome" className="mt-0">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-white">Stop Mindless Tab Opening</h3>
                                        <ul className="space-y-4">
                                            {[
                                                "Prompted reflection on every distracting URL",
                                                "Automatic blocking for your 'blacklisted' sites",
                                                "Local-only storage for maximum privacy",
                                                "Minimal anonymous sync for basic usage stats"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-300">
                                                    <CheckCircle2 className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-sky-500/20">
                                            <a href="https://chromewebstore.google.com/detail/intentionality/bgmlmjomgakcgkgngpeimmkofpicpbfn" target="_blank" rel="noopener noreferrer">
                                                Get the extension
                                            </a>
                                        </Button>
                                    </div>
                                    <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-sky-500/20 to-transparent border border-white/10 flex items-center justify-center">
                                        <Chrome className="h-32 w-32 text-sky-500/40" />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="mobile" className="mt-0">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-white">Intentional App Usage</h3>
                                        <ul className="space-y-4">
                                            {[
                                                "Overlay prompts when opening monitored apps",
                                                "Rate your intentionality from 1-5",
                                                "Full offline functionality — no cloud required",
                                                "Native Android service for local monitoring"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-300">
                                                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button onClick={() => openWaitlistModal('android')} className="bg-green-500 hover:bg-green-600 text-white font-bold h-12 px-8 rounded-xl transition-all">
                                            Join Android Waitlist
                                        </Button>
                                    </div>
                                    <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-green-500/20 to-transparent border border-white/10 flex items-center justify-center">
                                        <svg className="h-32 w-32 text-green-500/40" viewBox="0 0 256 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                            <defs>
                                                <mask id="android-mask-content">
                                                    <rect width="256" height="150" fill="white" />
                                                    <path d="M194.59 113.712c5.122-3.41 5.867-11.3 1.661-17.62-4.203-6.323-11.763-8.682-16.883-5.273-5.122 3.41-5.868 11.3-1.662 17.621 4.203 6.322 11.764 8.682 16.883 5.272ZM78.518 108.462c4.206-6.321 3.46-14.21-1.662-17.62-5.123-3.41-12.68-1.05-16.886 5.27-4.203 6.323-3.458 14.212 1.662 17.622 5.122 3.41 12.683 1.05 16.886-5.272Z" fill="black" />
                                                </mask>
                                            </defs>
                                            <path fill="currentColor" mask="url(#android-mask-content)" d="M255.285 143.47c-.084-.524-.164-1.042-.251-1.56a128.119 128.119 0 0 0-12.794-38.288 128.778 128.778 0 0 0-23.45-31.86 129.166 129.166 0 0 0-22.713-18.005c.049-.08.09-.168.14-.25 2.582-4.461 5.172-8.917 7.755-13.38l7.576-13.068c1.818-3.126 3.632-6.26 5.438-9.386a11.776 11.776 0 0 0 .662-10.484 11.668 11.668 0 0 0-4.823-5.536 11.85 11.85 0 0 0-5.004-1.61 11.963 11.963 0 0 0-2.218.018 11.738 11.738 0 0 0-8.968 5.798c-1.814 3.127-3.628 6.26-5.438 9.386l-7.576 13.069c-2.583 4.462-5.173 8.918-7.755 13.38-.282.487-.567.973-.848 1.467-.392-.157-.78-.313-1.172-.462-14.24-5.43-29.688-8.4-45.836-8.4-.442 0-.879 0-1.324.006-14.357.143-28.152 2.64-41.022 7.12a119.434 119.434 0 0 0-4.42 1.642c-.262-.455-.532-.911-.79-1.367-2.583-4.462-5.173 8.918-7.755-13.38L65.123 15.25c-1.818-3.126-3.632-6.259-5.439-9.386A11.736 11.736 0 0 0 48.5.048 11.71 11.71 0 0 0 43.49 1.66a11.716 11.716 0 0 0-4.077 4.063c-.281.474-.532.967-.742 1.473a11.808 11.808 0 0 0-.365 8.188c.259.786.594 1.554 1.023 2.296a3973.32 3973.32 0 0 1 5.439 9.386c2.53 4.357 5.054 8.713 7.58 13.069 2.582 4.462 5.168 8.918 7.75 13.38.02.038.046.075.065.112A129.184 129.184 0 0 0 45.32 64.38a129.693 129.693 0 0 0-22.2 24.015 127.737 127.737 0 0 0-9.34 15.24 128.238 128.238 0 0 0-10.843 28.764 130.743 130.743 0 0 0-1.951 9.524c-.087.518-.167 1.042-.247 1.56A124.978 124.978 0 0 0 0 149.118h256c-.205-1.891-.449-3.77-.734-5.636l.019-.012Z" />
                                        </svg>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="ios" className="mt-0">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-white">Mindful iOS Habits</h3>
                                        <ul className="space-y-4">
                                            {[
                                                "Native iOS experience built for focus",
                                                "Seamless Screen Time integration",
                                                "Rate your sessions directly from notifications",
                                                "Privacy-first local processing"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-300">
                                                    <CheckCircle2 className="h-5 w-5 text-slate-300 shrink-0 mt-0.5" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button onClick={() => openWaitlistModal('ios')} className="bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold h-12 px-8 rounded-xl transition-all">
                                            Join iOS Waitlist
                                        </Button>
                                    </div>
                                    <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-slate-200/10 to-transparent border border-white/10 flex items-center justify-center">
                                        <svg className="h-32 w-32 text-slate-200/30" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="firefox" className="mt-0">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-white">Firefox Focused Browsing</h3>
                                        <ul className="space-y-4">
                                            {[
                                                "The same intentional logic for Firefox users",
                                                "Lightweight and performance optimized",
                                                "Privacy-first, no personal data collection",
                                                "Easy-to-use blocklist management"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-300">
                                                    <CheckCircle2 className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button onClick={() => openWaitlistModal('firefox')} className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 px-8 rounded-xl transition-all">
                                            Join Firefox Waitlist
                                        </Button>
                                    </div>
                                    <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-orange-500/20 to-transparent border border-white/10 flex items-center justify-center">
                                        <svg className="h-32 w-32 text-orange-500/40" viewBox="0 0 256 265" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                            <path fill="currentColor" d="M248.033 88.713c-5.569-13.399-16.864-27.866-25.71-32.439a133.169 133.169 0 0 1 12.979 38.9l.023.215c-14.49-36.126-39.062-50.692-59.13-82.41a155.1 155.1 0 0 1-3.019-4.907 40.605 40.605 0 0 1-1.412-2.645 23.31 23.31 0 0 1-1.912-5.076.331.331 0 0 0-.291-.331.469.469 0 0 0-.241 0c-.016 0-.043.03-.063.037-.02.006-.063.036-.092.049l.049-.086c-32.19 18.849-43.113 53.741-44.118 71.194a64.108 64.108 0 0 0-35.269 13.593 38.336 38.336 0 0 0-3.307-2.506 59.417 59.417 0 0 1-.36-31.324 94.912 94.912 0 0 0-30.848 23.841h-.06c-5.079-6.438-4.722-27.667-4.431-32.102a22.957 22.957 0 0 0-4.279 2.272 93.435 93.435 0 0 0-12.526 10.73 111.954 111.954 0 0 0-11.98 14.375v.019-.023A108.26 108.26 0 0 0 4.841 108.92l-.171.846a203.818 203.818 0 0 0-1.26 8.003c0 .096-.02.185-.03.281a122.12 122.12 0 0 0-2.08 17.667v.662c.086 98.661 106.944 160.23 192.344 110.825a128.165 128.165 0 0 0 62.12-89.153c.215-1.653.39-3.29.582-4.96a131.8 131.8 0 0 0-8.313-64.378ZM100.322 189.031c.599.288 1.161.599 1.776.873l.089.057a68.838 68.838 0 0 1-1.865-.93Zm29.357-77.297Zm105.656-16.315v-.123l.023.136-.023-.013Z" />
                                            <path fill="currentColor" d="M185.754 103.778c.278.195.536.39.797.585a69.775 69.775 0 0 0-11.904-15.525C134.815 48.999 164.208 2.457 169.165.093l.049-.073c-32.19 18.849-43.113 53.741-44.118 71.194 1.495-.103 2.976-.229 4.504-.229a64.68 64.68 0 0 1 56.154 32.793Z" />
                                            <path fill="currentColor" d="M83.852 80.545a81.51 81.51 0 0 1 2.645 1.756 59.407 59.407 0 0 1-.36-31.324 94.926 94.926 0 0 0-30.849 23.841c.625-.017 19.216-.351 28.564 5.727Z" />
                                            <path fill="currentColor" d="M2.471 139.411c9.89 58.443 62.857 103.063 122.989 104.766 55.652 1.574 91.205-30.732 105.894-62.248a116.067 116.067 0 0 0 3.988-86.497v-.122c0-.096-.02-.153 0-.123l.023.215c4.547 29.684-10.552 58.443-34.155 77.889l-.073.166c-45.989 37.455-90.002 22.598-98.91 16.533a64.67 64.67 0 0 1-1.865-.929c-26.814-12.817-37.891-37.247-35.517-58.198a32.912 32.912 0 0 1-30.359-19.096 48.336 48.336 0 0 1 47.117-1.891 63.821 63.821 0 0 0 48.119 1.891c-.049-1.042-22.353-9.92-31.05-18.484-4.646-4.58-6.851-6.786-8.805-8.442a38.145 38.145 0 0 0-3.307-2.507c-.761-.519-1.617-1.081-2.645-1.756-9.348-6.078-27.939-5.744-28.554-5.727h-.059c-5.079-6.438-4.722-27.667-4.431-32.101a22.862 22.862 0 0 0-4.279 2.271 93.373 93.373 0 0 0-12.526 10.73 112.062 112.062 0 0 0-12.03 14.342v.019-.023A108.26 108.26 0 0 0 4.841 108.92c-.062.261-4.616 20.167-2.37 30.491Z" />
                                        </svg>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>



            {/* Testimonials */}
            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white text-center mb-16">Loved by users</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sahil Kale",
                                text: "Have been using it since 2 days an mannnn let me say my procrastination is looong dead. This worksssssss!!!!!!",
                                role: "Early Adopter"
                            },
                            {
                                name: "Alex Rivera",
                                text: "The 'Why am I visiting' prompt is a game changer. It forces a 2-second pause that stops the dopamine loop.",
                                role: "Power User"
                            },
                            {
                                name: "Jordan Smith",
                                text: "The Android app is super clean. It actually helps me stay away from Instagram when I should be working.",
                                role: "Daily Browser"
                            }
                        ].map((t, i) => (
                            <motion.div key={i} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                                <Card className="bg-white/5 border-white/10 h-full">
                                    <CardContent className="p-8">
                                        <div className="flex text-yellow-500 mb-4 gap-0.5">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <svg key={s} className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-slate-300 italic mb-6">&quot;{t.text}&quot;</p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold">
                                                {t.name[0]}
                                            </div>
                                            <div>
                                                <p className="text-white font-bold text-sm">{t.name}</p>
                                                <p className="text-slate-500 text-xs">{t.role}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Science Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge variant="outline" className="mb-6 border-indigo-500/30 text-indigo-400 bg-indigo-500/5 px-4 py-1">
                                The Science
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Why we <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">doomscroll</span>
                            </h2>
                            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                                <p>
                                    It is not a lack of willpower; it is biology. Modern applications are ingeniously designed to trigger <strong>dopamine loops</strong> that keep us hooked. Every time you open a distracting app, your brain receives a small, immediate reward.
                                </p>
                                <p>
                                    Intentionality disrupts this loop by introducing a <strong>&quot;micro-friction&quot;</strong>—a moment of pause. This brief interruption allows your prefrontal cortex (the logical part of your brain) to catch up with your basal ganglia (the habit part).
                                </p>
                                <p>
                                    This gives you the agency to choose: <em>&quot;Do I really want to be here right now?&quot;</em> This simple act of conscious choice rewires your brain over time to seek <strong>intention</strong> rather than <strong>impulse</strong>.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
                            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                        <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center">
                                            <span className="text-red-400 font-bold">1</span>
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">The Trigger</div>
                                            <p className="text-slate-400 text-sm">You feel bored or anxious.</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <ArrowRight className="text-slate-600 rotate-90" />
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 opacity-50">
                                        <div className="h-10 w-10 rounded-full bg-slate-500/20 flex items-center justify-center">
                                            <span className="text-slate-400 font-bold">2</span>
                                        </div>
                                        <div>
                                            <div className="text-slate-300 font-bold line-through decoration-red-500/50">The Routine</div>
                                            <p className="text-slate-500 text-sm">Mindlessly opening a social app.</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0f1a2a] px-3 py-1 border border-sky-500/30 rounded-full text-sky-400 text-xs font-bold z-10">
                                            INTENTIONALITY INTERVENES
                                        </div>
                                        <ArrowRight className="text-sky-500 rotate-90" />
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-sky-500/10 rounded-xl border border-sky-500/20">
                                        <div className="h-10 w-10 rounded-full bg-sky-500/20 flex items-center justify-center">
                                            <CheckCircle2 className="h-5 w-5 text-sky-400" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">The New Reward</div>
                                            <p className="text-slate-400 text-sm">Pride in staying focused and in control.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-400">Everything you need to know about reclaiming your digital attention.</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem value="item-1" className="border border-white/10 rounded-xl px-6 bg-white/5 data-[state=open]:border-sky-500/30 transition-colors">
                            <AccordionTrigger className="text-white hover:text-sky-400 hover:no-underline text-lg">
                                How does Intentionality actually work?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
                                It works by intercepting your request to visit a website you&apos;ve marked as distracting. Instead of loading the site immediately, it displays a calm, beautiful screen asking you to type your intention (e.g., &quot;I need to check a message&quot;). This 5-second pause breaks the automatic habit loop and gives you control back.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border border-white/10 rounded-xl px-6 bg-white/5 data-[state=open]:border-sky-500/30 transition-colors">
                            <AccordionTrigger className="text-white hover:text-sky-400 hover:no-underline text-lg">
                                Is my browsing history private?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
                                Absolutely. Privacy is our core value. Intentionality operates locally on your device. We do not track the websites you visit, sell your data to advertisers, or upload your browsing history to the cloud. The only data that leaves your device is anonymous aggregated usage statistics (like &quot;1 intentional visit logged&quot;) to help us improve the product, and even this is minimal.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border border-white/10 rounded-xl px-6 bg-white/5 data-[state=open]:border-sky-500/30 transition-colors">
                            <AccordionTrigger className="text-white hover:text-sky-400 hover:no-underline text-lg">
                                Does it really help with procrastination?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
                                Yes. Our users report a significant reduction in mindless browsing within the first week. By requiring you to articulate <em>why</em> you are visiting a site, you often realize you didn&apos;t actually have a clear reason, leading you to close the tab and return to your productive work.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="border border-white/10 rounded-xl px-6 bg-white/5 data-[state=open]:border-sky-500/30 transition-colors">
                            <AccordionTrigger className="text-white hover:text-sky-400 hover:no-underline text-lg">
                                Can I use it on my phone?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
                                We are actively developing our mobile applications! We have an Android version in testing (you can join the waitlist above) and an iOS version in development. We believe the principles of intentional browsing are even more critical on mobile devices where notifications constantly vie for our attention.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="border border-white/10 rounded-xl px-6 bg-white/5 data-[state=open]:border-sky-500/30 transition-colors">
                            <AccordionTrigger className="text-white hover:text-sky-400 hover:no-underline text-lg">
                                Is it free to use?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
                                The core features of Intentionality are free to use. We believe everyone deserves the tools to reclaim their attention. We may introduce premium features for advanced analytics, team syncing, and multi-device cloud backup in the future, but the essential blocking and prompting tools will remain accessible.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mindful Browsing Resources</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Expert guides to help you regain control of your digital life and build better internet habits.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                slug: "how-to-stop-doomscrolling",
                                title: "How to Stop Doomscrolling",
                                desc: "Effective strategies to break the cycle of doomscrolling."
                            },
                            {
                                slug: "mindful-browsing-habits",
                                title: "10 Mindful Browsing Habits",
                                desc: "Transform your relationship with technology."
                            },
                            {
                                slug: "how-to-browse-intentionally",
                                title: "Browse Intentionally",
                                desc: "Reclaim your attention in an attention economy."
                            },
                            {
                                slug: "stop-procrastinating-online",
                                title: "Stop Procrastinating Online",
                                desc: "Beat online procrastination with these proven tips."
                            },
                            {
                                slug: "best-way-to-block-distracting-websites",
                                title: "Blocking Distracting Websites",
                                desc: "A better way to manage digital distractions."
                            },
                            {
                                slug: "digital-mindfulness-guide",
                                title: "Digital Mindfulness Guide",
                                desc: "Stay sane in a hyper-connected world."
                            }
                        ].map((guide, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Link href={`/guides/${guide.slug}`}>
                                    <Card className="h-full bg-white/5 border-white/10 hover:border-sky-500/30 transition-all hover:bg-white/[0.07] group">
                                        <CardContent className="p-6">
                                            <div className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{guide.title}</div>
                                            <p className="text-slate-400 text-sm mb-4">{guide.desc}</p>
                                            <div className="flex items-center text-sky-400 text-xs font-bold uppercase tracking-wider">
                                                Read {guide.title} <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link href="/guides/intentional-internet-usage-tips" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                            View all guides and resources
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto p-12 md:p-20 rounded-[2.5rem] bg-white/[0.03] border border-white/10 relative overflow-hidden group shadow-2xl shadow-sky-500/5"
                    >
                        {/* Background Glows */}
                        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-sky-500/20 transition-colors duration-700" />
                        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700" />

                        <div className="relative z-10">
                            <Badge variant="outline" className="mb-6 border-sky-500/30 text-sky-400 bg-sky-500/5 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">
                                Start your journey
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                                Ready to take back <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">control?</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                                Join thousands of users who are building a more intentional, focused relationship with technology every single day.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button asChild size="lg" className="h-14 px-10 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-lg font-bold shadow-xl shadow-sky-500/20 group/btn transition-all active:scale-95">
                                    <a href="https://chromewebstore.google.com/detail/intentionality/bgmlmjomgakcgkgngpeimmkofpicpbfn">
                                        <Chrome className="mr-2 h-5 w-5" />
                                        Install on Chrome
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="h-14 px-10 border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full text-lg font-bold transition-all active:scale-95">
                                    <a href="/report-problem">Submit Feedback</a>
                                </Button>
                            </div>
                        </div>

                        {/* Animated border line */}
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded flex items-center justify-center overflow-hidden">
                                <Image src="/iconog.png" alt="Intentionality Icon" width={24} height={24} />
                            </div>
                            <span className="font-bold text-white">Intentionality</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/changelog" className="hover:text-white transition-colors">View Changelog</Link>
                            <Link href="/report-problem" className="hover:text-white transition-colors">Contact Support</Link>
                            <a href="https://github.com/nibodhdaware" className="hover:text-white transition-colors flex items-center gap-1">
                                <Github className="h-4 w-4" /> Github
                            </a>
                        </div>
                        <p className="text-xs text-slate-600">© 2026 Intentionality. Built with intention.</p>
                    </div>
                </div>
            </footer>

            {/* Waitlist Modal */}
            <WaitlistModal
                isOpen={waitlistModal.isOpen}
                onClose={closeWaitlistModal}
                platform={waitlistModal.platform}
            />
        </div>
    );
}