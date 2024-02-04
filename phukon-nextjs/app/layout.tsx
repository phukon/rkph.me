import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { PHProvider, PostHogPageview } from "@/providers/PostHog";
import { Suspense } from "react";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Riki Phukon",
  description: "very gpu-poor optimist, loves cs, electronics, retro and bikes",
  openGraph: {
    images: [
      {
        url: `https://rkph.me/api/og?title=I%20design%20and%20build%20apps,%20and%20everything%20that%20comes%20with%20it.&image=/gallery/lirmen-nagaland.jpg`,
        alt: "rkph.me",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body
          className={clsx(
            inter.className,
            "width-full bg-primary text-primary antialiased",
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navigation />
            <div
              className={
                "mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20"
              }
            >
              {children}
            </div>
          </ThemeProvider>
          <Analytics />
        </body>
      </PHProvider>
    </html>
  );
}
