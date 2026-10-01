import {
  Star,
  GitFork,
  ArrowUpRight,
  Circle,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updated: string;
  status: string;
}

interface RepositoryCardProps {
  repository: Repository;
}

function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <motion.div
  initial={{
    opacity: 0,
    y: 12,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  whileHover={{
    y: -5,
    scale: 1.01,
  }}
  transition={{
    duration: 0.25,
  }}
  className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900 hover:shadow-xl hover:shadow-black/20"
>
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-zinc-100">
            {repository.name}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
            <Circle
              size={8}
              fill="currentColor"
            />

            {repository.status}
          </div>
        </div>

        <Link
  to={`/repositories/${repository.id}`}
  className="rounded-lg p-2 text-zinc-500 opacity-0 transition group-hover:opacity-100 hover:bg-zinc-800 hover:text-white"
>
  <ArrowUpRight size={17} />
</Link>
      </div>

      {/* Description */}
      <p className="mt-4 min-h-[40px] text-sm leading-6 text-zinc-400">
        {repository.description}
      </p>

      {/* Stats */}
      <div className="mt-5 flex items-center gap-5 text-xs text-zinc-500">
        <div className="flex items-center gap-1.5">
          <Star size={15} />
          <span>{repository.stars}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <GitFork size={15} />
          <span>{repository.forks}</span>
        </div>

        <span>
          Updated {repository.updated}
        </span>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-zinc-800 pt-4">
        <span className="rounded-lg bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300">
          {repository.language}
        </span>

        <span className="text-xs text-zinc-600">
          #{repository.id.toString().padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}

export default RepositoryCard;