import React, { useState } from 'react';

const Header = ({ setFilter }) => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFilter(tab); // Update the filter when the tab changes
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-[#F8F6F3] shadow">
      <h1 className="text-2xl font-bold ml-5">Lessons</h1>
        <button className="bg-[#5457C9] text-white px-4 py-2 rounded mr-2">
          Create Lesson
        </button>
    </div>
  );
};

export default Header;
