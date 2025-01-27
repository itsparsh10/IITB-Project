import React from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { RiskBadge } from '../components/RiskBadge';
import { mockSpamCalls } from '../data/mockData';
import { Phone, MapPin, Clock } from 'lucide-react';

export function SpamDetection() {
  return (
    <div className="space-y-6">
      <DashboardCard title="Recent Spam Calls">
        <div className="space-y-4">
          {mockSpamCalls.map((call) => (
            <div key={call.id} className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="font-medium">{call.phoneNumber}</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 space-y-1">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{call.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{new Date(call.timestamp).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <RiskBadge level={call.riskLevel} />
              </div>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  );
}