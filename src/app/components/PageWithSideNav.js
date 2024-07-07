'use client';

import dynamic from 'next/dynamic'
import React from 'react';

const DynamicSideNavbar = dynamic(() => import('@/app/components/SideNavbar'), {
  ssr: false,
})

const PageWithSideNav = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#E9F0FD] flex">
      <DynamicSideNavbar />
      <div className="flex-1 transition-all duration-300 ease-in-out ml-64 overflow-y-auto">
        {children}
      </div>
    </div>
  )
}

export default PageWithSideNav;