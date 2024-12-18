import Image from "next/image";
import Link from "@/components/ui/Link";
import { allPosts } from ".contentlayer/generated";

import PostList from "./blog/components/ui/PostList";
import Stats from "@/components/Stats";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Avatar from "@/public/avatar.jpg";
import Coderenderer from "@/components/Code";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import IframeEmbed from "@/components/IframeEmbed";

export default async function Home() {
  const posts = allPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    // 3 most recent
    .filter((_, i) => i < 3);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex animate-in flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl text-primary">
            riki<span className="font-bold">phukon</span>
          </h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            IPA /phuːkɔːn/ • फूकौन
          </p>
        </div>
        <div
          className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Link href="/about">
            <Image
              src={Avatar}
              width={85}
              height={85}
              alt="avatar"
              className="rounded-full bg-secondary"
            />
          </Link>
          <Stats />
        </div>
        <p
          className="max-w-lg animate-in text-primary"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          Love ham radios, and computers. My works span web, CLI apps, blogs, and tools aimed at aiding fellow engineers.
        </p>
        <ul
          className="animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <li className="transition-opacity">
            <Link
              href="/links"
              className="flex items-center gap-2 no-underline"
            >
              <ArrowUpRightIcon className="h-5 w-5" />
              <span>More ways to connect</span>
            </Link>
          </li>
        </ul>
        {/* <IframeEmbed src="https://open.spotify.com/embed/track/3wtV2ifnHzirkAElgTGh63?utm_source=generator" /> */}
      </div>

      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <h2 className="text-secondary">Latest Posts</h2>
        <PostList posts={posts} />
        <Link
          href="/blog"
          className="text-secondary underline underline-offset-4 hover:text-primary"
        >
          See All
        </Link>
      </div>
      <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Coderenderer />
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to download PGP public key.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
    </div>
  );
}
