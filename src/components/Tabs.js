// src/components/Tabs.js
import React, { useState } from 'react';

const Tabs = ({ setFilter }) => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFilter(tab); // Update the filter when the tab changes
  };

  return (
    <div className="flex gap-4 p-4 bg-[#F8F6F3] shadow">
      <button
        className={`py-2 text-lg ${
          activeTab === 'upcoming' ? 'border-b-2 border-[#7b7eda] text-[#7b7eda]' : 'text-gray-500'
        }`}
        onClick={() => handleTabChange('upcoming')}
      >
        Upcoming
      </button>
      <button
        className={`py-2 text-lg ${
          activeTab === 'completed' ? 'border-b-2 border-[#7b7eda] text-[#7b7eda]' : 'text-gray-500'
        }`}
        onClick={() => handleTabChange('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default Tabs;
