import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Search,
  Bell,
  LayoutDashboard,
  FolderGit2,
  BarChart3,
  Activity,
  Sparkles,
  User,
  Settings,
  GitPullRequest,
  Star,
  GitCommit,
  Check,
} from "lucide-react";

import { Link, NavLink } from "react-router-dom";

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

const initialNotifications = [
  {
    id: 1,
    title: "Pull request merged",
    description: "Performance improvements were merged.",
    time: "12 minutes ago",
    icon: GitPullRequest,
    read: false,
  },
  {
    id: 2,
    title: "Repository milestone",
    description: "vanta-dashboard reached 100 stars.",
    time: "2 hours ago",
    icon: Star,
    read: false,
  },
  {
    id: 3,
    title: "New commit",
    description: "Authentication flow was updated.",
    time: "Yesterday",
    icon: GitCommit,
    read: true,
  },
];

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const [notifications, setNotifications] = useState(
    initialNotifications
  );

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
      }

      if (event.key === "Escape") {
        setNotificationsOpen(false);
        setMobileMenu(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const markAsRead = (id: number) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-4 backdrop-blur md:px-6">

        {/* Mobile Menu */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-900 hover:text-white md:hidden"
        >
          {mobileMenu ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Search */}
        <button className="hidden items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-500 transition hover:border-zinc-700 hover:text-zinc-300 sm:flex">
          <Search size={16} />

          <span>Search anything...</span>

          <kbd className="ml-4 rounded border border-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-600">
            Ctrl K
          </kbd>
        </button>

        {/* Mobile Logo */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 md:hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-black">
            V
          </div>

          <span className="font-bold tracking-wide">
            VANTA
          </span>
        </div>

        {/* Right */}
        <div className="ml-auto flex items-center gap-3">

          {/* Notifications */}
          <div className="relative">

            <button
              onClick={() =>
                setNotificationsOpen(!notificationsOpen)
              }
              className="relative flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-900 hover:text-white"
            >
              <Bell size={18} />

              {unreadCount > 0 && (
                <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-white" />
              )}
            </button>

            {/* Notification Dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 top-12 z-50 w-[340px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-4">

                  <div>
                    <h3 className="font-semibold text-zinc-200">
                      Notifications
                    </h3>

                    <p className="mt-1 text-xs text-zinc-600">
                      {unreadCount} unread
                    </p>
                  </div>

                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="flex items-center gap-1.5 text-xs text-zinc-500 transition hover:text-white"
                    >
                      <Check size={14} />
                      Mark all read
                    </button>
                  )}

                </div>

                {/* Notifications */}
                <div className="max-h-80 overflow-y-auto">

                  {notifications.map((notification) => {
                    const Icon = notification.icon;

                    return (
                      <button
                        key={notification.id}
                        onClick={() => markAsRead(notification.id)}
                        className={`flex w-full gap-3 border-b border-zinc-900 p-4 text-left transition hover:bg-zinc-900 ${
                          !notification.read
                            ? "bg-zinc-900/40"
                            : ""
                        }`}
                      >

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400">
                          <Icon size={16} />
                        </div>

                        <div className="min-w-0 flex-1">

                          <div className="flex items-start justify-between gap-2">

                            <p className="text-sm font-medium text-zinc-300">
                              {notification.title}
                            </p>

                            {!notification.read && (
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                            )}

                          </div>

                          <p className="mt-1 text-xs leading-5 text-zinc-600">
                            {notification.description}
                          </p>

                          <p className="mt-2 text-[11px] text-zinc-700">
                            {notification.time}
                          </p>

                        </div>

                      </button>
                    );
                  })}

                </div>

                {/* Footer */}
                <div className="border-t border-zinc-800 p-3">

                  <button
                    onClick={() => setNotificationsOpen(false)}
                    className="w-full rounded-lg py-2 text-xs text-zinc-500 transition hover:bg-zinc-900 hover:text-white"
                  >
                    Close
                  </button>

                </div>

              </div>
            )}

          </div>

          {/* Avatar */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-xs font-semibold">
            AG
          </div>

        </div>
      </header>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div className="fixed inset-0 top-16 z-40 bg-zinc-950 md:hidden">

          <nav className="space-y-1 p-4">

            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
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

            <div className="my-4 border-t border-zinc-800" />

            <Link
              to="/profile"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-500 hover:bg-zinc-900 hover:text-zinc-200"
            >
              <User size={18} />
              <span>Profile</span>
            </Link>

            <Link
              to="/settings"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-500 hover:bg-zinc-900 hover:text-zinc-200"
            >
              <Settings size={18} />
              <span>Settings</span>
            </Link>

          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;