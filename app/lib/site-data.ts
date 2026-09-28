export type StudioApp = {
  slug: "taproutine" | "solvewake" | "hide-and-seek" | "luma" | "aeri";
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  href: string;
  playUrl?: string;
  platform?: string;
  preview?: boolean;
  theme: "lime" | "coral" | "aqua" | "mint" | "violet";
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
    slug: "solvewake",
    name: "Solvewake",
    eyebrow: "Productivity",
    tagline: "An alarm your brain can’t ignore.",
    description:
      "Read the time as equations and solve math challenges to dismiss your alarm. Choose your difficulty, customize snooze, and wake up your way.",
    href: "/apps/solvewake",
    playUrl:
      "https://play.google.com/store/search?q=Solvewake%20Traum%20Studio&c=apps",
    theme: "coral",
    features: ["Equation clock", "Math challenges", "Custom alarms"],
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
  {
    slug: "luma",
    name: "Luma",
    eyebrow: "Password manager",
    tagline: "A calmer home for your passwords.",
    description: "Keep passwords, notes, and authenticator codes together in an encrypted vault. Organize on Android and Windows, with optional encrypted sync between devices.",
    href: "/apps/luma",
    platform: "Android & Windows",
    preview: true,
    theme: "mint",
    features: ["Encrypted vault", "Authenticator codes", "Verified backups"],
  },
  {
    slug: "aeri",
    name: "Aeri",
    eyebrow: "Touchless control",
    tagline: "Your gestures. Your shortcuts.",
    description: "Control Android with face gestures, hand gestures, and voice commands. Choose a trigger, assign an action, and build shortcuts that work your way.",
    href: "/apps/aeri",
    preview: true,
    theme: "violet",
    features: ["Face & hand gestures", "Offline voice", "Custom shortcuts"],
  },
];

export const developerPlayUrl =
  "https://play.google.com/store/search?q=Traum%20Studio&c=apps";

export const studioUrl = "https://traumstudio.github.io";

export const supportEmail = "traumclatix@gmail.com";
