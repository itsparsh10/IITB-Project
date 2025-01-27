import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Bell, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  Star, 
  Globe,
  Zap,
  ShieldCheck,
  AlertCircle,
  Activity,
  Eye,
  Key,
  Menu,
  X,
  Brain,
  Phone,
  FileSearch,
  BarChart3,
  BookOpen,
  AlertTriangle,
  Fingerprint,
  GraduationCap,
  Sparkles,
  Scan,
  CircleDollarSign,
  BadgeCheck,
  LineChart
} from 'lucide-react';

interface HomeProps {
  onGetStarted: () => void;
}

export function Home({ onGetStarted }: HomeProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                FraudGuard
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Home
              </a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Features
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                About
              </a>
              <button
                onClick={onGetStarted}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors"
              >
                About
              </a>
              <button
                onClick={onGetStarted}
                className="w-full mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Enhanced background with multiple gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white -z-10" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 -z-10" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
            <div className="text-center space-y-8 animate-fade-in">
              {/* Enhanced badge with animated icon */}
              <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-blue-100/80 text-blue-600 mb-4 backdrop-blur-sm border border-blue-200 shadow-inner group">
                <ShieldCheck className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300 ease-in-out" />
                <span className="text-sm font-semibold">Trusted by 10,000+ users worldwide</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Protect Your Digital Identity with{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient">
                    FraudGuard
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 rounded-full transform scale-x-0 animate-expand" />
                </span>
              </h1>
              
              <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
                Advanced AI-powered fraud prevention system that helps you detect spam calls,
                monitor transactions, and stay protected from digital threats in real-time.
              </p>
              
              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                <button
                  onClick={onGetStarted}
                  className="group w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get started for free
                  <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#features"
                  className="w-full sm:w-auto px-8 py-4 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200 backdrop-blur-sm"
                >
                  See how it works
                </a>
              </div>

              {/* Enhanced trust indicators with animated icons */}
              <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
                {[
                  { 
                    icon: Users, 
                    text: '10K+ Users',
                    animation: 'hover:scale-110'
                  },
                  { 
                    icon: Activity, 
                    text: '99.9% Uptime',
                    animation: 'hover:translate-y-[-4px]'
                  },
                  { 
                    icon: ShieldCheck, 
                    text: 'GDPR Compliant',
                    animation: 'hover:rotate-12'
                  },
                  { 
                    icon: Zap, 
                    text: '24/7 Monitoring',
                    animation: 'hover:scale-110'
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                  >
                    <item.icon 
                      className={`w-5 h-5 mr-2 text-blue-600 transition-all duration-300 ${item.animation} group-hover:text-blue-500`} 
                    />
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-32 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Centered Header */}
            <div className="text-center space-y-6 mb-24">
              <div className="flex justify-center">
                <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-blue-100/80 text-blue-600 text-sm font-semibold backdrop-blur-sm border border-blue-200 shadow-inner group hover:shadow-md transition-all">
                  <Brain className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span>AI-Powered Protection</span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Advanced Security Solutions
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Comprehensive protection against modern digital threats using cutting-edge AI technology
              </p>
            </div>

            {/* Features Grid */}
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  icon: (
                    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" 
                        className="stroke-blue-500" strokeWidth="1.5"/>
                      <path d="M12 8c2.5 0 4 1.5 4 4s-1.5 4-4 4-4-1.5-4-4 1.5-4 4-4z" 
                        className="stroke-blue-600 fill-blue-100" strokeWidth="1.5"/>
                      <path d="M15 9.5c.5-.5 1.5-.5 2 0s.5 1.5 0 2M9 9.5c-.5-.5-1.5-.5-2 0s-.5 1.5 0 2" 
                        className="stroke-blue-400" strokeWidth="1.5"/>
                    </svg>
                  ),
                  title: 'AI-Driven Spam Call and Deepfake Detection',
                  description: 'Integrate cutting-edge AI algorithms to analyze voice patterns, metadata, and speech anomalies to detect spam, phishing, and deepfake calls in real-time.',
                  gradient: 'from-blue-500 to-blue-600',
                  bgGradient: 'from-blue-50 to-indigo-50'
                },
                {
                  icon: (
                    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3v18M3 12h18M7 7l10 10M17 7L7 17" 
                        className="stroke-indigo-500" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="9" 
                        className="stroke-indigo-600" strokeWidth="1.5" fill="none"/>
                      <circle cx="12" cy="12" r="3" 
                        className="fill-indigo-100 stroke-indigo-500" strokeWidth="1.5"/>
                    </svg>
                  ),
                  title: 'Post-Onboarding Transaction Monitoring',
                  description: 'An AI-powered solution designed to enhance the security of accounts onboarded via digital verification (VKYC).',
                  gradient: 'from-indigo-500 to-indigo-600',
                  bgGradient: 'from-indigo-50 to-violet-50'
                },
                {
                  icon: (
                    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" 
                        className="stroke-violet-500" strokeWidth="1.5"/>
                      <path d="M8 10l3 3 5-5" 
                        className="stroke-violet-600" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M3 9h18M9 3v18" 
                        className="stroke-violet-400" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  title: 'User-Centric Reporting Dashboard',
                  description: 'Create a sleek, interactive platform for users to report fraudulent activities and track ongoing incidents.',
                  gradient: 'from-violet-500 to-violet-600',
                  bgGradient: 'from-violet-50 to-purple-50'
                },
                {
                  icon: (
                    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" 
                        className="stroke-purple-500" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="3" 
                        className="fill-purple-100 stroke-purple-600" strokeWidth="1.5"/>
                    </svg>
                  ),
                  title: 'Educational Component',
                  description: 'Empower users to recognize and prevent fraud by integrating a robust educational module.',
                  gradient: 'from-purple-500 to-purple-600',
                  bgGradient: 'from-purple-50 to-pink-50'
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-10 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden text-center"
                >
                  {/* Gradient bar */}
                  <div className={`absolute top-0 left-0 w-full h-2 rounded-t-3xl bg-gradient-to-r ${feature.gradient}`} />

                  {/* Icon Container */}
                  <div className="relative mb-8 flex justify-center">
                    <div className="relative">
                      {/* Icon with glow effect */}
                      <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
                        {feature.icon}
                      </div>
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.bgGradient} blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500 scale-150`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-lg">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover effects */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="py-32 bg-gradient-to-b from-white via-blue-50/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center space-y-6 mb-24">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100/80 text-blue-600 text-sm font-semibold">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeWidth="1.5"/>
                  <path d="M12 6v6l4 2" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                How It Works
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Protecting You Every Step of the Way</h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Our comprehensive security system works round the clock to keep you safe from digital threats
              </p>
            </div>

            {/* Flow Steps */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-100 via-indigo-100 to-violet-100 transform -translate-y-1/2 hidden lg:block" />
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {[
                  {
                    step: '01',
                    title: 'Call Analysis',
                    description: 'AI algorithms analyze call patterns and voice signatures in real-time to detect potential threats.',
                    features: [
                      'Behavioral Analysis',
                      'Pattern Recognition',
                      'Real-Time Alerts'
                    ],
                    gradient: 'from-blue-500 to-blue-600'
                  },
                  {
                    step: '02',
                    title: 'Transaction Monitoring',
                    description: 'Continuous monitoring of account activities to identify suspicious patterns.',
                    features: [
                      'Anomaly Detection',
                      'Risk Assessment',
                      'Instant Blocking'
                    ],
                    gradient: 'from-indigo-500 to-indigo-600'
                  },
                  {
                    step: '03',
                    title: 'Incident Reporting',
                    description: 'Easy-to-use dashboard for reporting and tracking suspicious activities.',
                    features: [
                      'User Feedback',
                      'Incident Tracking',
                      'Analytics Dashboard'
                    ],
                    gradient: 'from-violet-500 to-violet-600'
                  },
                  {
                    step: '04',
                    title: 'Continuous Learning',
                    description: 'Stay informed about latest threats through our educational resources.',
                    features: [
                      'Interactive Tutorials',
                      'Community Insights',
                      'Regular Updates'
                    ],
                    gradient: 'from-purple-500 to-purple-600'
                  }
                ].map((step, index) => (
                  <div key={index} className="relative">
                    {/* Step Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative z-10 h-full transform transition-transform hover:-translate-y-2 duration-300">
                      {/* Step Number */}
                      <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                        {step.step}
                      </div>

                      {/* Content */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                        
                        {/* Features List */}
                        <ul className="space-y-3">
                          {step.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-700">
                              <svg className="w-4 h-4 mr-2 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom Gradient */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${step.gradient}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  label: 'Fraud Cases Prevented', 
                  value: '10M+', 
                  icon: ShieldCheck,
                  animation: 'hover:rotate-12'
                },
                { 
                  label: 'Customer Satisfaction', 
                  value: '99%', 
                  icon: Star,
                  animation: 'hover:scale-110'
                },
                { 
                  label: 'Response Time', 
                  value: '<2s', 
                  icon: Zap,
                  animation: 'hover:translate-y-[-4px]'
                },
                { 
                  label: 'Money Saved', 
                  value: '$50M+', 
                  icon: Activity,
                  animation: 'hover:scale-110'
                }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-gray-100 group"
                >
                  <stat.icon 
                    className={`w-8 h-8 mx-auto mb-4 text-blue-600 transition-all duration-300 ${stat.animation}`} 
                  />
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
              {/* Company Info */}
              <div className="space-y-4 col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2">
                  <Shield className="w-8 h-8 text-blue-500" />
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                    FraudGuard
                  </span>
                </div>
                <p className="text-gray-400 max-w-md">
                  Protecting your digital identity with advanced AI-powered security solutions. 
                  Stay safe from fraud and cyber threats.
                </p>
                <div className="flex space-x-4">
                  {/* Social Media Links */}
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-3">
                  {['Home', 'About', 'Features', 'Pricing', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Legal</h3>
                <ul className="space-y-3">
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} FraudGuard. All rights reserved.
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                    Cookie Settings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}