import { ReactNode } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────
export interface Tag { label: string; color: string; }
export type BtnType = "github" | "download" | "link";
export interface Btn { type: BtnType; label: string; href: string; }
export interface Card {
  id: string;
  title: string;
  shortDesc: string;
  description: ReactNode;
  images: string[];
  tags: Tag[];
  buttons: Btn[];
  // thumbnail display — "X% Y%", default "50% 50%"
  thumbnailPosition?: string;
  // scale applied on top of object-contain, default 1
  thumbnailZoom?: number;
}

// ── Card data ─────────────────────────────────────────────────────────────────
export const CARDS: Card[] = [
  {
    id: "gallery",
    title: "Gallery",
    shortDesc: "A fast, native Windows photo browser with AI-powered face clustering.",
    description: (
      <>
        <p>Gallery is a fast, native Windows photo browser built with WPF and Mica Fluent Design. It lets you import local folders and browse your photos and videos in a grid-based layout.</p>
        <p className="mt-3">It uses a YuNet + InsightFace pipeline to cluster people across your library so you can search by face.</p>
        <p className="mt-3">The goal was to build something local designed around how people actually browse their own photos rather than a cloud-synced library.</p>
      </>
    ),
    images: ["/screenshots/Gallery1.png", "/screenshots/Gallery2.png", "/screenshots/Gallery3.jpg"],
    thumbnailPosition: "50% 35%",
    thumbnailZoom: 1,
    tags: [
      { label: "AI",              color: "#6366f1" },
      { label: "Computer Vision", color: "#8b5cf6" },
      { label: ".NET",            color: "#3b82f6" },
      { label: "WinUI3",          color: "#0891b2" },
    ],
    buttons: [
      { type: "github",   label: "GitHub",   href: "https://github.com/Pugios/Gallery" },
      { type: "download", label: "Releases", href: "https://github.com/Pugios/Gallery/releases" },
    ],
  },
  {
    id: "time-management",
    title: "Time Management",
    shortDesc: "A Windows desktop app that visualises how you spend your time each day.",
    description: (
      <>
        <p>TimeViewer is a Windows desktop app built with .NET MAUI that visualizes how you spend your time on your PC each day.</p>
        <p className="mt-3">
          It integrates with{" "}
          <a href="https://www.manictime.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            ManicTime
          </a>{" "}
          (a time-tracking tool) to pull raw app-usage data, then lets you organise and categorise that data through two layers of customisation:
        </p>
        <ol className="mt-2 ml-4 list-decimal space-y-1">
          <li><strong>Tag rules:</strong> map each process (e.g. chrome.exe) to a category like "Work" or "Gaming".</li>
          <li><strong>Explorer rules:</strong> for multi-purpose apps like browsers, apply pattern-matching rules on the open document/URL to assign more specific sub-tags (e.g. a browser tab titled "GitHub" → "Work").</li>
        </ol>
        <p className="mt-3">The result is displayed as an interactive nested pie chart you can navigate through your history to analyse your own behaviour.</p>
      </>
    ),
    images: ["/screenshots/TM1.png", "/screenshots/TM2.png", "/screenshots/TM3.png", "/screenshots/TM4.png"],
    thumbnailPosition: "100% 50%",
    thumbnailZoom: 1.25,
    tags: [
      { label: "Data Aggregation", color: "#ec4899" },
      { label: ".NET MAUI",        color: "#3b82f6" },
      { label: "ManicTime",        color: "#f59e0b" },
    ],
    buttons: [
      { type: "github",   label: "GitHub",   href: "https://github.com/Pugios/TimeManagement" },
      { type: "download", label: "Releases", href: "https://github.com/Pugios/TimeManagement/releases" },
    ],
  },
  {
    id: "nathmi",
    title: "Nathmi Abushedeq",
    shortDesc: "Online portfolio and Palast Karte PWA for a Berlin-based entrepreneur.",
    description: (
      <>
        <p>
          Nathmi Abushedeq is a Berlin based Entrepreneur. In my work for him I designed and implemented an{" "}
          <strong>Online Portfolio</strong> summarising his business ventures using React and Vercel.
        </p>
        <p className="mt-3">
          I also prototyped <strong>Palast Karte</strong> — a full-stack{" "}
          <strong>Progressive Web App</strong> using Next.js and SQLite. I designed and implemented physical
          Membership Cards for both Employees and Clients across his businesses. Members can create a
          personalised page. Admins are able to manage accounts, admit discounts, and analyse behaviour.
        </p>
      </>
    ),
    images: ["/screenshots/nathmi1.png", "/screenshots/nathmi2.png", "/screenshots/nathmi3.png"],
    thumbnailPosition: "50% 0%",
    thumbnailZoom: 2,
    tags: [
      { label: "Freelance",          color: "#f97316" },
      { label: "Full Stack Web Dev", color: "#3b82f6" },
      { label: "React",              color: "#06b6d4" },
      { label: "Next.js",            color: "#6366f1" },
    ],
    buttons: [
      { type: "link",   label: "Portfolio",    href: "https://www.abushedeq.de/" },
      { type: "github", label: "GitHub",       href: "https://github.com/Pugios/abushedeq" },
      { type: "link",   label: "Palast Karte", href: "https://www.palast-karte.de/" },
    ],
  },
  {
    id: "master",
    title: "Master Thesis",
    shortDesc: "CNN-LSTM model for activity recognition in fisheye surveillance footage — TU Berlin.",
    description: (
      <>
        <p>
          For my Masters in Computer Science at the Technical University of Berlin I developed a hybrid
          CNN-LSTM architecture for activity recognition in fisheye surveillance footage.
        </p>
        <p className="mt-3">
          The model uses stacked convolutional encoders with max-pooling to extract spatial features
          from wide-angle frames, then passes the resulting representations through skip-connected decoder
          blocks before feeding into an LSTM sequence (130 → 100 → 70 units) for temporal reasoning.
        </p>
        <p className="mt-3">A copy of the thesis is available for download.</p>
      </>
    ),
    images: ["/screenshots/master1.png", "/screenshots/master2.png"],
    thumbnailPosition: "50% 25%",
    thumbnailZoom: 1,
    tags: [
      { label: "Deep Learning",   color: "#6366f1" },
      { label: "Computer Vision", color: "#8b5cf6" },
      { label: "CNN-LSTM",        color: "#0891b2" },
      { label: "TU Berlin",       color: "#dc2626" },
    ],
    buttons: [
      { type: "download", label: "Download Thesis", href: "/docs/Mohamed_Matar_Masterarbeit.pdf" },
    ],
  },
];
