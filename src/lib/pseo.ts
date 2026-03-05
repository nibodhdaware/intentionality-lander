export interface ComparisonPage {
  slug: string;
  title: string;
  description: string;
  competitor: string;
  idealForIntentionality: string;
  idealForCompetitor: string;
  featureRows: Array<{
    feature: string;
    intentionality: string;
    competitor: string;
  }>;
  faqs: Array<{ question: string; answer: string }>;
}

export interface AlternativePage {
  slug: string;
  title: string;
  description: string;
  tool: string;
  reasonsToSwitch: string[];
  whatYouGain: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export interface PersonaPage {
  slug: string;
  title: string;
  description: string;
  persona: string;
  painPoints: string[];
  workflow: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export const comparisonPages: ComparisonPage[] = [
  {
    slug: "best-app-to-stop-doomscrolling",
    title: "Best App to Stop Doomscrolling: Intentionality vs Alternatives",
    description:
      "Compare top anti-doomscrolling approaches and see why Intentionality works as a privacy-first, prompt-based app to stop doomscrolling.",
    competitor: "Generic Hard Blockers",
    idealForIntentionality:
      "People who want to stop doomscrolling with small mindful prompts and sustainable behavior change.",
    idealForCompetitor:
      "People who need immediate strict lockouts for short windows of deep work.",
    featureRows: [
      {
        feature: "Intervention style",
        intentionality: "Prompt-based pause before distracting sites",
        competitor: "Hard block or timer-only restrictions",
      },
      {
        feature: "Long-term habit support",
        intentionality: "Builds awareness and intentional choices",
        competitor: "Can work short-term, less reflective",
      },
      {
        feature: "Friction quality",
        intentionality: "Asks purpose before entry",
        competitor: "Mostly deny-or-allow logic",
      },
      {
        feature: "Best outcome",
        intentionality: "Reduced mindless scrolling over time",
        competitor: "Immediate but rigid control",
      },
    ],
    faqs: [
      {
        question: "What is the best app to stop doomscrolling?",
        answer:
          "The best app is one you can sustain. Intentionality works well for many users because it adds mindful friction without fully blocking useful browsing.",
      },
      {
        question: "Is Intentionality an anti doomscrolling app?",
        answer:
          "Yes. It is built to interrupt scrolling impulses before distracting websites load.",
      },
    ],
  },
  {
    slug: "intentionality-vs-stayfocusd",
    title: "Intentionality vs StayFocusd: Which Website Blocker Fits Better?",
    description:
      "A practical comparison of Intentionality and StayFocusd for mindful browsing, friction-based prompts, and long-term focus habits.",
    competitor: "StayFocusd",
    idealForIntentionality:
      "People who want a quick pause prompt before distracting sites, reflection on intent, and privacy-first habit change.",
    idealForCompetitor:
      "People who prefer strict time limits and hard blocking for short-term discipline.",
    featureRows: [
      {
        feature: "Primary behavior model",
        intentionality: "Prompt + reflection before visit",
        competitor: "Time quotas and hard blocking",
      },
      {
        feature: "Habit-awareness feedback",
        intentionality: "Built-in reason/rating loop",
        competitor: "Limited contextual reflection",
      },
      {
        feature: "Privacy approach",
        intentionality: "Local-first and minimal sync",
        competitor: "Depends on extension setup",
      },
      {
        feature: "Setup complexity",
        intentionality: "Fast default with guided flow",
        competitor: "Rules-heavy for advanced control",
      },
    ],
    faqs: [
      {
        question: "Is Intentionality a hard blocker?",
        answer:
          "Intentionality is primarily a soft-friction tool. It prompts you to clarify intent before entering distracting sites.",
      },
      {
        question: "Can I still use strict blocking?",
        answer:
          "Yes. Many users pair Intentionality with stricter blockers when they need deep-work sessions.",
      },
    ],
  },
  {
    slug: "intentionality-vs-freedom",
    title: "Intentionality vs Freedom: Mindful Prompting vs Device-Wide Blocking",
    description:
      "Compare Intentionality and Freedom across behavior change, setup, and best-fit use cases for reducing doomscrolling.",
    competitor: "Freedom",
    idealForIntentionality:
      "Users who want lightweight, browser-native friction that builds awareness and intentional browsing behavior.",
    idealForCompetitor:
      "Users needing strict multi-device block sessions with scheduled lockouts.",
    featureRows: [
      {
        feature: "Core strategy",
        intentionality: "Reflection prompt before site access",
        competitor: "Session-based global blocks",
      },
      {
        feature: "Device scope",
        intentionality: "Browser-first",
        competitor: "Cross-device app coverage",
      },
      {
        feature: "Behavior training",
        intentionality: "Frequent micro-interruptions",
        competitor: "Macro-level enforced downtime",
      },
      {
        feature: "Best for",
        intentionality: "Changing scrolling impulses",
        competitor: "Hard focus windows",
      },
    ],
    faqs: [
      {
        question: "Can I use Intentionality and Freedom together?",
        answer:
          "Yes. A common stack is Freedom for strict focus blocks and Intentionality for day-to-day mindful browsing.",
      },
      {
        question: "Which is better for procrastination?",
        answer:
          "If you want long-term behavior change, Intentionality's prompt loop is often better. If you need immediate lockouts, Freedom can help faster.",
      },
    ],
  },
];

export const alternativePages: AlternativePage[] = [
  {
    slug: "one-sec-alternative",
    title: "Best One Sec Alternative for Intentional Browsing",
    description:
      "Looking for a One Sec alternative? See how Intentionality compares for browser-first mindful prompts and distraction control.",
    tool: "One Sec",
    reasonsToSwitch: [
      "You want a browser-native flow for desktop browsing habits.",
      "You want a lightweight prompt-first system instead of app friction only.",
      "You want a privacy-first approach with simple setup.",
    ],
    whatYouGain: [
      "Purpose prompt before distracting sites",
      "Habit insight through reason/rating capture",
      "Clean install flow from the Chrome Web Store",
    ],
    faqs: [
      {
        question: "Is Intentionality only for Chrome?",
        answer:
          "Chrome is available now, with Android available and more platforms on the roadmap.",
      },
      {
        question: "Does Intentionality replace One Sec exactly?",
        answer:
          "Not exactly. Intentionality focuses on browser behavior loops and mindful prompts before site entry.",
      },
    ],
  },
  {
    slug: "opal-alternative",
    title: "Opal Alternative: A Simpler Way to Break Scrolling Loops",
    description:
      "Evaluate Intentionality as an Opal alternative if you want friction prompts and intentional browsing habits with less overhead.",
    tool: "Opal",
    reasonsToSwitch: [
      "You prefer simple in-browser interventions instead of heavy rule setup.",
      "You want explicit intent prompts before site visits.",
      "You want to reduce doomscrolling while keeping flexibility.",
    ],
    whatYouGain: [
      "Fast prompt loop without complex schedules",
      "Friction that nudges choice, not just lockout",
      "Clear path from awareness to behavior change",
    ],
    faqs: [
      {
        question: "Is Intentionality free?",
        answer:
          "Core features are free, with premium capabilities available for advanced controls.",
      },
      {
        question: "Can this help with social media overuse?",
        answer:
          "Yes. Prompt friction is designed specifically to interrupt impulsive social checks.",
      },
    ],
  },
];

export const personaPages: PersonaPage[] = [
  {
    slug: "students",
    title: "Intentionality for Students: Study Without Scroll Detours",
    description:
      "See how students use Intentionality to reduce distraction, stay focused during study blocks, and build healthier browsing habits.",
    persona: "Students",
    painPoints: [
      "Opening social apps in the middle of assignments",
      "Losing 30-60 minutes to short scroll sessions",
      "Struggling to return to deep study after distractions",
    ],
    workflow: [
      "Set a study objective before opening tabs",
      "Use Intentionality prompts on known distraction sites",
      "Review patterns and adjust your environment weekly",
    ],
    faqs: [
      {
        question: "Does this block educational resources?",
        answer:
          "No. Prompts target your selected distracting sites, so coursework resources remain accessible.",
      },
      {
        question: "Can I use this during exam prep?",
        answer:
          "Yes. Many students use it during revision periods to reduce context switching.",
      },
    ],
  },
  {
    slug: "remote-workers",
    title: "Intentionality for Remote Workers: Protect Deep Work Time",
    description:
      "A practical setup for remote professionals who want fewer impulsive checks and more consistent focus throughout the workday.",
    persona: "Remote Workers",
    painPoints: [
      "Frequent context switching between tasks and social feeds",
      "Afternoon productivity drops from distraction loops",
      "Difficulty maintaining focus without office structure",
    ],
    workflow: [
      "Define top 1-2 work outcomes for the day",
      "Route distracting sites through Intentionality prompts",
      "Use short reflection loops to reinforce focus habits",
    ],
    faqs: [
      {
        question: "Will this interrupt client work?",
        answer:
          "Only the sites you configure as distracting are prompted, so essential work tools stay smooth.",
      },
      {
        question: "Is it useful for async teams?",
        answer:
          "Yes. It helps protect focus windows between meetings and async updates.",
      },
    ],
  },
];
