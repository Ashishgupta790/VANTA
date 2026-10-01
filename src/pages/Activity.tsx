import { useMemo, useState } from "react";
import {
  GitCommit,
  GitPullRequest,
  GitMerge,
  Star,
  GitBranch,
  Search,
  Activity as ActivityIcon,
} from "lucide-react";

import DashboardLayout from "../components/layout/DashboardLayout";

const activities = [
  {
    id: 1,
    type: "commit",
    title: "Updated authentication flow",
    repository: "vanta-dashboard",
    description:
      "Improved authentication handling and refined the login experience.",
    time: "12 minutes ago",
    branch: "main",
  },
  {
    id: 2,
    type: "pull",
    title: "Opened pull request #42",
    repository: "portfolio-v2",
    description:
      "Added interactive project sections and improved portfolio navigation.",
    time: "2 hours ago",
    branch: "feature/portfolio",
  },
  {
    id: 3,
    type: "merge",
    title: "Merged performance improvements",
    repository: "api-service",
    description:
      "Merged optimizations that improved application response times.",
    time: "Yesterday",
    branch: "main",
  },
  {
    id: 4,
    type: "star",
    title: "Repository reached 50 stars",
    repository: "vanta-dashboard",
    description:
      "Your project received another milestone star from the community.",
    time: "2 days ago",
    branch: "main",
  },
  {
    id: 5,
    type: "commit",
    title: "Added MongoDB integration",
    repository: "spring-journal",
    description:
      "Implemented repository operations and connected the journal application to MongoDB.",
    time: "3 days ago",
    branch: "develop",
  },
  {
    id: 6,
    type: "pull",
    title: "Opened pull request #18",
    repository: "leetcode-solutions",
    description:
      "Added optimized Java solutions for array and string problems.",
    time: "5 days ago",
    branch: "feature/dsa",
  },
];

const filters = ["All", "Commits", "Pull Requests", "Merges", "Stars"];

function Activity() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      const matchesSearch =
        activity.title.toLowerCase().includes(search.toLowerCase()) ||
        activity.repository.toLowerCase().includes(search.toLowerCase()) ||
        activity.description.toLowerCase().includes(search.toLowerCase());

      let matchesFilter = true;

      if (filter === "Commits") {
        matchesFilter = activity.type === "commit";
      }

      if (filter === "Pull Requests") {
        matchesFilter = activity.type === "pull";
      }

      if (filter === "Merges") {
        matchesFilter = activity.type === "merge";
      }

      if (filter === "Stars") {
        matchesFilter = activity.type === "star";
      }

      return matchesSearch && matchesFilter;
    });
  }, [filter, search]);

  const getIcon = (type: string) => {
    if (type === "commit") {
      return <GitCommit size={18} />;
    }

    if (type === "pull") {
      return <GitPullRequest size={18} />;
    }

    if (type === "merge") {
      return <GitMerge size={18} />;
    }

    return <Star size={18} />;
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-5xl p-6 lg:p-8">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black">
              <ActivityIcon size={21} />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Activity
              </h1>

              <p className="mt-1 text-sm text-zinc-500">
                A timeline of your recent development activity.
              </p>
            </div>
          </div>
        </div>

        {/* Activity Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-sm text-zinc-500">Commits</p>
            <p className="mt-2 text-2xl font-semibold">842</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-sm text-zinc-500">Pull Requests</p>
            <p className="mt-2 text-2xl font-semibold">61</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-sm text-zinc-500">Repositories</p>
            <p className="mt-2 text-2xl font-semibold">24</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-sm text-zinc-500">Activity Streak</p>
            <p className="mt-2 text-2xl font-semibold">18 days</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search activity..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-zinc-600"
          />
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-lg px-4 py-2 text-sm transition ${
                filter === item
                  ? "bg-white text-black"
                  : "border border-zinc-800 bg-zinc-900 text-zinc-500 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-[21px] top-4 bottom-4 w-px bg-zinc-800" />

          <div className="space-y-6">
            {filteredActivities.map((activity) => (
              <div
                key={activity.id}
                className="relative flex gap-5"
              >
                {/* Icon */}
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-300">
                  {getIcon(activity.type)}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-zinc-700 hover:bg-zinc-900">

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-zinc-100">
                        {activity.title}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-500">
                        {activity.repository}
                      </p>
                    </div>

                    <span className="text-xs text-zinc-600">
                      {activity.time}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-zinc-400">
                    {activity.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-zinc-600">
                    <GitBranch size={14} />
                    {activity.branch}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredActivities.length === 0 && (
            <div className="rounded-2xl border border-dashed border-zinc-800 py-16 text-center">
              <p className="font-medium text-zinc-300">
                No activity found
              </p>

              <p className="mt-2 text-sm text-zinc-600">
                Try changing your search or filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Activity;