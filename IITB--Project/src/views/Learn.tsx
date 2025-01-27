import React from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { tutorials } from '../data/mockData';
import { PhoneOff, ShieldCheck, Eye } from 'lucide-react';

const icons = {
  'phone-off': PhoneOff,
  'shield-check': ShieldCheck,
  'eye': Eye
};

export function Learn() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">Educational Resources</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => {
          const Icon = icons[tutorial.icon as keyof typeof icons];
          
          return (
            <div
              key={tutorial.id}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex-shrink-0">
                  <Icon className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{tutorial.title}</h3>
              </div>
              <p className="text-gray-500">{tutorial.content}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
                Learn more →
              </button>
            </div>
          );
        })}
      </div>

      <DashboardCard title="Latest Community Tips" className="mt-8">
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-medium">Verify Caller Identity</h4>
            <p className="text-gray-600 text-sm mt-1">
              Always ask for official identification and never share personal information over unexpected calls.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-medium">Monitor Your Transactions</h4>
            <p className="text-gray-600 text-sm mt-1">
              Regularly check your account statements and report any suspicious activity immediately.
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-medium">Use Strong Authentication</h4>
            <p className="text-gray-600 text-sm mt-1">
              Enable two-factor authentication whenever possible and use unique passwords for each account.
            </p>
          </div>
        </div>
      </DashboardCard>
    </div>
  );
}