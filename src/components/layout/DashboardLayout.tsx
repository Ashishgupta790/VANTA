import type { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CommandPalette from "./CommandPalette";
import PageTransition from "./PageTransition";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">

      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">

        <Navbar />

        <main className="flex-1 overflow-auto">
          <PageTransition>
            {children}
          </PageTransition>
        </main>

      </div>

      <CommandPalette />

    </div>
  );
}

export default DashboardLayout;