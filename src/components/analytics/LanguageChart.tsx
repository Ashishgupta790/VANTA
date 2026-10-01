import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { languageData } from "../../data/mockAnalytics";

const colors = [
  "#ffffff",
  "#a1a1aa",
  "#71717a",
  "#3f3f46",
];

function LanguageChart() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">

      <div className="mb-4">
        <h2 className="font-semibold">
          Languages
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Distribution across repositories.
        </p>
      </div>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={languageData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={3}
            >
              {languageData.map((_, index) => (
                <Cell
                  key={index}
                  fill={colors[index]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#18181b",
                border: "1px solid #27272a",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {languageData.map((language, index) => (
          <div
            key={language.name}
            className="flex items-center gap-2 text-sm"
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: colors[index],
              }}
            />

            <span className="text-zinc-400">
              {language.name}
            </span>

            <span className="ml-auto text-zinc-300">
              {language.value}%
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default LanguageChart;