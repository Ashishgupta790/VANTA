import { useEffect, useState } from "react";
import {
  Search,
  LayoutDashboard,
  FolderGit2,
  BarChart3,
  Activity,
  Sparkles,
  User,
  Settings,
  ArrowUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const commands = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Repositories",
    path: "/repositories",
    icon: FolderGit2,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Activity",
    path: "/activity",
    icon: Activity,
  },
  {
    name: "AI Insights",
    path: "/ai-insights",
    icon: Sparkles,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function CommandPalette() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const filteredCommands = commands.filter((command) =>
    command.name.toLowerCase().includes(search.toLowerCase())
  );

  const openPage = (path: string) => {
    navigate(path);
    setOpen(false);
    setSearch("");
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-[15vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Search */}
        <div className="flex items-center gap-3 border-b border-zinc-800 px-4">
          <Search size={19} className="text-zinc-500" />

          <input
            autoFocus
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search pages..."
            className="h-14 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
          />

          <kbd className="rounded-md border border-zinc-800 px-2 py-1 text-xs text-zinc-600">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((command) => {
              const Icon = command.icon;

              return (
                <button
                  key={command.path}
                  onClick={() => openPage(command.path)}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
                >
                  <Icon size={18} />

                  <span className="flex-1">
                    {command.name}
                  </span>

                  <ArrowUp
                    size={14}
                    className="rotate-45 text-zinc-700"
                  />
                </button>
              );
            })
          ) : (
            <div className="px-4 py-10 text-center">
              <p className="text-sm text-zinc-400">
                No results found
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                Try another search.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-zinc-800 px-4 py-3 text-xs text-zinc-600">
          <span>Navigate anywhere in VANTA</span>

          <div className="flex items-center gap-2">
            <kbd className="rounded border border-zinc-800 px-1.5 py-1">
              Ctrl
            </kbd>

            <span>+</span>

            <kbd className="rounded border border-zinc-800 px-1.5 py-1">
              K
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;