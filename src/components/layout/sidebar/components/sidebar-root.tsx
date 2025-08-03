"use client";

import { ReactNode } from "react";

import { useSidebar } from "@/components/layout/sidebar/components/sidebar-provider";

interface SidebarRootProps {
  children: ReactNode;
}

const SidebarRoot = ({ children }: SidebarRootProps) => {
  const { isExpanded } = useSidebar();

  return (
    <aside
      className={`dark:bg-sidebar dark:border-sidebar-border flex h-full flex-col border-r border-slate-200 bg-white shadow-sm transition-all duration-300 ease-in-out ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      {children}
    </aside>
  );
};

export default SidebarRoot;
