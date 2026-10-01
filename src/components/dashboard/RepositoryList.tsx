import { useMemo, useState } from "react";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { repositories } from "../../data/mockRepositories";
import RepositoryCard from "./RepositoryCard";

function RepositoryList() {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("All");
  const [sortBy, setSortBy] = useState("recent");

  const filteredRepositories = useMemo(() => {
    let result = repositories.filter((repository) => {
      const matchesSearch =
        repository.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        repository.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesLanguage =
        language === "All" ||
        repository.language === language;

      return matchesSearch && matchesLanguage;
    });

    if (sortBy === "stars") {
      result = [...result].sort(
        (a, b) => b.stars - a.stars
      );
    }

    if (sortBy === "name") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [search, language, sortBy]);

  return (
    <section className="mt-8">

      {/* Header */}
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h2 className="text-lg font-semibold">
            Your Repositories
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Recently active projects.
          </p>
        </div>

        <button className="flex items-center gap-2 self-start text-sm text-zinc-400 transition hover:text-white">
          View all
          <ArrowRight size={16} />
        </button>

      </div>

      {/* Filters */}
      <div className="mb-5 flex flex-col gap-3 md:flex-row">

        {/* Search */}
        <div className="relative flex-1">

          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search repositories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-2.5 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-zinc-600"
          />

        </div>

        {/* Language */}
        <div className="relative">

          <SlidersHorizontal
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="appearance-none rounded-xl border border-zinc-800 bg-zinc-900 py-2.5 pl-9 pr-8 text-sm text-zinc-300 outline-none focus:border-zinc-600"
          >
            <option value="All">All languages</option>
            <option value="TypeScript">TypeScript</option>
            <option value="React">React</option>
            <option value="Java">Java</option>
          </select>

        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-300 outline-none focus:border-zinc-600"
        >
          <option value="recent">Recently updated</option>
          <option value="stars">Most stars</option>
          <option value="name">Name</option>
        </select>

      </div>

      {/* Results */}
      {filteredRepositories.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredRepositories.map((repository) => (
            <RepositoryCard
              key={repository.id}
              repository={repository}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-zinc-800 py-16 text-center">

          <p className="font-medium text-zinc-300">
            No repositories found
          </p>

          <p className="mt-2 text-sm text-zinc-600">
            Try changing your search or filters.
          </p>

        </div>
      )}

    </section>
  );
}

export default RepositoryList;