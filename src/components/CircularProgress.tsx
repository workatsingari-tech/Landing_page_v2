import React from 'react';

interface CircularProgressProps {
  percentage?: number;
  size?: number;
  strokeWidth?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ 
  percentage = 75, 
  size = 160,
  strokeWidth = 12 
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="rounded-3xl shadow-2xl p-8 w-[320px] border border-gray-100">
      {/* Header with dots */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1">
          <div className="w-20 h-3 bg-gray-200 rounded"></div>
        </div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* Circular Progress */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative" style={{ width: size, height: size }}>
          <svg className="transform -rotate-90" width={size} height={size}>
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#E5E7EB"
              strokeWidth={strokeWidth}
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#5227FF"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-4 bg-gray-200 rounded mx-auto mb-2"></div>
              <div className="w-12 h-3 bg-gray-100 rounded mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-singari-purple"></div>
          <span className="text-sm text-gray-700 font-medium">Mobile</span>
          <div className="ml-auto">
            <div className="w-12 h-3 bg-gray-100 rounded"></div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-singari-light-purple"></div>
          <span className="text-sm text-gray-700 font-medium">Desktop</span>
          <div className="ml-auto">
            <div className="w-12 h-3 bg-gray-100 rounded"></div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <span className="text-sm text-gray-700 font-medium">Other</span>
          <div className="ml-auto">
            <div className="w-12 h-3 bg-gray-100 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
