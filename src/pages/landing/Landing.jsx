import { useState } from 'react';
import Footer from "../../components/layout/Footer";
import Community from "./Community";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";
import ServicesOverview from "./ServicesOverview";
import FreelancerProfile from '../profile/FreelancerProfile';
import Dashboard from '../dashboard/Dashboard';

function Landing() {
  const [currentView, setCurrentView] = useState('landing');

  if (currentView === 'profile') {
    return (
      <div>
        {/* <div className="fixed top-4 left-4 z-50 space-x-2">
          <button onClick={() => setCurrentView('landing')} className="bg-blue-600 text-white px-4 py-2 rounded">
            Back to Landing
          </button>
          <button onClick={() => setCurrentView('dashboard')} className="bg-green-600 text-white px-4 py-2 rounded">
            View Dashboard
          </button>
        </div> */}
        <FreelancerProfile />
      </div>
    );
  }

  if (currentView === 'dashboard') {
    return (
      <div>
        {/* <div className="fixed top-4 left-4 z-50 space-x-2">
          <button onClick={() => setCurrentView('landing')} className="bg-blue-600 text-white px-4 py-2 rounded">
            Back to Landing
          </button>
          <button onClick={() => setCurrentView('profile')} className="bg-purple-600 text-white px-4 py-2 rounded">
            View Profile
          </button>
        </div> */}
        <Dashboard />
      </div>
    );
  }

  return (
    <>
      {/* <div className="fixed top-4 right-4 z-50 space-x-2">
        <button onClick={() => setCurrentView('profile')} className="bg-purple-600 text-white px-4 py-2 rounded">
          View Profile
        </button>
        <button onClick={() => setCurrentView('dashboard')} className="bg-green-600 text-white px-4 py-2 rounded">
          View Dashboard
        </button>
      </div> */}
      <HeroSection />
      <ServicesOverview />
      <Community />
      <FAQ />
      <Footer/>
    </>
  );
}

export default Landing;

