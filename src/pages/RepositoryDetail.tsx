import {
  ArrowLeft,
  Star,
  GitFork,
  Code2,
  GitCommit,
  GitPullRequest,
  Circle,
  Clock,
  FolderGit2,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";
import { repositories } from "../data/mockRepositories";

const recentCommits = [
  {
    message: "Updated authentication flow",
    branch: "main",
    time: "12 minutes ago",
  },
  {
    message: "Improved responsive dashboard layout",
    branch: "main",
    time: "2 hours ago",
  },
  {
    message: "Added repository filtering",
    branch: "feature/search",
    time: "Yesterday",
  },
  {
    message: "Refactored dashboard components",
    branch: "main",
    time: "2 days ago",
  },
  {
    message: "Updated project documentation",
    branch: "main",
    time: "4 days ago",
  },
];

function RepositoryDetail() {
  const { id } = useParams();

  const repository = repositories.find(
    (item) => item.id.toString() === id
  );

  if (!repository) {
    return (
      <DashboardLayout>
        <div className="mx-auto max-w-5xl p-6 lg:p-8">
          <Link
            to="/repositories"
            className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to repositories
          </Link>

          <div className="rounded-2xl border border-dashed border-zinc-800 py-20 text-center">
            <FolderGit2
              size={32}
              className="mx-auto text-zinc-600"
            />

            <h2 className="mt-4 font-semibold text-zinc-300">
              Repository not found
            </h2>

            <p className="mt-2 text-sm text-zinc-600">
              The repository you are looking for does not exist.
            </p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-6xl p-6 lg:p-8">

        {/* Back */}
        <Link
          to="/repositories"
          className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to repositories
        </Link>

        {/* Repository Header */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 lg:p-8">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

            <div>
              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-800">
                  <FolderGit2 size={21} />
                </div>

                <div>
                  <h1 className="text-2xl font-bold tracking-tight">
                    {repository.name}
                  </h1>

                  <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
                    <Circle size={8} fill="currentColor" />
                    {repository.status}
                  </div>
                </div>

              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
                {repository.description}
              </p>
            </div>

            <span className="w-fit rounded-lg bg-zinc-800 px-3 py-2 text-xs text-zinc-300">
              {repository.language}
            </span>

          </div>

          {/* Repository Stats */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <Star size={16} />
                Stars
              </div>

              <p className="mt-2 text-xl font-semibold">
                {repository.stars}
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <GitFork size={16} />
                Forks
              </div>

              <p className="mt-2 text-xl font-semibold">
                {repository.forks}
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <Clock size={16} />
                Last Updated
              </div>

              <p className="mt-2 text-xl font-semibold">
                {repository.updated}
              </p>
            </div>

          </div>
        </section>

        {/* Main Grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">

          {/* Recent Commits */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="font-semibold">
                  Recent Commits
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Latest changes in this repository.
                </p>
              </div>

              <GitCommit
                size={20}
                className="text-zinc-600"
              />

            </div>

            <div className="mt-6 space-y-3">

              {recentCommits.map((commit, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-700"
                >

                  <div className="flex items-start gap-3">

                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                      <GitCommit size={15} />
                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="text-sm font-medium text-zinc-200">
                        {commit.message}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-zinc-600">

                        <span>
                          {commit.time}
                        </span>

                        <span className="rounded-md bg-zinc-900 px-2 py-1">
                          {commit.branch}
                        </span>

                      </div>

                    </div>

                  </div>
                </div>
              ))}

            </div>
          </section>

          {/* Repository Information */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">

            <h2 className="font-semibold">
              Repository Information
            </h2>

            <div className="mt-6 space-y-5">

              <div>
                <p className="text-xs text-zinc-600">
                  Repository
                </p>

                <p className="mt-1 text-sm text-zinc-300">
                  {repository.name}
                </p>
              </div>

              <div>
                <p className="text-xs text-zinc-600">
                  Primary Language
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <Code2 size={16} className="text-zinc-500" />

                  <span className="text-sm text-zinc-300">
                    {repository.language}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs text-zinc-600">
                  Status
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <Circle
                    size={9}
                    fill="currentColor"
                    className="text-zinc-400"
                  />

                  <span className="text-sm text-zinc-300">
                    {repository.status}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs text-zinc-600">
                  Pull Requests
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <GitPullRequest
                    size={16}
                    className="text-zinc-500"
                  />

                  <span className="text-sm text-zinc-300">
                    12
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs text-zinc-600">
                  Visibility
                </p>

                <p className="mt-1 text-sm text-zinc-300">
                  Public
                </p>
              </div>

            </div>
          </section>

        </div>
      </div>
    </DashboardLayout>
  );
}

export default RepositoryDetail;