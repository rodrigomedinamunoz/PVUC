import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ClinicalHistory } from './components/ClinicalHistory';
import { HealthSurveillance } from './components/HealthSurveillance';
import { SecuritySettings } from './components/SecuritySettings';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'history':
        return <ClinicalHistory />;
      case 'surveillance':
        return <HealthSurveillance />;
      case 'security':
        return <SecuritySettings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="size-full flex bg-background">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}