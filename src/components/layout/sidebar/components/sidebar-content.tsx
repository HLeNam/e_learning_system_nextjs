"use client";

import { ReactNode } from "react";

import { useSidebar } from "@/components/layout/sidebar/components/sidebar-provider";

interface SidebarContentProps {
  children: ReactNode;
  className?: string;
}

const SidebarContent = ({ children, className = "" }: SidebarContentProps) => {
  const { isExpanded } = useSidebar();

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isExpanded ? "w-auto opacity-100" : "w-0 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default SidebarContent;
