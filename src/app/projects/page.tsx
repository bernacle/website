import Tabs from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

interface ProjectData {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  liveUrl?: string;
}

const projects: ProjectData[] = [
  {
    title: "Logfolio",
    description:
      "Logfolio is a productivity tool designed to help professionals keep a comprehensive record of their daily work achievements. By logging work entries via web or CLI, users can generate AI-driven summaries tailored for performance reviews, job applications, and interview preparation.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Firebase", "Groq"],
    liveUrl: "https://logfolio.com",
  },
  {
    title: "Voice App",
    description:
      "A voice-powered app that captures user input, transcribes it, understands requests, and streams responses back as natural audio. It offers seamless, hands-free AI interactions.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Deepgram", "Groq"],
    github: "https://voice-app.brunosimplicio.com",
  },
  {
    title: "Storytelling API",
    description:
      "The Storytelling API allows users to submit scripts and analyze their content to extract moods, themes, emotions, and more. It also provides the capability to generate media such as images, voices, and videos based on the analyzed script",
    techStack: ["Nodejs", "TypeScript", "Fastify", "Prisma", "BullMQ", "Groq"],
    github: "https://github.com/bernacle/storytelling",
  },
];

export default function Projects() {
  return (
    <>
      <Tabs />
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12">
        <section className="mx-auto w-full max-w-2xl space-y-8 bg-black print:space-y-6">
          <h1 className="text-4xl font-bold text-white mb-12">
            Cool <span className="text-green-400">Projects</span>
          </h1>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-green-400/20 hover:border-green-400/40 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-green-400 transition-colors"
                      >
                        <ExternalLink className="size-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-green-400 transition-colors"
                      >
                        <ExternalLink className="size-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-green-400/10 text-green-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
