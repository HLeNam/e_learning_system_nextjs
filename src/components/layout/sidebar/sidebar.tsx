import { MENU_ITEMS } from "@/constants";
import { IconUser } from "@/components/icons";
import {
  SidebarContent,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRoot,
  SidebarToggleButton,
} from "@/components/layout/sidebar/components";

const Sidebar = () => {
  return (
    <SidebarProvider>
      <SidebarRoot>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 p-4">
          <div className="flex min-w-0 items-center">
            {/* Logo */}
            <div className="bg-primary-600 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg">
              <span className="text-sm font-bold text-white">E</span>
            </div>
            {/* Title */}
            <SidebarContent className="ml-3">
              <div className="whitespace-nowrap">
                <div className="font-semibold text-slate-900">E-Learning</div>
                <div className="text-xs text-slate-500">Learning System</div>
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

        {/* Bottom section */}
        <div className="flex items-center justify-between border-t border-slate-200 p-4">
          <div className="flex min-w-0 items-center">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
              <IconUser />
            </div>
            <SidebarContent className="ml-3">
              <div className="whitespace-nowrap">
                <div className="text-sm font-medium text-slate-900">Admin</div>
                <div className="text-xs text-slate-500">
                  admin@elearning.com
                </div>
              </div>
            </SidebarContent>
          </div>
        </div>
      </SidebarRoot>
    </SidebarProvider>
  );
};

export default Sidebar;
