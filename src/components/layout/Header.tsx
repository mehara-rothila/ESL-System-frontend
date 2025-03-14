'use client';

import { useState } from 'react';

export default function Header() {
  const [user] = useState({
    name: 'Admin User',
    role: 'Administrator'
  });

  return (
    <header className="bg-white border-b border-gray-200 h-16 fixed w-full z-10 pl-64 shadow-sm">
      <div className="flex justify-between items-center h-full px-8">
        <div className="text-lg font-semibold text-gray-700">
          {/* Current page title would go here */}
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
            🔔
          </button>
          <div className="flex items-center border-l pl-4 border-gray-200">
            <div className="mr-3">
              <div className="text-sm font-medium text-gray-700">{user.name}</div>
              <div className="text-xs text-gray-500">{user.role}</div>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium">
              {user.name.charAt(0)}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}