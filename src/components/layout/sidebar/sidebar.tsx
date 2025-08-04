import { MENU_ITEMS } from "@/constants";
import {
  SidebarBottom,
  SidebarContent,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRoot,
  SidebarToggleButton,
} from "@/components/layout/sidebar/components";
import { ModeToggle } from "@/components/common/mode-toggle";

const Sidebar = () => {
  return (
    <SidebarProvider>
      <SidebarRoot>
        {/* Header */}
        <div className="dark:border-sidebar-border flex h-[73px] items-center justify-between border-b border-slate-200 p-4">
          <div className="flex min-w-0 items-center">
            {/* Logo */}
            <div className="bg-primary-600 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg">
              <span className="text-sm font-bold text-white">E</span>
            </div>
            {/* Title */}
            <SidebarContent className="ml-3">
              <div className="whitespace-nowrap">
                <div className="dark:text-sidebar-primary-foreground font-semibold text-slate-900">
                  E-Learning
                </div>
                <div className="dark:text-sidebar-primary-foreground/80 text-xs text-slate-500">
                  Learning System
                </div>
              </div>
            </SidebarContent>
          </div>
          {/* Toggle Button */}
          <SidebarToggleButton />
        </div>

        {/* Navigation Menu */}
        <nav className="min-h-[48px + 2rem] mt-4 flex-1 overflow-x-hidden overflow-y-auto px-2">
          {MENU_ITEMS.map((item, index) => {
            return (
              <SidebarMenuItem
                key={index}
                href={item.href}
                icon={item.icon}
                label={item.label}
              />
            );
          })}
        </nav>

        <div className="dark:border-sidebar-border flex items-center justify-between border-t border-slate-200 p-4">
          <ModeToggle />
        </div>

        {/* Bottom section */}
        <SidebarBottom />
      </SidebarRoot>
    </SidebarProvider>
  );
};

export default Sidebar;
