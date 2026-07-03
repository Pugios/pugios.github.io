import { ReactNode } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────
export interface Tag {
  label: string;
  color: string;
}
export type BtnType = "github" | "download" | "link";
export interface Btn {
  type: BtnType;
  label: string;
  href: string;
}
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
    shortDesc:
      "A fast, native Windows photo browser with AI-powered face clustering.",
    description: (
      <>
        <p>
          Viewing large amounts of photos on a PC can be hard — personal
          galleries often contain thousands of pictures. Most people use
          Microsoft Photos, but it lacks the search-by-person feature we've all
          gotten used to on our phones. Cloud services like Google Photos fill
          that gap, but they require uploading everything, and the free 15 GB
          tier covers only a fraction of a lifetime of pictures.
        </p>
        <p className="mt-3">
          Gallery is the local alternative. It's a fast, native Windows photo
          browser built with .NET, WPF, and Mica Fluent Design. Import your
          folders and browse photos and videos in a clean grid layout — no cloud
          account, no uploads, no storage limits.
        </p>
        <p className="mt-3">
          Under the hood, Gallery uses a YuNet + InsightFace pipeline to detect,
          embed, and cluster faces across your entire library. You get an
          overview of every detected person, sorted by the number of photos they
          appear in. Click on a face and you see every picture of that person —
          exactly like you'd expect on your phone, but running entirely on your
          own machine.
        </p>
      </>
    ),
    images: [
      "/screenshots/Gallery1.png",
      "/screenshots/Gallery2.png",
      "/screenshots/Gallery3.jpg",
    ],
    thumbnailPosition: "50% 10%",
    thumbnailZoom: 1,
    tags: [
      { label: "AI", color: "#6366f1" },
      { label: "Computer Vision", color: "#8b5cf6" },
      { label: ".NET", color: "#3b82f6" },
      { label: "WinUI3", color: "#0891b2" },
    ],
    buttons: [
      {
        type: "github",
        label: "GitHub",
        href: "https://github.com/Pugios/Gallery",
      },
      {
        type: "download",
        label: "Releases",
        href: "https://github.com/Pugios/Gallery/releases",
      },
    ],
  },
  {
    id: "time-management",
    title: "Time Management",
    shortDesc:
      "A Windows desktop app that visualises how you spend your time each day.",
    description: (
      <>
        <p>
          TimeViewer is a Windows desktop app built with .NET MAUI that
          visualizes how you spend your time on your PC each day.
        </p>
        <p className="mt-3">
          It integrates with{" "}
          <a
            href="https://www.manictime.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            ManicTime
          </a>{" "}
          (a time-tracking tool) to pull raw app-usage data, then lets you
          organise and categorise that data through two layers of customisation:
        </p>
        <ol className="mt-2 ml-4 list-decimal space-y-1">
          <li>
            <strong>Tag rules:</strong> map each process (e.g. chrome.exe) to a
            category like "Work" or "Gaming".
          </li>
          <li>
            <strong>Explorer rules:</strong> for multi-purpose apps like
            browsers, apply pattern-matching rules on the open document/URL to
            assign more specific sub-tags (e.g. a browser tab titled "GitHub" →
            "Work").
          </li>
        </ol>
        <p className="mt-3">
          The result is displayed as an interactive nested pie chart you can
          navigate through your history to analyse your own behaviour.
        </p>
      </>
    ),
    images: [
      "/screenshots/TM1.png",
      "/screenshots/TM2.png",
      "/screenshots/TM3.png",
      "/screenshots/TM4.png",
    ],
    thumbnailPosition: "100% 10%",
    thumbnailZoom: 1.25,
    tags: [
      { label: "Data Aggregation", color: "#ec4899" },
      { label: ".NET MAUI", color: "#3b82f6" },
      { label: "ManicTime", color: "#f59e0b" },
    ],
    buttons: [
      {
        type: "github",
        label: "GitHub",
        href: "https://github.com/Pugios/TimeManagement",
      },
      {
        type: "download",
        label: "Releases",
        href: "https://github.com/Pugios/TimeManagement/releases",
      },
    ],
  },
  {
    id: "nathmi",
    title: "Nathmi Abushedeq",
    shortDesc:
      "Online portfolio and Palast Karte PWA for a Berlin-based entrepreneur.",
    description: (
      <>
        <p>
          Nathmi Abushedeq is a Berlin based Entrepreneur. In my work for him I
          designed and implemented an <strong>Online Portfolio</strong>{" "}
          summarising his business ventures using React and Vercel.
        </p>
        <p className="mt-3">
          I also prototyped <strong>Palast Karte</strong> — a full-stack{" "}
          <strong>Progressive Web App</strong> using Next.js and SQLite. I
          designed and implemented physical Membership Cards for both Employees
          and Clients across his businesses. Members can create a personalised
          page. Admins are able to manage accounts, admit discounts, and analyse
          behaviour.
        </p>
      </>
    ),
    images: [
      "/screenshots/nathmi1.png",
      "/screenshots/nathmi2.png",
      "/screenshots/nathmi3.png",
    ],
    thumbnailPosition: "50% 0%",
    thumbnailZoom: 2,
    tags: [
      { label: "Freelance", color: "#f97316" },
      { label: "Full Stack Web Dev", color: "#3b82f6" },
      { label: "React", color: "#06b6d4" },
      { label: "Next.js", color: "#6366f1" },
    ],
    buttons: [
      { type: "link", label: "Portfolio", href: "https://www.abushedeq.de/" },
      {
        type: "github",
        label: "GitHub",
        href: "https://github.com/Pugios/abushedeq",
      },
      {
        type: "link",
        label: "Palast Karte",
        href: "https://www.palast-karte.de/",
      },
    ],
  },
  {
    id: "master",
    title: "AI Model Architecture Research",
    shortDesc:
      "A Neural Algorithm for Automated Passenger Counting in Public Transport on a Privacy-Friendly Dataset — TU Berlin.",
    description: (
      <>
        <p>
          For my Masters in Computer Science at the Technical University of
          Berlin I developed a hybrid CNN-LSTM architecture for passenger counting through surveillance footage. 
          After graduating I was granted a scholarship to continue my research.
        </p>
        <p className="mt-3">
          Within my research I developed several different model architecture to explore the impact of different CNN Models.
          A large component was the U-Net Architecture, originally developed for image processing it works by first compressing image space and increasing feature space,
          before then compressing feature space and localizing each feature back to the original image space using skip connections between encoding and decoding layers.
          The CNN models were connected through a Dense layer to a LSTM. LSTM is a well known system for extracting information out of sequential data.
        </p>
        <p className="mt-3">
          Combining both into a unified model I was able to determine the number of passengers entering and exiting a train in brandenburg with up to 95% accuracy.
        </p>
        <p className="mt-3">A copy of the thesis is available for download.</p>
      </>
    ),
    images: ["/screenshots/master1.png", "/screenshots/master2.png"],
    thumbnailPosition: "50% 25%",
    thumbnailZoom: 1,
    tags: [
      { label: "Deep Learning", color: "#6366f1" },
      { label: "Computer Vision", color: "#8b5cf6" },
      { label: "CNN-LSTM", color: "#0891b2" },
      { label: "TU Berlin", color: "#dc2626" },
    ],
    buttons: [
      {
        type: "download",
        label: "Download Thesis",
        href: "/docs/Mohamed_Matar_Masterarbeit.pdf",
      },
    ],
  },
];
