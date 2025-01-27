import React from 'react';
import { Phone, Activity, AlertTriangle, BookOpen, LogOut } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
}

export function Navigation({ activeTab, onTabChange, onLogout }: NavigationProps) {
  const tabs = [
    { id: 'spam', label: 'Spam Detection', icon: Phone },
    { id: 'transactions', label: 'Transactions', icon: Activity },
    { id: 'report', label: 'Report Fraud', icon: AlertTriangle },
    { id: 'learn', label: 'Learn', icon: BookOpen },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center px-3 py-4 text-sm font-medium ${
                    activeTab === tab.id
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
          <button
            onClick={onLogout}
            className="flex items-center px-3 py-4 text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}