import {
  User,
  MapPin,
  Mail,
  Globe,
  Code2,
  GitCommit,
  GitPullRequest,
  Star,
  Trophy,
  ExternalLink,
} from "lucide-react";

import DashboardLayout from "../components/layout/DashboardLayout";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Java",
  "Spring Boot",
  "MongoDB",
  "Git",
  "REST APIs",
  "DSA",
];

const projects = [
  {
    name: "vanta-dashboard",
    description:
      "AI-powered developer command center built with React and TypeScript.",
    tech: "React • TypeScript • Tailwind",
    stars: 128,
  },
  {
    name: "spring-journal",
    description:
      "Journal application built with Spring Boot and MongoDB.",
    tech: "Java • Spring Boot • MongoDB",
    stars: 42,
  },
  {
    name: "leetcode-solutions",
    description:
      "Collection of Java solutions for data structures and algorithms.",
    tech: "Java • DSA",
    stars: 31,
  },
];

function Profile() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-6xl p-6 lg:p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">
            Profile
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            Your developer identity and technical profile.
          </p>
        </div>

        {/* Profile Hero */}
        <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 lg:p-8">

          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-start">

            {/* Avatar */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl font-bold text-black">
              AG
            </div>

            {/* Information */}
            <div className="flex-1">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h2 className="text-2xl font-bold">
                    Ashish Gupta
                  </h2>

                  <p className="mt-1 text-zinc-400">
                    Frontend Developer
                  </p>
                </div>

                <button className="flex w-fit items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm text-zinc-200 transition hover:bg-zinc-700">
                  <User size={16} />
                  Edit Profile
                </button>

              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
                Developer focused on building modern web applications,
                learning backend development, and solving data structure
                and algorithm problems with Java.
              </p>

              {/* Contact Information */}
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-zinc-500">

                <span className="flex items-center gap-2">
                  <MapPin size={15} />
                  India
                </span>

                <span className="flex items-center gap-2">
                  <Mail size={15} />
                  ashish@example.com
                </span>

              </div>

              {/* Social Links */}
              <div className="mt-5 flex flex-wrap gap-2">

                <a
                  href="#"
                  className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                >
                  <ExternalLink size={15} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/ashish-gupta-53a662353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                >
                  <ExternalLink size={15} />
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                >
                  <Globe size={15} />
                  Portfolio
                </a>

              </div>

            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Commits */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <GitCommit size={16} />
              Commits
            </div>

            <p className="mt-3 text-2xl font-semibold">
              842
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Last 12 months
            </p>

          </div>

          {/* Pull Requests */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <GitPullRequest size={16} />
              Pull Requests
            </div>

            <p className="mt-3 text-2xl font-semibold">
              61
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Contributions
            </p>

          </div>

          {/* Stars */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Star size={16} />
              Stars
            </div>

            <p className="mt-3 text-2xl font-semibold">
              287
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Across repositories
            </p>

          </div>

          {/* Profile Score */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Trophy size={16} />
              Profile Score
            </div>

            <p className="mt-3 text-2xl font-semibold">
              87%
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Developer profile
            </p>

          </div>

        </section>

        {/* Main Content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">

          {/* Featured Projects */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">

            <div className="mb-5">
              <h2 className="font-semibold">
                Featured Projects
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Selected projects from your development activity.
              </p>
            </div>

            <div className="space-y-3">

              {projects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-700"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h3 className="font-medium text-zinc-200">
                        {project.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-1.5 text-xs text-zinc-500">
                      <Star size={14} />
                      {project.stars}
                    </div>

                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-zinc-600">
                    <Code2 size={14} />
                    {project.tech}
                  </div>

                </div>
              ))}

            </div>
          </section>

          {/* Skills */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">

            <div className="mb-5">
              <h2 className="font-semibold">
                Technical Skills
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Technologies currently used and explored.
              </p>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">

              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                >
                  {skill}
                </span>
              ))}

            </div>

            {/* Skill Progress */}
            <div className="mt-8">

              <h3 className="text-sm font-medium text-zinc-300">
                Primary Focus
              </h3>

              <div className="mt-5 space-y-5">

                {/* Frontend */}
                <div>

                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-zinc-400">
                      Frontend Development
                    </span>

                    <span className="text-zinc-600">
                      85%
                    </span>
                  </div>

                  <div className="h-1.5 rounded-full bg-zinc-800">
                    <div className="h-1.5 w-[85%] rounded-full bg-white" />
                  </div>

                </div>

                {/* Java Backend */}
                <div>

                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-zinc-400">
                      Java / Backend
                    </span>

                    <span className="text-zinc-600">
                      65%
                    </span>
                  </div>

                  <div className="h-1.5 rounded-full bg-zinc-800">
                    <div className="h-1.5 w-[65%] rounded-full bg-white" />
                  </div>

                </div>

                {/* DSA */}
                <div>

                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-zinc-400">
                      Data Structures
                    </span>

                    <span className="text-zinc-600">
                      60%
                    </span>
                  </div>

                  <div className="h-1.5 rounded-full bg-zinc-800">
                    <div className="h-1.5 w-[60%] rounded-full bg-white" />
                  </div>

                </div>

              </div>
            </div>

          </section>

        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;