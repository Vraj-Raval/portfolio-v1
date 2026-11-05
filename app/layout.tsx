import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vraj Raval | Full Stack Developer",
  description: "Vraj Raval is a Full Stack Developer building Fintech, SaaS, CRM, and LMS products with Next.js, NestJS, Prisma, and MySQL.",
  openGraph: {
    title: "Vraj Raval | Full Stack Developer",
    description: "Selected product work across Fintech, SaaS, CRM, and LMS engineering.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vraj Raval | Full Stack Developer",
    description: "Selected product work across Fintech, SaaS, CRM, and LMS engineering.",
  },
  icons: {
    icon: "/images/titleProfile.png",
    shortcut: "/images/titleProfile.png",
    apple: "/images/titleProfile.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var t;try{t=localStorage.getItem('portfolio-theme')}catch(e){}var d=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light'})()",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
