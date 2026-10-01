import {
  GitCommit,
  GitPullRequest,
  GitMerge,
  Star,
} from "lucide-react";

const activities = [
  {
    type: "commit",
    title: "Updated authentication flow",
    repo: "vanta-dashboard",
    time: "12 minutes ago",
    icon: GitCommit,
  },
  {
    type: "pull",
    title: "Opened pull request #42",
    repo: "portfolio-v2",
    time: "2 hours ago",
    icon: GitPullRequest,
  },
  {
    type: "merge",
    title: "Merged performance improvements",
    repo: "api-service",
    time: "Yesterday",
    icon: GitMerge,
  },
  {
    type: "star",
    title: "Repository reached 50 stars",
    repo: "vanta-dashboard",
    time: "2 days ago",
    icon: Star,
  },
];

function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="font-semibold">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Your latest development activity.
        </p>
      </div>

      {/* Activity List */}
      <div className="space-y-5">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="flex gap-4"
            >
              {/* Icon */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950">
                <Icon size={16} className="text-zinc-400" />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-200">
                  {activity.title}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  {activity.repo}
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All */}
      <button className="mt-6 w-full rounded-xl border border-zinc-800 py-2.5 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white">
        View all activity
      </button>
    </div>
  );
}

export default ActivityFeed;