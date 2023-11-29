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
      link: "https://github.com/phukon/citysort",
      description:
        " A live index of the best cities to live and work in India.",
    },
    {
      repo: "Xongroh",
      link: "https://github.com/phukon/xongroh",
      description: "The social media designed exclusively for Creators.",
    },
    {
      repo: "Project Athena (ReactJS)",
      link: "https://github.com/phukon/project-athena-react",
      description: "Academic resource aggregator",
    },

    {
      repo: "Outnumbered(GDScript)     ",
      link: "https://github.com/phukon/Outnumbered",
      description: "2D Top-down shooter game.",
    },
    {
      repo: "Bob the Blobs(GDScript)",
      link: "https://github.com/phukon/Bob_the_Blobs",
      description: "A 2D platformer game with a parallax background.",
    },
    {
      repo: "Project Athena (vanilla)",
      link: "Github: https://github.com/phukon/project-athena",
      description: "Academic resource aggregator.",
    }
  ];
}
