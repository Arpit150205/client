import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets.js';


const CourseSection = () => {
  
    const { allCourses } = useContext(AppContext)
    console.log(allCourses)
  return (
    <section className="py-20 px-6 md:px-16 lg:px-32 bg-white">

      {/* Heading Area */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Learn from the best
        </h2>

        <p className="mt-4 text-gray-600 text-sm md:text-lg leading-relaxed">
          Discover our top-rated courses across various categories. 
          From coding and design to business and wellness, 
          our courses are crafted to deliver real results.
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
        {/* Course Cards Here */}
         {allCourses?.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))} 
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <Link 
          to="/course-list" 
          onClick={() => scrollTo(0, 0)}
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
        >
          Show all courses
        </Link>
      </div>

    </section>
  )
}

export default CourseSection