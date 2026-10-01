import RepositoryList from "../components/dashboard/RepositoryList";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import ContributionHeatmap from "../components/dashboard/ContributionHeatmap";
import DashboardLayout from "../components/layout/DashboardLayout";

const stats = [
  {
    label: "Repositories",
    value: "24",
    change: "+3 this month",
  },
  {
    label: "Commits",
    value: "842",
    change: "+18% this month",
  },
  {
    label: "Pull Requests",
    value: "61",
    change: "+8 this month",
  },
  {
    label: "Profile Score",
    value: "87%",
    change: "+5% this month",
  },
];

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">

        {/* Welcome */}
        <section className="mb-8">
          <p className="text-sm text-zinc-500">
            Developer Dashboard
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight">
            Good afternoon, Ashish 👋
          </h1>

          <p className="mt-2 text-zinc-400">
            Here's what's happening with your development activity.
          </p>
        </section>

        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-zinc-700"
            >
              <p className="text-sm text-zinc-500">
                {stat.label}
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {stat.value}
              </h2>

              <p className="mt-2 text-sm text-emerald-400">
                {stat.change}
              </p>
            </div>
          ))}
        </section>

        {/* Placeholder */}
        <section className="mt-6 grid gap-6 lg:grid-cols-3">

          <div className="min-h-[300px] rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 lg:col-span-2">
            <h2 className="font-semibold">
              Contribution Activity
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Your development activity over time.
            </p>

         <ContributionHeatmap />
          </div>

          <ActivityFeed />

        </section>
        <RepositoryList />

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;