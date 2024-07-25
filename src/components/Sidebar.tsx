import React from 'react';

interface SidebarProps {
  steps: string[];
  currentStep: number;
}

const Sidebar: React.FC<SidebarProps> = ({ steps, currentStep }) => (
  <div className="w-64 bg-white p-6">
    <div className="flex flex-col items-start space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center cursor-pointer">
          <div className="relative">
            {index + 1 < currentStep && (
              <div className="relative flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16 8A8 8 0 11.521.642a.75.75 0 101.015 1.106A6.5 6.5 0 1014.833 17H12.5a.75.75 0 100 1.5h3a.75.75 0 00.75-.75v-3a.75.75 0 00-1.5 0v2.333z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-full bg-gray-300"></div>
                )}
              </div>
            )}
            {index + 1 === currentStep && (
              <div className="relative flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-purple-800 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-purple-800"></div>
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[1px] h-full bg-gray-200"></div>
                )}
              </div>
            )}
            {index + 1 > currentStep && (
              <div className="relative flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center">
                  <span className="text-gray-700">{index + 1}</span>
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[1px] h-full bg-gray-200"></div>
                )}
              </div>
            )}
          </div>
          <span
            className={`ml-4 text-sm  ${
              index + 1 === currentStep
                ? 'font-semibold text-purple-900'
                : 'text-gray-600'
            }`}
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Sidebar;
