export type StudioApp = {
  slug: "taproutine" | "math-alarm" | "hide-and-seek";
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  href: string;
  playUrl: string;
  theme: "lime" | "coral" | "aqua";
  features: string[];
};

export const studioApps: StudioApp[] = [
  {
    slug: "taproutine",
    name: "TapRoutine",
    eyebrow: "Automation",
    tagline: "Automation made simple.",
    description:
      "Create tap and swipe routines, automate repetitive actions, and build useful workflows directly on your Android device.",
    href: "/apps/taproutine",
    playUrl:
      "https://play.google.com/store/search?q=TapRoutine%20Traum%20Studio&c=apps",
    theme: "lime",
    features: ["Tap automation", "Gesture recording", "Custom routines"],
  },
  {
    slug: "math-alarm",
    name: "Math Alarm",
    eyebrow: "Productivity",
    tagline: "An alarm your brain can’t ignore.",
    description:
      "Stop oversleeping by solving a math challenge before dismissing your alarm. Choose the difficulty and make sure you’re awake.",
    href: "/apps/math-alarm",
    playUrl:
      "https://play.google.com/store/search?q=Math%20Alarm%20Traum%20Studio&c=apps",
    theme: "coral",
    features: ["Easy to extreme", "Math challenges", "Custom alarms"],
  },
  {
    slug: "hide-and-seek",
    name: "Hide & Seek",
    eyebrow: "Game",
    tagline: "Find them before time runs out.",
    description:
      "A quick, colorful mobile game about sharp eyes, hidden characters, and the thrill of finding one last target before the clock hits zero.",
    href: "/apps/hide-and-seek",
    playUrl:
      "https://play.google.com/store/search?q=Hide%20and%20Seek%20Traum%20Studio&c=apps",
    theme: "aqua",
    features: ["Quick rounds", "Hidden surprises", "Playful worlds"],
  },
];

export const developerPlayUrl =
  "https://play.google.com/store/search?q=Traum%20Studio&c=apps";

export const studioUrl = "https://traumstudio.github.io";

export const launchEmailPlaceholder = "hello@traumstudio.example";
