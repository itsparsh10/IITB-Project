import React, { useState } from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { RiskBadge } from '../components/RiskBadge';
import { mockTransactions } from '../data/mockData';
import { CreditCard, Calendar, Store } from 'lucide-react';

export function TransactionMonitoring() {
  const [showSuspiciousOnly, setShowSuspiciousOnly] = useState(false);

  const filteredTransactions = showSuspiciousOnly
    ? mockTransactions.filter((t) => t.status !== 'normal')
    : mockTransactions;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Transaction Analysis</h2>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showSuspiciousOnly}
            onChange={(e) => setShowSuspiciousOnly(e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-600">Show suspicious only</span>
        </label>
      </div>

      <DashboardCard title="Recent Transactions">
        <div className="space-y-4">
          {filteredTransactions.map((transaction) => (
            <div key={transaction.id} className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2">
                    <Store className="w-4 h-4 text-gray-500" />
                    <span className="font-medium">{transaction.merchant}</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 space-y-1">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-4 h-4" />
                      <span>${transaction.amount.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(transaction.timestamp).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <RiskBadge level={transaction.riskScore} />
              </div>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  );
}