// src/components/Sidebar.js
import React from 'react';
import { FaBook, FaChalkboardTeacher, FaUsers, FaRegStickyNote, FaSearch, FaCog, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-[#F8F6F3] p-4 h-full min-h-screen">
      <div className="text-2xl font-bold mb-6">Soefia</div>
      <nav className="space-y-6">
        <a href="#lessons" className="flex flex-col items-center space-y-1 text-gray-700 hover:text-[#7b7eda]">
          <FaChalkboardTeacher className="text-2xl" />
          <span className="text-md">Lessons</span>
        </a>
        <a href="#classes" className="flex flex-col items-center space-y-1 text-gray-700 hover:text-[#7b7eda]">
          <FaBook className="text-2xl" />
          <span className="text-md">Classes</span>
        </a>
        <a href="#students" className="flex flex-col items-center space-y-1 text-gray-700 hover:text-[#7b7eda]">
          <FaUsers className="text-2xl" />
          <span className="text-md">Students</span>
        </a>
        <a href="#notebook" className="flex flex-col items-center space-y-1 text-gray-700 hover:text-[#7b7eda]">
          <FaRegStickyNote className="text-2xl" />
          <span className="text-md">Notebook</span>
        </a>
        
      </nav>
    </div>
  );
};

export default Sidebar;
