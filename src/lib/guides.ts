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
    title: "How to Stop Doomscrolling: A Guide to Mindful Browsing",
    description: "Learn effective strategies to break the cycle of doomscrolling and regain control over your digital time.",
    keywords: ["stop doomscrolling", "mindful browsing", "break internet addiction", "digital well-being"],
    content: {
      heading: "Break the Doomscrolling Cycle",
      introduction: "Doomscrolling—the act of continuously scrolling through bad news even though it's disheartening—has become a modern epidemic. Here's how to stop.",
      sections: [
        {
          title: "1. Acknowledge the Habit",
          content: "The first step to breaking any habit is awareness. Notice when you're scrolling without a purpose. Are you looking for information, or just filling a void?"
        },
        {
          title: "2. Set Intentions Before Browsing",
          content: "Before you open a browser or app, ask yourself: 'What is my goal?' Being intentional helps you stay on track and avoid falling into rabbit holes."
        },
        {
          title: "3. Use Tools for Reflection",
          content: "Intentionality prompts can help. When you're forced to type out *why* you're visiting a site, the automatic dopamine loop is interrupted."
        },
        {
          title: "4. Create 'No-Phone' Zones",
          content: "Establish areas in your home where digital devices aren't allowed, such as the bedroom or the dinner table."
        }
      ],
      conclusion: "Regaining control over your attention is a journey. Start small and use tools like Intentionality to support your progress."
    }
  },
  {
    slug: "mindful-browsing-habits",
    title: "10 Mindful Browsing Habits for Better Mental Health",
    description: "Discover how mindful browsing can reduce stress and increase productivity in your daily life.",
    keywords: ["mindful browsing", "digital mindfulness", "internet focus", "productivity tips"],
    content: {
      heading: "Mastering Digital Mindfulness",
      introduction: "Our digital habits significantly impact our mental health. By adopting mindful browsing habits, we can transform our relationship with technology.",
      sections: [
        {
          title: "1. The 2-Second Pause",
          content: "Always pause for two seconds before clicking a link. Ask: 'Do I really need to see this right now?'"
        },
        {
          title: "2. Close Unused Tabs",
          content: "Digital clutter leads to mental clutter. Keep your workspace clean by closing tabs that are no longer relevant."
        },
        {
          title: "3. Schedule Distractions",
          content: "Instead of fighting the urge to check social media, schedule 15 minutes of 'intentional distraction' twice a day."
        }
      ],
      conclusion: "Mindful browsing isn't about avoiding the internet; it's about using it as a tool rather than a crutch."
    }
  },
  {
    slug: "how-to-browse-intentionally",
    title: "How to Browse Intentionally and Reclaim Your Attention",
    description: "A comprehensive guide on intentional browsing techniques to help you stay focused and productive.",
    keywords: ["browse intentionally", "focus mode", "productivity guide", "intentionality"],
    content: {
      heading: "The Art of Intentional Browsing",
      introduction: "In an era of attention economies, browsing intentionally is an act of rebellion. It's about deciding what you consume instead of letting algorithms decide for you.",
      sections: [
        {
          title: "Define Your 'Why'",
          content: "Every time you open a browser, have a clear objective. Whether it's research, work, or entertainment, knowing your 'why' is the key."
        },
        {
          title: "Identify Your Triggers",
          content: "Notice which sites pull you into mindless loops. Is it news, social media, or shopping sites? Identifying these is the first step to mitigation."
        },
        {
          title: "Use Interstitial Journaling",
          content: "Briefly note what you just finished and what you're about to do. This small act of mindfulness keeps you anchored in the present."
        }
      ],
      conclusion: "Intentionality is a skill that gets better with practice. Use tools that help you pause and reflect."
    }
  },
  {
    slug: "digital-mindfulness-guide",
    title: "The Ultimate Guide to Digital Mindfulness in 2026",
    description: "Stay sane in a hyper-connected world with our guide to digital mindfulness and intentional living.",
    keywords: ["digital mindfulness", "mindful tech", "intentional living", "tech detox"],
    content: {
      heading: "Digital Mindfulness: A 2026 Strategy",
      introduction: "As technology becomes more integrated into our lives, digital mindfulness is no longer optional—it's essential for our well-being.",
      sections: [
        {
          title: "The Dopamine Loop",
          content: "Understand how apps are designed to keep you scrolling. Awareness of these mechanics helps you resist them."
        },
        {
          title: "Setting Digital Boundaries",
          content: "Establish clear times for 'on' and 'off'. Your brain needs time to disconnect to recover and focus deeply later."
        },
        {
          title: "Mindful Tools",
          content: "Leverage tools like Intentionality that act as a speed bump for your digital impulses."
        }
      ],
      conclusion: "Your attention is your most valuable resource. Protect it fiercely."
    }
  },
  {
    slug: "stop-procrastinating-online",
    title: "How to Stop Procrastinating Online and Get Work Done",
    description: "Tired of wasting hours online? Learn how to beat online procrastination with these proven tips.",
    keywords: ["stop procrastinating", "online productivity", "focus while working", "website blocker"],
    content: {
      heading: "Beat Online Procrastination",
      introduction: "The internet is a playground for procrastination. Here's how to stay on task and finish your work on time.",
      sections: [
        {
          title: "The 'Just 5 Minutes' Rule",
          content: "Commit to working on a task for just 5 minutes. Often, starting is the hardest part."
        },
        {
          title: "Eliminate Frictionless Access",
          content: "Make it harder to access distracting sites. Log out of accounts or use extensions that require a reason for visit."
        },
        {
          title: "Reward Deep Work",
          content: "After a session of deep, focused work, give yourself a real-world reward like a walk or a snack."
        }
      ],
      conclusion: "Procrastination is often a response to stress. Be kind to yourself while building better habits."
    }
  },
  {
    slug: "best-way-to-block-distracting-websites",
    title: "The Best Way to Block Distracting Websites (Without Losing Your Mind)",
    description: "Blocking websites isn't enough. Learn a better way to manage distractions and build long-term focus.",
    keywords: ["block websites", "focus app", "distraction free", "internet blocker"],
    content: {
      heading: "Beyond Simple Website Blocking",
      introduction: "Traditional website blockers are easy to bypass. You need a strategy that changes your behavior, not just your access.",
      sections: [
        {
          title: "Soft vs. Hard Blocking",
          content: "Hard blocking can feel restrictive and lead to 'binge' browsing later. Soft prompts are often more effective for long-term change."
        },
        {
          title: "The Power of Reflection",
          content: "When you have to explain *why* you want to visit a site, you often realize you don't actually need to."
        },
        {
          title: "Contextual Awareness",
          content: "Some sites are useful for work but distracting for leisure. Learn to differentiate based on your current task."
        }
      ],
      conclusion: "A balanced approach to digital boundaries is more sustainable than extreme restrictions."
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
