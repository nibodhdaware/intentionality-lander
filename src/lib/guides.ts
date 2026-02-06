export interface Guide {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  content: {
    heading: string;
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
    conclusion: string;
  };
}

export const guides: Guide[] = [
  {
    slug: "how-to-stop-doomscrolling",
    title: "How to Stop Doomscrolling: 8 Science-Backed Strategies for Mindful Browsing",
    description: "Discover proven strategies to break the doomscrolling habit, understand the psychology behind endless scrolling, and reclaim your digital well-being with actionable tips.",
    keywords: ["stop doomscrolling", "mindful browsing", "break internet addiction", "digital well-being", "doom scrolling cure", "stop scrolling social media", "break scrolling habit", "digital detox tips"],
    content: {
      heading: "How to Stop Doomscrolling: Your Complete Guide to Breaking the Cycle",
      introduction: "Doomscrolling—the compulsive act of endlessly scrolling through negative news and social media despite the emotional toll—affects over 73% of internet users according to recent studies. This behavior hijacks your brain's reward system, leaving you feeling anxious, drained, and unable to stop. The good news? With the right strategies and tools, you can break free from this cycle and reclaim your mental peace.",
      sections: [
        {
          title: "Understanding Why Doomscrolling Is So Addictive",
          content: "Doomscrolling exploits your brain's negativity bias—an evolutionary mechanism that makes us pay more attention to threats than positive events. Social media algorithms amplify this by showing you increasingly alarming content because it generates more engagement. Each scroll releases a tiny hit of dopamine, creating a loop that's neurologically similar to slot machine addiction. Understanding this mechanism is the first step to breaking free: you're not weak-willed, you're fighting against systems designed by teams of psychologists to keep you hooked."
        },
        {
          title: "Recognize Your Doomscrolling Triggers",
          content: "Before you can stop doomscrolling, you need to identify what triggers it. Common triggers include boredom, anxiety, loneliness, procrastination, and the 'fear of missing out' (FOMO). Start keeping a simple log: when you catch yourself scrolling mindlessly, note the time, your location, and what you were feeling just before. Within a week, patterns will emerge. Perhaps you doomscroll most during lunch breaks, or when you're avoiding a difficult work task. This awareness transforms an unconscious habit into a conscious choice."
        },
        {
          title: "Set Clear Intentions Before Going Online",
          content: "One of the most powerful anti-doomscrolling techniques is the simple act of stating your purpose before opening any app or website. Ask yourself: 'What specific information do I need?' and 'How long should this take?' Write it down if necessary. Tools like Intentionality enforce this by requiring you to type your reason for visiting a site before it loads. This 5-second pause interrupts the automatic habit loop and engages your prefrontal cortex—the rational decision-making part of your brain—before your impulsive basal ganglia can take over."
        },
        {
          title: "Create Friction Between You and Distracting Apps",
          content: "Make it harder to fall into doomscrolling by adding intentional friction. Remove social media apps from your home screen and bury them in folders. Turn off all non-essential notifications. Enable grayscale mode on your phone to make the screen less visually stimulating. Log out of accounts after each session so you have to manually sign in again. Use browser extensions that require you to confirm your intent before loading distracting sites. Each barrier gives your conscious mind a chance to intervene before the habit takes hold."
        },
        {
          title: "Replace Scrolling with Healthier Alternatives",
          content: "Habits are easiest to break when you replace them with something else. Identify activities that satisfy the same underlying need without the negative effects. If you scroll when bored, try keeping a book nearby or downloading a puzzle app. If you scroll for connection, text a friend or call a family member instead. If you scroll to decompress, try a 5-minute breathing exercise or a short walk. The key is to have these alternatives ready and accessible so you can reach for them before the phone when the urge strikes."
        },
        {
          title: "Establish Tech-Free Zones and Times",
          content: "Designate specific areas and times where digital devices are off-limits. The bedroom is essential—blue light from screens disrupts melatonin production, and having your phone within reach makes nighttime doomscrolling almost inevitable. Consider also making meals device-free zones. Set a 'digital sunset' time each evening, perhaps 9 PM, after which you don't check news or social media. These boundaries train your brain that there are periods where scrolling simply isn't an option, making it easier to resist during the rest of the day."
        },
        {
          title: "Curate Your Feeds Ruthlessly",
          content: "If you can't avoid social media entirely, take control of what it shows you. Unfollow or mute accounts that consistently post anxiety-inducing content. Most platforms allow you to customize your feed preferences or mark content as 'not interested.' Follow accounts that share useful information, inspiration, or genuine humor. Remember: algorithms optimize for engagement, not your well-being. By actively curating your feed, you reclaim some control over what you consume and reduce the likelihood that one negative post will spiral into an hour of doomscrolling."
        },
        {
          title: "Practice Self-Compassion When You Slip Up",
          content: "Breaking the doomscrolling habit is a process, not a one-time event. You will have days where you fall back into old patterns—this is normal and expected. What matters is how you respond. Instead of berating yourself (which ironically can trigger more stress-scrolling), acknowledge the slip, identify what triggered it, and gently refocus. Each time you catch yourself and choose to stop is a victory. Over time, these small wins compound, and the neural pathways supporting mindless scrolling weaken while those supporting intentional behavior strengthen."
        }
      ],
      conclusion: "Doomscrolling is a powerful habit, but it's not unbreakable. By understanding the psychology behind it, identifying your personal triggers, and implementing strategies like intention-setting, creating friction, and establishing boundaries, you can reclaim hours of your day and protect your mental health. Tools like Intentionality are designed specifically to help with this journey by adding that crucial moment of pause before each potentially distracting site visit. Remember: every mindful choice you make rewires your brain toward intention over impulse. Start today, be patient with yourself, and watch as your relationship with technology transforms."
    }
  },
  {
    slug: "mindful-browsing-habits",
    title: "10 Mindful Browsing Habits to Transform Your Digital Life",
    description: "Discover 10 powerful mindful browsing habits that will reduce digital anxiety, improve focus, and help you build a healthier relationship with the internet.",
    keywords: ["mindful browsing", "digital hygiene", "healthy internet habits", "digital mindfulness", "reduce screen time", "internet addiction help", "conscious scrolling", "digital well-being tips"],
    content: {
      heading: "10 Mindful Browsing Habits for Better Mental Health",
      introduction: "Our digital habits shape our mental landscape. Just as we carelessly snack on junk food, we often consume digital content without thought, leading to 'popcorn brain' and chronic low-level anxiety. By adopting these 10 mindful browsing habits, you can transform your relationship with technology from one of compulsion to one of intention.",
      sections: [
        {
          title: "1. The 'Purpose Pause'",
          content: "Before opening any new tab or app, pause for three seconds. Ask yourself: 'What is my specific purpose here?' If you can't name the purpose, don't open it. This simple gap between impulse and action is where freedom lives."
        },
        {
          title: "2. Single-Tab Browsing",
          content: "Challenge yourself to keep only one tab open at a time. Multi-tab browsing fractures your attention and increases cognitive load. Finish one task before opening the next. If you must save something, use a 'read later' service instead of keeping the tab open as a reminder."
        },
        {
          title: "3. Turn Off Non-Human Notifications",
          content: "Audit your notification settings. Keep notifications for direct messages from real people (texts, DMs) but ruthlessly disable everything else: news alerts, 'someone liked your photo', app updates, and marketing pings. Reclaim your attention from algorithms."
        },
        {
          title: "4. The 20-20-20 Rule",
          content: "Digital eye strain causes physical stress that translates to mental fatigue. Every 20 minutes, look at something 20 feet away for 20 seconds. Use this moment to take a deep breath and check in with your body."
        },
        {
          title: "5. Curate Your Digital Environment",
          content: "Your digital feed is your digital diet. Unfollow accounts that make you feel inadequate, anxious, or angry. Follow creators who teach, inspire, or make you genuinely laugh. You are responsible for what you allow into your mind."
        },
        {
          title: "6. Narrate Your Actions",
          content: "When you feel yourself drifting, silently narrate what you are doing: 'I am opening my email to check for that invoice.' 'I am opening Twitter to see news about X.' This metacognition prevents you from slip-streaming into a 30-minute scroll hole."
        },
        {
          title: "7. Schedule 'Worry Time'",
          content: "Often we browse to soothe anxiety. Instead, schedule 15 minutes a day as 'worry time' to look up all the scary news or stressful topics. When the urge strikes outside this time, tell yourself: 'I will research that at 5 PM,' and get back to work."
        },
        {
          title: "8. Keep the Bedroom Analog",
          content: "Charge your phone outside the bedroom. Buy a physical alarm clock. The first and last hour of your day set the tone for your mental health; don't give them away to a screen."
        },
        {
          title: "9. Use Gray Scale",
          content: "Switch your phone or browser to grayscale mode. Colorful icons are designed to trigger dopamine. Removing color makes your device a tool again, rather than a toy."
        },
        {
          title: "10. The 'Done' Declaration",
          content: "When you close your laptop or lock your phone, say 'Done' out loud. This physical ritual signals to your brain that the digital session is over and helps you transition fully back to the physical world."
        }
      ],
      conclusion: "You don't have to quit the internet to find peace. By integrating these habits, you can remain connected without being consumed. Start with just one habit this week—perhaps the 'Purpose Pause'—and notice how your mental clarity shifts."
    }
  },
  {
    slug: "how-to-browse-intentionally",
    title: "How to Browse Intentionally: A Guide to Reclaiming Your Attention",
    description: "Learn the art of intentional browsing. This comprehensive guide covers techniques, mindset shifts, and tools to help you stay focused and defeat digital distraction.",
    keywords: ["browse intentionally", "intentional living", "focus strategies", "deep work", "digital minimalism", "attention economy", "conscious internet use"],
    content: {
      heading: "The Art of Intentional Browsing",
      introduction: "In an attention economy, your focus is the product. Corporations spend billions to capture and monetize your attention. Browsing intentionally is an act of rebellion—a declaration that your mind belongs to you. This guide explores how to move from being a passive consumer to an active, conscious user of the web.",
      sections: [
        {
          title: "Define Your 'Why' Before Every Click",
          content: "Intentionality begins with a question: 'Why am I here?' Before typing a URL or tapping an app, articulate your goal. 'I am here to find a recipe,' or 'I am here to unwind for 10 minutes.' If the 'why' is vague ('I'm bored'), the result will be mindless scrolling. Definining the purpose defines the endpoint."
        },
        {
          title: "Identify and Disrupt Your Triggers",
          content: "We all have 'loop behaviors' triggered by cues. Feeling stuck on a difficult paragraph? Ctrl+T -> Reddit. Feeling lonely? Tap Instagram. map your triggers. When you feel the urge to switch tasks, acknowledge the discomfort: 'I am feeling stuck, and my brain wants a dopamine hit.' Sit with the discomfort for just 60 seconds. Often, the urge passes."
        },
        {
          title: "Implementation Intentions",
          content: "Psychologists use 'If-Then' planning to build habits. Apply this to browsing: 'If I open YouTube to watch a tutorial, I will not look at the sidebar recommendations.' 'If I check email, I will close the tab immediately after sending the reply.' Pre-deciding your behavior reduces the cognitive load of resisting temptation in the moment."
        },
        {
          title: "Practice Interstitial Journaling",
          content: "Keep a notepad next to your computer. When you switch tasks or websites, write down the time and what you are doing. '10:15 AM - Checking pricing for project X.' This tiny friction keeps you anchored in the present and creates a log of your day, making you painfully aware of time sinks."
        },
        {
          title: "Use Tools That Force Reflection",
          content: "Willpower is a finite resource; don't rely on it alone. Use tools like the Intentionality extension that intercept distracting requests. When a screen asks 'Why are you visiting?', it forces the 'System 2' logical brain to engage, breaking the 'System 1' automatic habit loop."
        },
        {
          title: "Batch Your Low-Value Browsing",
          content: "Instead of checking news or social feeds intermittently throughout the day (which destroys deep work states), batch them. Allow yourself one or two specific windows for 'low-value' browsing. Paradoxically, knowing you have a dedicated time for scrolling makes it easier to resist during work hours."
        }
      ],
      conclusion: "Intentional browsing isn't about perfection; it's about progress. It's about waking up from the trance of the scroll one time more than you fall into it. Your attention is your life—spend it on what matters."
    }
  },
  {
    slug: "digital-mindfulness-guide",
    title: "The Ultimate Guide to Digital Mindfulness in 2026",
    description: "Stay sane in a hyper-connected world with our comprehensive guide to digital mindfulness, intentional living, and finding balance in the technological age.",
    keywords: ["digital mindfulness", "mindful tech", "intentional living", "tech detox", "digital wellbeing 2026", "conscious technology use", "mindful screen time"],
    content: {
      heading: "Digital Mindfulness: A Strategy for the Modern Age",
      introduction: "As technology becomes seamlessly integrated into every facet of our lives, 'logging off' is no longer a viable long-term strategy. The answer isn't rejection of technology, but a radical shift in how we relate to it. Digital mindfulness is the practice of maintaining awareness and intention in our digital interactions, moving from a state of passive consumption to active engagement.",
      sections: [
        {
          title: "The Attention Economy vs. The Mindful Brain",
          content: "Understand the battlefield: Tech giants employ neuroscientists to keep you scrolling. They exploit the 'variable ratio enforcement schedule'—the same psychological mechanism behind slot machines. Digital mindfulness starts with realizing that your distraction isn't a personal failure; it's a feature of the system. Awareness of these mechanics is the first shield against them."
        },
        {
          title: "The Practice of 'Digital Metacognition'",
          content: "Develop the habit of watching yourself browse. Notice the physical sensation of the urge to check your phone (often a tightening in the chest or a restless fidget). Notice the emotional aftertaste of a 30-minute scroll session (often depletion or envy). By observing these sensations without judgment, you create a gap between the trigger and the response."
        },
        {
          title: "Setting 'Sacred Spaces' and 'Sacred Times'",
          content: "In a world that is always 'on', we must artificially create 'off' switches. Designate the dinner table, the bathroom, and the bed as sacred, screen-free spaces. Protect the first hour of your morning and the last hour of your hearing as sacred times. These boundaries prevent digital smog from polluting every moment of your existence."
        },
        {
          title: "Mindful Content Consumption",
          content: "Treat information like food. Is this tweet nutritious? Is this video fueling me or draining me? Adopt a 'low-information diet'. prioritizing high-quality, long-form content over snackable, algorithmic feeds. Read one article fully instead of skimming ten headlines."
        },
        {
          title: "Leveraging Technology for Mindfulness",
          content: "Fight fire with fire. Use technology to protect your mind. Install generic blockers, use grayscale mode, and employ tools like Intentionality that insert a 'breath' before you browse. Turn your device from a slot machine into a toolbox."
        }
      ],
      conclusion: "Digital mindfulness is not a destination, but a daily practice. It is the repeated act of waking up from the digital trance and choosing, over and over again, to be the pilot of your own attention."
    }
  },
  {
    slug: "stop-procrastinating-online",
    title: "How to Stop Procrastinating Online: A Field Guide for Focus",
    description: "Tired of wasting hours online? Learn the psychology behind internet procrastination and discover actionable, proven strategies to get your work done.",
    keywords: ["stop procrastinating", "online productivity", "focus while working", "website blocker", "overcome internet procrastination", "adhd focus tips", "productivity hacks"],
    content: {
      heading: "Beat Online Procrastination and reclaim your Time",
      introduction: "The internet is the greatest productivity tool ever invented—and the world's most effective procrastination machine. We sit down to work, and three hours later we surface from a Wikipedia rabbit hole. Procrastination isn't about laziness; it's about emotional regulation. We avoid work because it makes us feel anxious or bored, and the internet offers instant, painless relief.",
      sections: [
        {
          title: "The 'Just Five Minutes' Micro-Commitment",
          content: "The hardest part of any task is starting. The brain views a large project as a threat. Trick your amygdala by committing to work for only five minutes. Tell yourself, 'I can quit after five minutes.' Usually, once you break the static friction of starting, the momentum will carry you forward."
        },
        {
          title: "Eliminate Frictionless Access",
          content: "As James Clear says, 'You do not rise to the level of your goals. You fall to the level of your systems.' If distraction is one click away, you will click it. Add friction: log out of social media accounts every day. Delete shortcuts from your bookmarks bar. Use extensions that force a waiting period before loading distracting sites. Make the bad habit hard."
        },
        {
          title: "The Power of 'Temptation Bundling'",
          content: "Link a behavior you want to do with a behavior you need to do. Only allow yourself to listen to your favorite podcast while doing admin work. Only check your favorite blog after completing a deep work block. This rewires your brain to associate the work with a reward."
        },
        {
          title: "Forgive Your Past Self",
          content: "Research shows that people who forgive themselves for procrastinating on a previous task are less likely to procrastinate on the next one. Guilt adds stress, and stress triggers more procrastination. Accept that you wasted time yesterday, let it go, and focus on the present moment."
        },
        {
          title: "Design Your Digital Cockpit",
          content: "When it's time to work, clear the decks. Close all unrelated tabs. Put your phone in another room (not just face down). An uncluttered screen leads to an uncluttered mind. Use full-screen mode for your text editor or work app to physically block out visual distractions."
        }
      ],
      conclusion: "Procrastination is a response to stress, not a character flaw. By understanding your emotional triggers and engineering your digital environment, you can stop fighting yourself and start getting things done."
    }
  },
  {
    slug: "best-way-to-block-distracting-websites",
    title: "The Best Way to Block Distracting Websites (That Actually Works)",
    description: "Blocking websites isn't enough if you just uninstall the blocker. Learn why 'soft blocking' and friction-based methods are superior for long-term focus.",
    keywords: ["block websites", "focus app", "distraction free", "internet blocker", "self control app", "website blocker chrome", "focus tools"],
    content: {
      heading: "Beyond Brute Force: A Smarter Way to Block Distractions",
      introduction: "We've all been there: you install a hardcore website blocker, feel productive for two hours, and then disable it in a moment of weakness because you 'need' to check something. Brute-force blocking often fails because it acts like a strict parent, inviting rebellion. The most effective blocking strategy isn't about restriction; it's about friction and mindfulness.",
      sections: [
        {
          title: "The Problem with 'Hard Blocking'",
          content: "Hard blockers completely prevent access to sites. While useful for extreme cases, they often lead to the 'binge-purge' cycle. When you finally turn the blocker off, you overindulge. Furthermore, they don't teach you self-regulation; they just act as crutches. If the crutch breaks, you fall."
        },
        {
          title: "The Magic of 'Soft Blocking' and Friction",
          content: "Soft blocking allow access to distracting sites, but adds a cost. This might be a waiting period (e.g., 'Wait 10 seconds to enter Facebook') or a cognitive cost (e.g., 'Type your reason for visiting'). This pause breaks the automatic habit loop, giving your rational brain a chance to ask, 'Do I really want to do this?' often, the answer is no."
        },
        {
          title: "Context-Aware Blocking",
          content: "Not all distractions are distractions all the time. TypeScript documentation is essential during work but a bore during downtime. YouTube is a distraction during deep work but a learning tool for tutorials. Use tools that allow you to set schedules or 'Focus Modes', blocking specific categories only when you need deep focus."
        },
        {
          title: "Reclaiming Agency with 'Intentionality'",
          content: "The goal isn't to never visit YouTube; it's to never visit YouTube *mindlessly*. Tools like Intentionality prompt you to state your purpose. If you type 'I am taking a 10-minute break to watch a movie trailer,' that is a successful, intentional interaction. If you can't think of a reason, the tool helps you close the tab. This builds the muscle of conscious choice."
        },
        {
          title: "Layered Defense Strategy",
          content: "Don't rely on one tool. Use a DNS blocker (like NextDNS) for high-level filtering of ads and gambling sites. Use a browser extension for mindful friction on social media. Use your phone's 'Do Not Disturb' mode for notification management. A layered defense catches what individual tools miss."
        }
      ],
      conclusion: "The best blocker is the one that helps you build internal discipline, not just external walls. By adding friction and requiring intention, you can navigate the web safely without cutting yourself off from it completely."
    }
  },
  {
    slug: "improve-focus-while-working-online",
    title: "How to Improve Focus While Working Online",
    description: "Practical advice on maintaining laser focus in a world full of digital distractions.",
    keywords: ["improve focus", "deep work", "concentration tips", "working online"],
    content: {
      heading: "Laser Focus in a Digital World",
      introduction: "Deep work is becoming a rare and valuable skill. Here's how to cultivate it while working in a browser.",
      sections: [
        {
          title: "Mono-tasking",
          content: "The myth of multi-tasking is productivity's greatest enemy. Focus on one tab, one task, one goal at a time."
        },
        {
          title: "Digital Environment Design",
          content: "Set up your browser to minimize noise. Use bookmarks effectively and hide distracting sidebars."
        },
        {
          title: "Regular Focus Intervals",
          content: "Use techniques like Pomodoro to balance intense focus with necessary mental breaks."
        }
      ],
      conclusion: "Focus is a muscle. The more you practice intentionality, the stronger it becomes."
    }
  },
  {
    slug: "how-to-break-internet-addiction",
    title: "How to Break Internet Addiction: A Step-by-Step Guide",
    description: "Practical steps to overcome internet addiction and reclaim your life from the screen.",
    keywords: ["internet addiction", "tech addiction", "digital detox", "unplugging"],
    content: {
      heading: "Reclaiming Your Life from the Screen",
      introduction: "Internet addiction can feel overwhelming, but it is possible to reset your brain's reward system.",
      sections: [
        {
          title: "Digital Fasting",
          content: "Start with short periods of complete disconnection. Even 30 minutes of no-screen time can make a difference."
        },
        {
          title: "Identify Core Needs",
          content: "What need is the internet fulfilling? Is it social connection, boredom, or an escape from stress?"
        },
        {
          title: "Replace with Analog Habits",
          content: "Find hobbies that don't involve a screen—reading, exercise, or crafting can provide more sustainable satisfaction."
        }
      ],
      conclusion: "Recovery takes time. Celebrate small wins and be patient with yourself."
    }
  },
  {
    slug: "mindful-social-media-use",
    title: "Mindful Social Media Use: How to Stay Connected Without Getting Lost",
    description: "Social media doesn't have to be toxic. Learn how to use it mindfully and intentionally.",
    keywords: ["mindful social media", "conscious scrolling", "social media balance"],
    content: {
      heading: "Conscious Connection",
      introduction: "Social media is a tool for connection, but it's often used for comparison and distraction. Here's how to fix that.",
      sections: [
        {
          title: "Curate Your Feed",
          content: "Unfollow accounts that make you feel inadequate or stressed. Follow those that inspire or educate you."
        },
        {
          title: "Active vs. Passive Use",
          content: "Engage with content intentionally rather than passively scrolling. Comment, share, and connect instead of just watching."
        },
        {
          title: "Time-Boxing Social Media",
          content: "Dedicate specific times for social media so it doesn't bleed into your entire day."
        }
      ],
      conclusion: "Social media should serve you, not the other way around."
    }
  },
  {
    slug: "intentional-internet-usage-tips",
    title: "Top 5 Intentional Internet Usage Tips for 2026",
    description: "Master the internet with these 5 essential tips for intentional and focused usage.",
    keywords: ["internet tips", "intentional usage", "digital productivity", "smart browsing"],
    content: {
      heading: "Mastering the Digital Tool",
      introduction: "The internet is the most powerful tool ever created. Make sure you are the one using it, and it's not using you.",
      sections: [
        {
          title: "The 'Reason for Visit' Prompt",
          content: "Using an extension that asks for your reason before allowing access to a site is incredibly effective."
        },
        {
          title: "Batch Your Notifications",
          content: "Don't let every pings interrupt your flow. Check notifications at set times throughout the day."
        },
        {
          title: "Mindful URL Entry",
          content: "Slow down when typing URLs. Use that moment to check in with your mental state."
        }
      ],
      conclusion: "Small changes in how you interact with your browser lead to big changes in your life."
    }
  }
];
