import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { commitData } from "../../data/mockAnalytics";

function CommitChart() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      
      <div className="mb-6">
        <h2 className="font-semibold">
          Commit Activity
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Monthly commits over the last year.
        </p>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={commitData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#27272a"
            />

            <XAxis
              dataKey="month"
              stroke="#71717a"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#71717a"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#18181b",
                border: "1px solid #27272a",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="commits"
              stroke="#ffffff"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default CommitChart;