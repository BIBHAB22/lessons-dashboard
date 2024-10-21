// src/components/Hero.js
import React, { useState } from 'react';
import Tabs from './Tabs';
import SearchFilters from './Searchfilters';
import LessonList from './Lessonlist';
import { FaQuestionCircle } from 'react-icons/fa';

const Hero = () => {
  const [filter, setFilter] = useState('upcoming');
  const [showAsList, setShowAsList] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    selectedClass: 'All Classes',
    selectedStatus: 'All statuses',
    searchTerm: '',
  });

  const handleFilterChange = (selectedClass, selectedStatus, searchTerm) => {
    setFilters({
      selectedClass,
      selectedStatus,
      searchTerm,
    });
  };

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg">
        {/* Tabs for filtering Upcoming/Completed */}
        <Tabs setFilter={setFilter} />

        {/* Search and Filter Options */}
        <SearchFilters 
        showAsList={showAsList} 
        setShowAsList={setShowAsList} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        onFilterChange={handleFilterChange}
      />
        <div className="mt-4">
          <LessonList
            filter={filter}
            filters={filters}
            showAsList={showAsList}
          />
        </div>
      </div>
      <button
      className="fixed bottom-4 right-4 bg-[#FFEDD8] text-[#B35E01] p-3 rounded-md shadow-lg flex gap-1"
    >
      <FaQuestionCircle size={20} />
      Help
    </button>
    </section>
  );
};

export default Hero;
