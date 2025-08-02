"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type SidebarContextType = {
  isExpanded: boolean;
  toggle: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggle = () => setIsExpanded(!isExpanded);

  return (
    <SidebarContext.Provider value={{ isExpanded, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
