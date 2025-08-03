"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

import { TMenuItem } from "@/types";
import { useSidebar } from "@/components/layout/sidebar/components/sidebar-provider";

const SidebarMenuItem = ({ href, icon, label }: TMenuItem) => {
  const pathname = usePathname();
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const linkRef = useRef<HTMLAnchorElement>(null);

  const { isExpanded } = useSidebar();

  const isActive = pathname === href;

  const handleMouseEnter = () => {
    if (!isExpanded && linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      setTooltipPosition({
        x: rect.right + 8,
        y: rect.top + rect.height / 2,
      });
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <Link
        ref={linkRef}
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`group relative mb-1 flex items-center rounded-lg px-3 py-3 text-slate-700 transition-all dark:text-slate-400 ${isActive ? "bg-primary-600 !text-primary-50 svg-animate" : "hover:bg-primary-50 hover:text-primary-600 dark:hover:text-primary-500 dark:hover:bg-primary-600/10 text-slate-700"} `}
      >
        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
          {icon}
        </div>
        <div
          className={`ml-3 overflow-hidden transition-all ${
            isExpanded ? "w-auto opacity-100" : "w-0 opacity-0"
          }`}
        >
          <span className="font-medium whitespace-nowrap">{label}</span>
        </div>
      </Link>

      {showTooltip &&
        !isExpanded &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="pointer-events-none fixed z-[9999] rounded-md bg-slate-900 px-2 py-1 text-sm text-white shadow-lg"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y - 12,
            }}
          >
            {label}
          </div>,
          document.body,
        )}
    </>
  );
};

export default SidebarMenuItem;
