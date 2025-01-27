import { SpamCall, Transaction } from '../types';

export const mockSpamCalls: SpamCall[] = [
  {
    id: '1',
    phoneNumber: '+1 (555) 123-4567',
    timestamp: '2024-03-10T14:30:00Z',
    riskLevel: 'high',
    duration: '0:45',
    location: 'New York, USA',
    status: 'detected'
  },
  {
    id: '2',
    phoneNumber: '+1 (555) 987-6543',
    timestamp: '2024-03-10T13:15:00Z',
    riskLevel: 'medium',
    duration: '1:20',
    location: 'Los Angeles, USA',
    status: 'verified'
  },
  // Add more mock data as needed
];

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    amount: 999.99,
    type: 'online',
    merchant: 'Tech Store XYZ',
    timestamp: '2024-03-10T12:00:00Z',
    status: 'suspicious',
    riskScore: 0.85,
    category: 'Electronics'
  },
  {
    id: '2',
    amount: 50.00,
    type: 'in-store',
    merchant: 'Local Grocery',
    timestamp: '2024-03-10T11:30:00Z',
    status: 'normal',
    riskScore: 0.12,
    category: 'Groceries'
  },
  // Add more mock data as needed
];

export const tutorials = [
  {
    id: '1',
    title: 'Recognizing Spam Calls',
    content: 'Learn how to identify potential spam calls and protect yourself from scammers.',
    icon: 'phone-off'
  },
  {
    id: '2',
    title: 'Safe Online Transactions',
    content: 'Best practices for secure online shopping and financial transactions.',
    icon: 'shield-check'
  },
  {
    id: '3',
    title: 'Deepfake Detection',
    content: 'Understanding and identifying deepfake content in calls and videos.',
    icon: 'eye'
  }
];