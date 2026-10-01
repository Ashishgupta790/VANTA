import DashboardLayout from "../components/layout/DashboardLayout";
import CommitChart from "../components/analytics/CommitChart";
import LanguageChart from "../components/analytics/LanguageChart";

function Analytics() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-zinc-500">
            Developer Analytics
          </p>

          <h1 className="mt-1 text-3xl font-bold">
            Development Insights
          </h1>

          <p className="mt-2 text-zinc-400">
            Understand your coding activity and productivity.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-sm text-zinc-500">
              Total Commits
            </p>

            <p className="mt-2 text-3xl font-bold">
              1,204
            </p>

            <p className="mt-2 text-sm text-emerald-400">
              +18.4%
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-sm text-zinc-500">
              Coding Hours
            </p>

            <p className="mt-2 text-3xl font-bold">
              286h
            </p>

            <p className="mt-2 text-sm text-emerald-400">
              +12.7%
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-sm text-zinc-500">
              Pull Requests
            </p>

            <p className="mt-2 text-3xl font-bold">
              61
            </p>

            <p className="mt-2 text-sm text-emerald-400">
              +8 this month
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-sm text-zinc-500">
              Avg. Daily
            </p>

            <p className="mt-2 text-3xl font-bold">
              6.4h
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              Last 30 days
            </p>
          </div>

        </div>

        {/* Charts */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <CommitChart />
          </div>

          <LanguageChart />

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Analytics;