// src/components/LessonList.js
import React from 'react';
import LessonCard from './Lessoncard';
import ListView from './ListView'; // Import ListView component

const lessons = [
  { date: '2024-10-21', className: 'Algebra I, Block A', topic: 'Solving multi-step equations', status: 'active', type: 'upcoming' },
  { date: '2024-10-24', className: 'Algebra I, Block A', topic: 'Solving multi-step equations', status: 'active', type: 'upcoming' },
  { date: '2024-10-14', className: 'Algebra I, Block A', topic: 'Recognizing relationships between information to correlation', status: 'draft', type: 'completed' },
  { date: '2024-10-20', className: 'Algebra I, Block A', topic: 'Recognizing relationships between information to correlation', status: 'draft', type: 'completed' },
  { date: '2024-11-17', className: 'Algebra I, Block A', topic: 'Recognizing relationships between information to correlation', status: 'draft', type: 'completed' },
  { date: '2024-10-11', className: 'Algebra I, Block A', topic: 'Understanding graphs', status: 'completed', type: 'completed' },
  // Add more lesson objects here...
];
const today = new Date();
// Utility function to get categorized lessons
const categorizeLessons = (lessons) => {
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay()); // Start of this week (Sunday)
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7); // End of this week (Saturday)

  // Start and end of next week (Sunday to Saturday)
  const startOfNextWeek = new Date(endOfWeek);
  startOfNextWeek.setDate(endOfWeek.getDate() ); // Start of next week (Sunday)
  const endOfNextWeek = new Date(startOfNextWeek);
  endOfNextWeek.setDate(startOfNextWeek.getDate() + 7); // End of next week (Saturday)

  // End of the next 30 days
  const endOf30Days = new Date(today);
  endOf30Days.setDate(today.getDate() + 30);


  const categorizedLessons = {
    today: [],
    thisWeek: [],
    nextWeek: [], // Add nextWeek category
    next30Days: [],
  };

  lessons.forEach((lesson) => {
    const lessonDate = new Date(lesson.date);
    
    // Check if the lesson is upcoming
    if (lesson.type === 'upcoming') {
      if (lessonDate.toDateString() === today.toDateString()) {
        categorizedLessons.today.push(lesson);
      } else if (lessonDate >= startOfWeek && lessonDate < endOfWeek) {
        categorizedLessons.thisWeek.push(lesson);
      } else if (lessonDate >= startOfNextWeek && lessonDate < endOfNextWeek) {
        categorizedLessons.nextWeek.push(lesson); // Categorize for next week
      } else if (lessonDate >= today && lessonDate < endOf30Days) {
        categorizedLessons.next30Days.push(lesson);
      }
    }
  });

  return categorizedLessons;
};

const LessonList = ({ filter, showAsList }) => {
  const categorizedLessons = categorizeLessons(lessons);

  return (
    <div className="space-y-4 ml-4">
      {/* Render lessons for Today, This Week, Next Week, and Next 30 Days only for Upcoming */}
      {filter === 'upcoming' && (
        <>
          {categorizedLessons.today.length > 0 && (
            <div>
              <h2 className="text-lg text-[#70748B] font-bold">TODAY</h2>
              {showAsList ? (
                <ListView lessons={categorizedLessons.today} />
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categorizedLessons.today.map((lesson, index) => (
                    <LessonCard key={index} {...lesson} />
                  ))}
                </div>
              )}
            </div>
          )}

          {categorizedLessons.thisWeek.length > 0 && (
            <div>
              <h2 className="text-lg text-[#70748B] font-bold">THIS WEEK</h2>
              {showAsList ? (
                <ListView lessons={categorizedLessons.thisWeek} />
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categorizedLessons.thisWeek.map((lesson, index) => (
                    <LessonCard key={index} {...lesson} />
                  ))}
                </div>
              )}
            </div>
          )}

          {categorizedLessons.nextWeek.length > 0 && ( // Render Next Week lessons
            <div>
              <h2 className="text-lg text-[#70748B] font-bold">NEXT WEEK</h2>
              {showAsList ? (
                <ListView lessons={categorizedLessons.nextWeek} />
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categorizedLessons.nextWeek.map((lesson, index) => (
                    <LessonCard key={index} {...lesson} />
                  ))}
                </div>
              )}
            </div>
          )}

          {categorizedLessons.next30Days.length > 0 && (
            <div>
              <h2 className="text-lg text-[#70748B] font-bold ">NEXT 30 DAYS</h2>
              {showAsList ? (
                <ListView lessons={categorizedLessons.next30Days} />
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categorizedLessons.next30Days.map((lesson, index) => (
                    <LessonCard key={index} {...lesson} />
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Render Completed Lessons only when filter is 'completed' */}
      {filter === 'completed' && (
        <div>
          <h2 className="text-lg font-bold">Completed Lessons</h2>
          {showAsList ? (
            <ListView lessons={lessons.filter(lesson => lesson.type === 'completed')} />
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lessons
                .filter(lesson => lesson.type === 'completed')
                .map((lesson, index) => (
                  <LessonCard key={index} {...lesson} />
              ))}
            </div>
          )}
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
