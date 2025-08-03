"use client";

import { UserButton, useUser } from "@clerk/nextjs";

import SidebarContent from "@/components/layout/sidebar/components/sidebar-content";

const SidebarBottom = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
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
