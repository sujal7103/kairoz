import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Titlebar } from "@/components/shell/titlebar";
import { Sidebar } from "@/components/shell/sidebar";
import { SidebarBackdrop } from "@/components/shell/sidebar-backdrop";
import { CommandPalette } from "@/components/command-palette";

const SITE_URL = "https://kairoz-live.vercel.app";
const SITE_NAME = "Kairoz";
const SITE_TITLE = "Kairoz — The shadcn for AI tooling";
const SITE_DESCRIPTION =
  "A design system for AI and agent interfaces. 180+ tokens, 50+ component classes, framework-agnostic. Works with shadcn, Tailwind, React, Vue, Svelte, or plain HTML. AMOLED-black and light themes included.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Kairoz",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "sujal7103", url: "https://github.com/sujal7103" }],
  creator: "sujal7103",
  publisher: "sujal7103",
  generator: "Next.js",
  keywords: [
    "design system",
    "agent ui",
    "ai ui",
    "shadcn alternative",
    "component library",
    "css framework",
    "tailwind",
    "react",
    "vue",
    "amoled",
    "dark theme",
    "developer tools",
    "admin ui",
    "dashboard",
    "claude code skill",
    "coding agent",
  ],
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kairoz — The shadcn for AI tooling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
    creator: "@sujal7103",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href={`/kairoz.css?v=${Date.now()}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `try {
  var t = localStorage.getItem('kairoz-theme') || 'system';
  var eff = t === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : t;
  document.documentElement.setAttribute('data-theme', eff);
  var s = localStorage.getItem('kairoz-sidebar');
  var mobile = window.matchMedia('(max-width: 768px)').matches;
  var sidebar = s || (mobile ? 'collapsed' : 'expanded');
  document.documentElement.setAttribute('data-sidebar', sidebar);
} catch (e) {}`,
          }}
        />
      </head>
      <body>
        <div className="ks-shell">
          <div className="ks-shell-titlebar">
            <Titlebar />
          </div>
          <aside className="ks-shell-sidebar">
            <Sidebar />
          </aside>
          <main className="ks-shell-main">{children}</main>
        </div>
        <SidebarBackdrop />
        <CommandPalette />
      </body>
    </html>
  );
}
