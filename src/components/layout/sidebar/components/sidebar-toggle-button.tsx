"use client";

import { IconChevronLeft, IconChevronRight } from "@/components/icons";
import { useSidebar } from "@/components/layout/sidebar/components/sidebar-provider";

const SidebarToggleButton = () => {
  const { isExpanded, toggle } = useSidebar();

  return (
    <button
      onClick={toggle}
      className="flex-shrink-0 cursor-pointer rounded-lg p-2 transition-colors duration-200 hover:bg-slate-100"
    >
      {isExpanded ? <IconChevronLeft /> : <IconChevronRight />}
    </button>
  );
};

export default SidebarToggleButton;
