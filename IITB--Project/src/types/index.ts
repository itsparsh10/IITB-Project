export interface SpamCall {
  id: string;
  phoneNumber: string;
  timestamp: string;
  riskLevel: 'low' | 'medium' | 'high';
  duration: string;
  location: string;
  status: 'detected' | 'reported' | 'verified';
}

export interface Transaction {
  id: string;
  amount: number;
  type: string;
  merchant: string;
  timestamp: string;
  status: 'normal' | 'suspicious' | 'fraudulent';
  riskScore: number;
  category: string;
}

export interface FraudReport {
  id: string;
  type: 'call' | 'transaction' | 'other';
  description: string;
  timestamp: string;
  status: 'pending' | 'investigating' | 'resolved';
  contactInfo: string;
}