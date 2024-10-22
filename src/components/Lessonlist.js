// src/components/LessonList.js
import React from "react";
import LessonCard from "./Lessoncard";
import ListView from "./ListView"; // Import ListView component
import ErrorPage from './ErrorPage'; 
import NoUpcomingLessons from './NoUpcomingLessons';

const lessons = [
  { date: '2024-10-21', className: 'Algebra I, Block A', topic: 'Solving multi-step equations', status: 'active', type: 'upcoming' },
  { date: '2024-10-28', className: 'Algebra I, Block A', topic: 'Recognizing relationships between information to correlation', status: 'draft', type: 'upcoming' },
  { date: '2024-10-15', className: 'Algebra I, Block A', topic: 'Understanding graphs', status: 'completed', type: 'completed' },
  // Add more lesson objects here...
];

const today = new Date();

// Utility function to get categorized lessons
const categorizeLessons = (lessons) => {
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);

  const startOfNextWeek = new Date(endOfWeek);
  startOfNextWeek.setDate(endOfWeek.getDate());
  const endOfNextWeek = new Date(startOfNextWeek);
  endOfNextWeek.setDate(startOfNextWeek.getDate() + 7);

  const endOf30Days = new Date(today);
  endOf30Days.setDate(today.getDate() + 30);

  const categorizedLessons = {
    today: [],
    thisWeek: [],
    nextWeek: [],
    next30Days: [],
  };

  lessons.forEach((lesson) => {
    const lessonDate = new Date(lesson.date);

    if (lesson.type === "upcoming") {
      if (lessonDate.toDateString() === today.toDateString()) {
        categorizedLessons.today.push(lesson);
      } else if (lessonDate >= startOfWeek && lessonDate < endOfWeek) {
        categorizedLessons.thisWeek.push(lesson);
      } else if (lessonDate >= startOfNextWeek && lessonDate < endOfNextWeek) {
        categorizedLessons.nextWeek.push(lesson);
      } else if (lessonDate >= today && lessonDate < endOf30Days) {
        categorizedLessons.next30Days.push(lesson);
      }
    }
  });

  return categorizedLessons;
};

// Utility function to filter lessons based on search term, selected class, and status
const filterLessons = (lessons, searchTerm, selectedClass, selectedStatus) => {
  return lessons.filter((lesson) => {
    // Check if the search term matches either topic or className
    const matchesSearchTerm =
      lesson.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.className.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Check if the selected class matches the lesson's className or is empty (all classes)
    const matchesClass = selectedClass ? lesson.className === selectedClass : true;
    
    // Check if the selected status matches the lesson's status or is empty (all statuses)
    const matchesStatus = selectedStatus ? lesson.status === selectedStatus : true;

    // Return true if all conditions are met
    return matchesSearchTerm && matchesClass && matchesStatus;
  });
};


// Utility function to sort lessons based on sortBy value
const sortLessons = (lessons, sortBy) => {
  return lessons.sort((a, b) => {
    if (sortBy === "closest") {
      return new Date(a.date) - new Date(b.date);
    }
    if (sortBy === "furthest") {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortBy === "a-z") {
      return a.topic.localeCompare(b.topic);
    }
    if (sortBy === "z-a") {
      return b.topic.localeCompare(a.topic);
    }
    return 0;
  });
};

const LessonList = ({
  filter,
  showAsList,
  searchTerm,
  selectedClass,
  selectedStatus,
  sortBy,
}) => {
  const filteredLessons = filterLessons(
    lessons,
    searchTerm,
    selectedClass,
    selectedStatus
  );
  const sortedLessons = sortLessons(filteredLessons, sortBy);
  const categorizedLessons = categorizeLessons(sortedLessons);

  return (
    <div className="space-y-4 ml-4">
      {filter === "upcoming" && (
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

          {categorizedLessons.nextWeek.length > 0 && (
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
              <h2 className="text-lg text-[#70748B] font-bold ">
                NEXT 30 DAYS
              </h2>
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
          {Object.values(categorizedLessons).every(category => category.length === 0) && <NoUpcomingLessons />}
        </>
      )}

      

      {filter === "completed" && (
        <div>
          <h2 className="text-lg font-bold">Completed Lessons</h2>
          {showAsList ? (
            <ListView
              lessons={sortedLessons.filter(
                (lesson) => lesson.type === "completed"
              )}
            />
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sortedLessons
                .filter((lesson) => lesson.type === "completed")
                .map((lesson, index) => (
                  <LessonCard key={index} {...lesson} />
                ))}
            </div>
          )}
        </div>
      )}

      {filter === "upcoming" &&
        Object.values(categorizedLessons).every(
          (category) => category.length === 0
        ) &&  <ErrorPage message="Check your spelling or try a different Phrase." />}

      {filter === "completed" &&
        sortedLessons.filter((lesson) => lesson.type === "completed").length ===
          0 &&  <ErrorPage message="Check your spelling or try a different Phrase." />}
    </div>
  );
};

export default LessonList;
