'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// Define navigation items with proper icon names
const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Products', href: '/products', icon: '📦' },
  { name: 'ESL Devices', href: '/esls', icon: '🏷️' },
  { name: 'Store Layouts', href: '/layouts', icon: '🗺️' },
  { name: 'Designs', href: '/designs', icon: '🎨' },
  { name: 'Branches', href: '/branches', icon: '🏢' },
  { name: 'Users', href: '/users', icon: '👥' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  // Add collapse memory using localStorage
  useEffect(() => {
    const savedCollapsed = localStorage.getItem('sidebarCollapsed');
    if (savedCollapsed !== null) {
      setCollapsed(JSON.parse(savedCollapsed));
    }
  }, []);

  const toggleCollapse = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
  };

  return (
    <div 
      className={`
        bg-black text-white 
        ${collapsed ? 'w-20' : 'w-64'} 
        fixed h-full transition-all duration-300 ease-in-out 
        shadow-lg z-20 overflow-hidden
        border-r border-gray-800
      `}
    >
      <div className="flex items-center justify-center p-4 border-b border-gray-800">
        {/* App title - centered, only visible when expanded */}
        <div className={`
          transition-all duration-300 overflow-hidden text-center
          ${collapsed ? 'w-0 opacity-0' : 'flex-1 opacity-100'} 
        `}>
          <h1 className="text-xl font-bold text-white whitespace-nowrap">
            Digital Shelf Link
          </h1>
        </div>

        {/* Collapse/expand toggle button */}
        <button 
          onClick={toggleCollapse} 
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 active:bg-gray-600 text-white transition-all"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? 
            <span className="inline-block">☰</span> : 
            <span className="inline-block">×</span>
          }
        </button>
      </div>
      
      <nav className="mt-6">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <li key={item.name}>
                <Link href={item.href} className="block">
                  <div 
                    className={`
                      flex items-center p-3 rounded-lg transition-all duration-200
                      ${isActive 
                        ? 'bg-white text-black' 
                        : 'text-gray-300 hover:bg-gray-800'}
                      relative overflow-hidden
                    `}
                  >
                    {/* Icon */}
                    <span className={`
                      text-xl mr-3
                      ${collapsed ? 'mx-auto' : ''}
                      transition-all duration-300
                    `}>
                      {item.icon}
                    </span>
                    
                    {/* Text with transition for collapsed state */}
                    <span 
                      className={`
                        font-medium whitespace-nowrap
                        ${collapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}
                        transition-all duration-300 ease-in-out
                      `}
                    >
                      {item.name}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* Footer section */}
      <div className={`
        absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800
        bg-black transition-all duration-300
        ${collapsed ? 'flex justify-center' : 'block'}
      `}>
        <div className={`
          text-gray-400 text-xs 
          ${collapsed ? 'hidden' : 'block'} 
          transition-all duration-300
        `}>
          <p>Digital Shelf Link</p>
          <p>v2.4.0</p>
        </div>
        <div className={`
          rounded-full bg-gray-800 w-8 h-8 flex items-center justify-center
          ${collapsed ? 'opacity-100' : 'opacity-100 mt-2'}
          hover:bg-gray-700 transition-all cursor-pointer
        `}>
          <span className="text-xs">ℹ️</span>
        </div>
      </div>
    </div>
  );
}