"use client";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "next-themes";
import clsx from "clsx";

import Link from "@/components/ui/Link";

type Workplace = {
  title: string;
  company: string;
  imageSrc: string | StaticImageData;
  time?: string;
  link?: string;
  desc?: string;
};

function Workplace({ title, company, imageSrc, time, link, desc }: Workplace) {
  const { theme } = useTheme();

  const content = (
    <div className="grid grid-cols-[48px_1fr_auto] gap-4 items-start">
      <Image
        src={imageSrc}
        alt={company}
        width={48}
        height={48}
        className={clsx(
          "rounded-full",
          company === "University of Houston" && "bg-neutral-50"
        )}
      />
      <div className="flex flex-col gap-px">
        <p className={link ? "external-arrow" : ""}>{title}</p>
        <p className="text-secondary">{company}</p>
        {desc && <p className="text-secondary text-sm mt-2">{desc}</p>}
      </div>
      {time && <time className="text-secondary text-sm whitespace-nowrap">{time}</time>}
    </div>
  );

  return (
    <li className="transition-opacity" key={company}>
      {link ? (
        <Link
          href={link}
          className="block w-full px-3 py-2 -mx-3 -my-2 no-underline"
        >
          {content}
        </Link>
      ) : (
        <div>{content}</div>
      )}
    </li>
  );
}

export default function Workplaces({ items }: { items: Workplace[] }) {
  return (
    <ul className="flex flex-col gap-8 animated-list">
      {items.map(Workplace)}
    </ul>
  );
}
