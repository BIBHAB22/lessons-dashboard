// src/components/LessonList.js
import React from 'react';
import LessonCard from './Lessoncard';

const lessons = [
  { date: '2024-10-21', className: 'Algebra I, Block A', topic: 'Solving multi-step equations', status: 'active', type: 'upcoming' },
  { date: '2024-10-20', className: 'Algebra I, Block A', topic: 'Recognizing relationships between information to correlation', status: 'draft', type: 'upcoming' },
  { date: '2024-10-15', className: 'Algebra I, Block A', topic: 'Understanding graphs', status: 'completed', type: 'completed' },
  // Add more lesson objects here...
];

// Utility function to get categorized lessons
const categorizeLessons = (lessons) => {
  const today = new Date();
  const startOfWeek = new Date();
  startOfWeek.setDate(today.getDate() - today.getDay());
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  const categorizedLessons = {
    today: [],
    thisWeek: [],
    thisMonth: [],
  };

  lessons.forEach((lesson) => {
    const lessonDate = new Date(lesson.date);
    
    // Check if the lesson is upcoming
    if (lesson.type === 'upcoming') {
      if (lessonDate.toDateString() === today.toDateString()) {
        categorizedLessons.today.push(lesson);
      } else if (lessonDate >= startOfWeek && lessonDate < startOfWeek.setDate(startOfWeek.getDate() + 7)) {
        categorizedLessons.thisWeek.push(lesson);
      } else if (lessonDate >= startOfMonth) {
        categorizedLessons.thisMonth.push(lesson);
      }
    }
  });

  return categorizedLessons;
};

const LessonList = ({ filter }) => {
  const categorizedLessons = categorizeLessons(lessons);

  return (
    <div className="ml-4 grid gap-4">
      {/* Render lessons for Today, This Week, and This Month only for Upcoming */}
      {filter === 'upcoming' && (
        <>
          {categorizedLessons.today.length > 0 && (
            <div>
              <h2 className="text-lg text-[#70748B] font-bold">Today</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categorizedLessons.today.map((lesson, index) => (
                  <LessonCard key={index} {...lesson} />
                ))}
              </div>
            </div>
          )}

          {categorizedLessons.thisWeek.length > 0 && (
            <div>
              <h2 className="text-lg text-[#70748B] font-bold">This Week</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categorizedLessons.thisWeek.map((lesson, index) => (
                  <LessonCard key={index} {...lesson} />
                ))}
              </div>
            </div>
          )}

          {categorizedLessons.thisMonth.length > 0 && (
            <div>
              <h2 className="text-lg text-[#70748B] font-bold">This Month</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categorizedLessons.thisMonth.map((lesson, index) => (
                  <LessonCard key={index} {...lesson} />
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Render Completed Lessons only when filter is 'completed' */}
      {filter === 'completed' && (
        <div>
          <h2 className="text-lg font-bold">Completed Lessons</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {lessons
              .filter(lesson => lesson.type === 'completed')
              .map((lesson, index) => (
                <LessonCard key={index} {...lesson} />
            ))}
          </div>
        </div>
      )}

      {/* Message if no upcoming lessons are found */}
      {filter === 'upcoming' && Object.values(categorizedLessons).every(category => category.length === 0) && (
        <p className="text-gray-500">No upcoming lessons found.</p>
      )}

      {/* Message if no completed lessons are found */}
      {filter === 'completed' && lessons.filter(lesson => lesson.type === 'completed').length === 0 && (
        <p className="text-gray-500">No completed lessons found.</p>
      )}
    </div>
  );
};

export default LessonList;
