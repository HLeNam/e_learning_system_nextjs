"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { UserButton, useUser } from "@clerk/nextjs";

import { IconUser } from "@/components/icons";
import SidebarContent from "@/components/layout/sidebar/components/sidebar-content";
import { useSidebar } from "@/components/layout/sidebar/components/sidebar-provider";

const LinkToSignIn = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const linkRef = useRef<HTMLAnchorElement>(null);

  const { isExpanded } = useSidebar();

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
    <div className="dark:border-sidebar-border flex items-center justify-between border-t border-slate-200 p-4">
      <Link
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={linkRef}
        href="/sign-in"
        className="relative flex min-w-0 items-center"
      >
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">
          <IconUser className="size-4 bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400" />
        </div>
        <SidebarContent className="ml-3">
          <div className="whitespace-nowrap">
            <div className="dark:text-sidebar-primary-foreground text-sm font-medium text-slate-900">
              Đăng nhập
            </div>
          </div>
        </SidebarContent>
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
            Đăng nhập để truy cập
          </div>,
          document.body,
        )}
    </div>
  );
};

const SidebarBottom = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn || !user) {
    // Link to sign in page
    return <LinkToSignIn />;
  }

  return (
    <div className="dark:border-sidebar-border flex items-center justify-between border-t border-slate-200 p-4">
      <div className="flex min-w-0 items-center">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
          <UserButton />
        </div>
        <SidebarContent className="ml-3">
          <div className="whitespace-nowrap">
            <div className="dark:text-sidebar-primary-foreground text-sm font-medium text-slate-900">
              {user.username || user.firstName || user.fullName}
            </div>
            <div className="dark:text-sidebar-primary-foreground/80 text-xs text-slate-500">
              {user.primaryEmailAddress?.emailAddress}
            </div>
          </div>
        </SidebarContent>
      </div>
    </div>
  );
};
export default SidebarBottom;
