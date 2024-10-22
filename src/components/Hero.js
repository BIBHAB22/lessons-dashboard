// src/components/Hero.js
import React, { useState } from 'react';
import Tabs from './Tabs';
import SearchFilters from './Searchfilters';
import LessonList from './Lessonlist';
import { FaQuestionCircle } from 'react-icons/fa';

const Hero = () => {
  const [filter, setFilter] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [sortBy, setSortBy] = useState('closest');
  const [showAsList, setShowAsList] = useState(false);

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
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Lessons List */}
        <div className="mt-4">
          <LessonList
            filter={filter}
            searchTerm={searchTerm}
            selectedClass={selectedClass}
            selectedStatus={selectedStatus}
            sortBy={sortBy}
            showAsList={showAsList}
          />
        </div>
      </div>

      {/* Help Button */}
      <button
        className="fixed bottom-4 right-4 bg-[#FFEDD8] text-[#B35E01] p-3 rounded-md shadow-lg flex items-center gap-1"
      >
        <FaQuestionCircle size={20} />
        Help
      </button>
    </section>
  );
};

export default Hero;
