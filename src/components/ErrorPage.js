import React from 'react';
import { FaSearch } from 'react-icons/fa';

const ErrorPage = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center">
        <FaSearch className="text-2xl mb-4" />
      <h1 className="text-md text-gray-500 mb-1">There are no results that fit</h1>
      <p className="text-gray-500">{message}</p>
    </div>
  );
};

export default ErrorPage;
