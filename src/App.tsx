import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Products from './components/Products';
import Transactions from './components/Transactions';
import Reviews from './components/Reviews';
import Support from './components/Support';
import Help from './components/Help';
import SellingFeesCalculator from './components/SellingFeesCalculator';
import CreditCardManagement from './components/CreditCardManagement';
import AbandonedCart from './components/AbandonedCart';
import SalesReport from './components/SalesReport';
import Membership from './components/Membership';
import Promotion from './components/Promotion';
import ProductEdit from './components/ProductEdit';
import ProfileSettings from './components/ProfileSettings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showProductEdit, setShowProductEdit] = useState(false);
  const [showProfileSettings, setShowProfileSettings] = useState(false);

  const renderContent = () => {
    if (showProductEdit) {
      return <ProductEdit />;
    }
    
    if (showProfileSettings) {
      return <ProfileSettings />;
    }
    
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'orders':
        return <Orders />;
      case 'products':
        return <Products onEditProduct={() => setShowProductEdit(true)} />;
      case 'transactions':
        return <Transactions />;
      case 'reviews':
        return <Reviews />;
      case 'supports':
        return <Support />;
      case 'selling-fees':
        return <SellingFeesCalculator />;
      case 'credit-card':
        return <CreditCardManagement />;
      case 'scoring':
        return <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Scoring</h2>
          <p className="text-gray-600">Scoring interface coming soon...</p>
        </div>;
      case 'abandoned-cart':
        return <AbandonedCart />;
      case 'sales-report':
        return <SalesReport />;
      case 'promotion':
        return <Promotion />;
      case 'membership':
        return <Membership />;
      case 'settings':
        return <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Settings</h2>
          <button onClick={() => setShowProfileSettings(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Edit Profile Settings</button>
        </div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 py-6 px-3">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;