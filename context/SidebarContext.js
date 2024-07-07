'use client';

import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed, showSidebar, setShowSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};