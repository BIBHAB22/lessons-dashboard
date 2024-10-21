// src/components/Hero.js
import React, { useState } from 'react';
import Tabs from './Tabs';
import SearchFilters from './Searchfilters';
import LessonList from './Lessonlist';

const Hero = () => {
  const [filter, setFilter] = useState('upcoming');
  const [showAsList, setShowAsList] = useState(false);
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
    </section>
  );
};

export default Hero;
