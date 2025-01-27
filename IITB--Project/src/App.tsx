import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { SpamDetection } from './views/SpamDetection';
import { TransactionMonitoring } from './views/TransactionMonitoring';
import { ReportFraud } from './views/ReportFraud';
import { Learn } from './views/Learn';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { Register } from './views/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [activeTab, setActiveTab] = useState('spam');

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('home');
  };

  const renderAuthContent = () => {
    switch (currentView) {
      case 'home':
        return <Home onGetStarted={() => setCurrentView('register')} />;
      case 'login':
        return <Login onLogin={handleLogin} onRegisterClick={() => setCurrentView('register')} />;
      case 'register':
        return <Register onRegister={handleLogin} onLoginClick={() => setCurrentView('login')} />;
      case 'dashboard':
        return (
          <>
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} onLogout={handleLogout} />
            <main className="max-w-7xl mx-auto py-6 px-4">
              {activeTab === 'spam' && <SpamDetection />}
              {activeTab === 'transactions' && <TransactionMonitoring />}
              {activeTab === 'report' && <ReportFraud />}
              {activeTab === 'learn' && <Learn />}
            </main>
          </>
        );
      default:
        return <Home onGetStarted={() => setCurrentView('register')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderAuthContent()}
    </div>
  );
}

export default App;