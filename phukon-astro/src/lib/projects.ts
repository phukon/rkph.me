import { z } from "zod";

const projectSchema = z.object({
  repo: z.string(),
  link: z.string(),
  description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

export async function getProjects(): Promise<Project[]> {
  return [
    {
      repo: "CitySort",
      link: "https://citysort.vercel.app/stats/rc685fa34f1d16c",
      description:
        " A live index of the best cities to live and work in India.",
    },
    {
      repo: "Project Athena",
      link: "https://project-athena-react.vercel.app/",
      description: "Academic resource aggregator",
    },
    {
      repo: "Openlgen",
      link: "https://github.com/phukon/openlgen",
      description:
        "Blazing fast ⚡, cli license generator in Node.js. for your open source projects.",
    },
    {
      repo: "Xongroh",
      link: "https://xongroh.vercel.app/login",
      description: "The social media designed exclusively for Creators.",
    },
    {
      repo: "Outnumbered",
      link: "https://github.com/phukon/Outnumbered",
      description: "2D Top-down shooter game written in GDScript",
    },
    {
      repo: "Project Athena (vanilla)",
      link: "https://project-athena-sigma.vercel.app/index.html",
      description: "Academic resource aggregator.",
    },
  ];
}
