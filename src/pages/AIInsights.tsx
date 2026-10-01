import { useState } from "react";
import {
  Sparkles,
  TrendingUp,
  Code2,
  GitPullRequest,
  Lightbulb,
  ArrowUpRight,
  Send,
} from "lucide-react";

import DashboardLayout from "../components/layout/DashboardLayout";

const insights = [
  {
    icon: TrendingUp,
    title: "Your productivity is trending upward",
    description:
      "Your commit activity increased steadily over the last few months, with your strongest activity appearing recently.",
  },
  {
    icon: Code2,
    title: "TypeScript is your strongest language",
    description:
      "TypeScript represents the largest part of your current development activity across repositories.",
  },
  {
    icon: GitPullRequest,
    title: "You are actively contributing",
    description:
      "Your pull request activity suggests that you are regularly building and improving existing projects.",
  },
];

const prompts = [
  "Analyze my development activity",
  "Which skill should I improve next?",
  "Summarize my strongest projects",
  "How can I improve my GitHub profile?",
];

function AIInsights() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const askAI = () => {
    if (!question.trim()) return;

    setIsThinking(true);
    setResponse("");

    setTimeout(() => {
      setResponse(
        `Based on your current development profile, "${question}" is a great area to explore. Your activity shows consistent work across TypeScript, React and Java projects. I would recommend continuing to strengthen your frontend fundamentals while gradually connecting them with your backend skills.`
      );

      setIsThinking(false);
    }, 1000);
  };

  const selectPrompt = (prompt: string) => {
    setQuestion(prompt);
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl p-6 lg:p-8">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black">
              <Sparkles size={21} />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                AI Insights
              </h1>

              <p className="mt-1 text-sm text-zinc-500">
                Intelligent insights about your development activity.
              </p>
            </div>
          </div>
        </div>

        {/* AI Hero */}
        <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 lg:p-8">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/[0.03] blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
              <Sparkles size={14} />
              VANTA Intelligence
            </div>

            <h2 className="text-2xl font-semibold leading-tight text-white lg:text-3xl">
              Your development activity shows
              <span className="text-zinc-400">
                {" "}consistent momentum.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              Based on your recent commits, repositories, languages and
              contribution patterns, you are actively building across
              multiple areas of software development.
            </p>
          </div>
        </section>

        {/* Development Insights */}
        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-lg font-semibold">
              Development Insights
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Patterns detected from your development activity.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {insights.map((insight) => {
              const Icon = insight.icon;

              return (
                <div
                  key={insight.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-zinc-700 hover:bg-zinc-900"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 text-zinc-200">
                    <Icon size={19} />
                  </div>

                  <h3 className="mt-5 font-semibold text-zinc-100">
                    {insight.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {insight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* AI Section */}
        <section className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">

          {/* Ask AI */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800">
                <Lightbulb size={19} />
              </div>

              <div>
                <h2 className="font-semibold">
                  Ask VANTA AI
                </h2>

                <p className="mt-1 text-xs text-zinc-600">
                  Ask questions about your development profile.
                </p>
              </div>
            </div>

            {/* Response */}
            {isThinking && (
              <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <Sparkles size={15} />
                  VANTA is analyzing your profile...
                </div>
              </div>
            )}

            {response && !isThinking && (
              <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-medium text-zinc-500">
                  <Sparkles size={14} />
                  VANTA AI
                </div>

                <p className="text-sm leading-6 text-zinc-300">
                  {response}
                </p>
              </div>
            )}

            <div className="mt-5">
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask something about your development..."
                className="h-32 w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-zinc-600"
              />

              <button
                onClick={askAI}
                disabled={!question.trim() || isThinking}
                className="mt-3 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={16} />
                {isThinking ? "Thinking..." : "Ask AI"}
              </button>
            </div>
          </div>

          {/* Suggested Prompts */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="font-semibold">
              Suggested prompts
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Start with one of these questions.
            </p>

            <div className="mt-5 space-y-2">
              {prompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => selectPrompt(prompt)}
                  className="flex w-full items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-left text-sm text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                >
                  <span>{prompt}</span>
                  <ArrowUpRight size={15} />
                </button>
              ))}
            </div>
          </div>

        </section>
      </div>
    </DashboardLayout>
  );
}

export default AIInsights;