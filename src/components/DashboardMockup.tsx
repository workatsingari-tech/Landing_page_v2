import React from 'react';

const DashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-6 border border-gray-100">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-16 h-2 bg-gray-300 rounded"></div>
            <div className="w-32 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm mb-6">
        <div className="w-5 h-5 text-gray-400">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-singari-purple"></div>
            <div className="w-24 h-2 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="w-6 h-6 text-singari-purple">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 right-12 flex gap-8">
        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-xs text-green-500 font-semibold">+5%</span>
        </div>
        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 text-singari-purple">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
            </svg>
          </div>
        </div>
        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-xs text-red-500 font-semibold">-1%</span>
        </div>
        <div className="w-6 h-6 text-singari-purple">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="h-64 bg-gradient-to-t from-purple-50 to-transparent rounded-2xl p-6 relative overflow-hidden mb-6">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-4 text-xs text-gray-400">
          <span>3,000</span>
          <span>1,500</span>
          <span>1,000</span>
          <span>500</span>
          <span>0</span>
        </div>

        {/* Chart */}
        <svg className="w-full h-full ml-8" viewBox="0 0 600 200" preserveAspectRatio="none">
          {/* Grid lines */}
          <line x1="0" y1="40" x2="600" y2="40" stroke="#E5E7EB" strokeWidth="1" opacity="0.3" />
          <line x1="0" y1="80" x2="600" y2="80" stroke="#E5E7EB" strokeWidth="1" opacity="0.3" />
          <line x1="0" y1="120" x2="600" y2="120" stroke="#E5E7EB" strokeWidth="1" opacity="0.3" />
          <line x1="0" y1="160" x2="600" y2="160" stroke="#E5E7EB" strokeWidth="1" opacity="0.3" />
          
          {/* Data points */}
          <circle cx="100" cy="100" r="3" fill="#5227FF" opacity="0.5" />
          <circle cx="200" cy="120" r="3" fill="#5227FF" opacity="0.5" />
          <circle cx="300" cy="80" r="3" fill="#5227FF" opacity="0.5" />
          <circle cx="400" cy="60" r="3" fill="#5227FF" opacity="0.5" />
          <circle cx="500" cy="90" r="3" fill="#5227FF" opacity="0.5" />

          {/* Main line - Purple */}
          <path 
            d="M 0 140 Q 100 120 150 110 T 250 85 T 350 70 T 450 55 T 550 75 T 600 85" 
            fill="none" 
            stroke="#5227FF" 
            strokeWidth="3" 
            opacity="0.8"
          />
          
          {/* Secondary line - Light Purple */}
          <path 
            d="M 0 160 Q 100 150 150 145 T 250 135 T 350 130 T 450 125 T 550 135 T 600 140" 
            fill="none" 
            stroke="#B19EEF" 
            strokeWidth="2" 
            opacity="0.6"
          />
        </svg>

        {/* Data labels at bottom */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-around px-12">
          <div className="flex flex-col items-center">
            <div className="w-12 h-1 bg-purple-200 rounded mb-1"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-1 bg-purple-200 rounded mb-1"></div>
            <span className="text-xs text-singari-purple font-semibold">1,280</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-1 bg-purple-200 rounded mb-1"></div>
            <span className="text-xs text-singari-purple font-semibold">88.74%</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-1 bg-purple-200 rounded mb-1"></div>
            <span className="text-xs text-singari-purple font-semibold">8.85%</span>
          </div>
        </div>
      </div>

      {/* Bottom Section - Additional Data */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="w-full h-2 bg-gray-100 rounded"></div>
          <div className="w-3/4 h-2 bg-gray-100 rounded"></div>
          <div className="w-1/2 h-2 bg-gray-100 rounded"></div>
        </div>
        <div className="space-y-2">
          <div className="bg-purple-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="w-16 h-2 bg-purple-200 rounded"></div>
              <span className="text-xs text-singari-purple font-semibold">2,165</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="w-16 h-2 bg-purple-200 rounded"></div>
              <span className="text-xs text-singari-purple font-semibold">1,032</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
