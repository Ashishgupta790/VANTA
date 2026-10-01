const contributionData = [
  0, 1, 2, 3, 1, 0, 2, 4, 3, 1, 0, 2, 3, 4,
  1, 2, 3, 4, 2, 1, 0, 3, 4, 2, 1, 3, 4, 2,
  0, 1, 3, 4, 2, 1, 3, 4, 2, 1, 0, 2, 3, 4,
  3, 2, 1, 0, 4, 3, 2, 1, 3, 4, 2, 0, 1, 3,
  4, 2, 1, 3, 4, 2, 1, 0, 3, 4, 2, 1, 3, 4,
  2, 1, 0, 2, 3, 4, 3, 1, 2, 4, 3, 2, 1, 0,
  3, 4, 2, 1, 3, 4, 2, 0, 1, 3, 4, 2, 1, 3,
  4, 2, 1, 0, 3, 4, 2, 1, 3, 4, 2, 1, 0, 3,
];

function ContributionHeatmap() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold">
            Contribution Activity
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            842 contributions in the last year
          </p>
        </div>

        <span className="text-sm text-zinc-500">
          Last 12 months
        </span>
      </div>

      {/* Heatmap */}
      <div className="mt-6 overflow-x-auto">
        <div className="grid w-max grid-flow-col grid-rows-7 gap-1">
          {contributionData.map((level, index) => (
            <div
              key={index}
              title={`${level} contributions`}
              className={`h-3 w-3 rounded-sm ${
                level === 0
                  ? "bg-zinc-800"
                  : level === 1
                    ? "bg-zinc-700"
                    : level === 2
                      ? "bg-zinc-600"
                      : level === 3
                        ? "bg-zinc-400"
                        : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between text-xs text-zinc-500">
        <span>Less</span>

        <div className="flex gap-1">
          <div className="h-3 w-3 rounded-sm bg-zinc-800" />
          <div className="h-3 w-3 rounded-sm bg-zinc-700" />
          <div className="h-3 w-3 rounded-sm bg-zinc-600" />
          <div className="h-3 w-3 rounded-sm bg-zinc-400" />
          <div className="h-3 w-3 rounded-sm bg-white" />
        </div>

        <span>More</span>
      </div>
    </div>
  );
}

export default ContributionHeatmap;