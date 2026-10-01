import {
  LayoutDashboard,
  FolderGit2,
  BarChart3,
  Activity,
  Sparkles,
  User,
  Settings,
} from "lucide-react";

import { NavLink, Link } from "react-router-dom";



const navigation = [
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
];

function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-zinc-800 bg-zinc-950 md:flex md:flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-zinc-800 px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-black">
            V
          </div>

          <span className="text-lg font-bold tracking-wide">
            VANTA
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-200"
                }`
              }
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-zinc-800 p-4">
        <Link
  to="/profile"
  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-500 transition hover:bg-zinc-900 hover:text-zinc-200"
>
  <User size={18} />
  <span>Profile</span>
</Link>

       <Link
  to="/settings"
  className="mt-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-500 transition hover:bg-zinc-900 hover:text-zinc-200"
>
  <Settings size={18} />
  <span>Settings</span>
</Link>

        {/* User */}
        <div className="mt-4 flex items-center gap-3 border-t border-zinc-800 pt-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-xs font-semibold">
            AG
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-zinc-200">
              Ashish Gupta
            </p>
            <p className="truncate text-xs text-zinc-600">
              Frontend Developer
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;