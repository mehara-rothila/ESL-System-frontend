'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// Define navigation items with proper icon names (assuming you'll import icons later)
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

  return (
    <div className={`bg-gradient-to-b from-blue-800 to-blue-900 text-white ${collapsed ? 'w-20' : 'w-64'} fixed h-full transition-all duration-300 shadow-lg z-20`}>
      <div className="flex items-center justify-between p-5 border-b border-blue-700">
        <div className={`${collapsed ? 'hidden' : 'block'}`}>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">Digital Shelf Link</h1>
        </div>
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 text-white transition-colors"
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>
      
      <nav className="mt-8">
        <ul className="space-y-2 px-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <div 
                  className={`
                    flex items-center p-3 rounded-xl transition-all duration-200
                    ${pathname === item.href 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 shadow-md' 
                      : 'hover:bg-blue-700/50'}
                  `}
                >
                  <span className="mr-3 text-xl">{item.icon}</span>
                  <span className={`${collapsed ? 'hidden' : 'block'} font-medium`}>{item.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}