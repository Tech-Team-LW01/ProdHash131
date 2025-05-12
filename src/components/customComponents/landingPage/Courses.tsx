"use client";

import Image from "next/image";
import CourseCard from "./CourseCard";
import { courseInfo } from "../../../../data/courses/courses";
import curveLine from "@../../../public/assets/CurlLine.svg";
import Link from "next/link";
import { Course } from "../../../../types/courses";

// Define SimplifiedCourse type
type SimplifiedCourse = Pick<Course, '_id' | 'title' | 'category' | 'backgroundImage' | 'rating' | 'hours' | 'slug' | 'shortDescription'>;

export default function CoursesComponent() {
  // Simplify the course data
  const simplifiedCourses: SimplifiedCourse[] = courseInfo.map(course => ({
    _id: course._id,
    title: course.title,
    category: course.category,
    backgroundImage: course.backgroundImage,
    rating: course.rating,
    hours: course.hours,
    slug: course.slug,
    shortDescription: course.shortDescription
  }));

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-8" id="courses">
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="text-xs sm:text-sm text-muted-foreground mb-2 text-teal-500 font-semibold">
          POPULAR COURSES
        </h2>
        <h1 className="text-2xl sm:text-3xl font-bold">
          Choose From Our Top{" "}
          <span className="text-[#ff0000] relative">
            Courses
            <span className="absolute bottom-0 left-0 w-full h-1">
              <Image 
                src={curveLine} 
                alt="curve line" 
                className="w-full mb-4" 
                width={100}
                height={100}
                style={{ height: 'auto' }}
              />
            </span>
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-4 p-1 sm:p-2">
        {simplifiedCourses.slice(0, 5).map((course) => (
          <CourseCard 
            key={course._id} 
            course={course} 
          />
        ))}
      </div>

      <div className="text-center mt-6 sm:mt-10">
        <Link 
          className="bg-[#ff0000] px-4 py-2 sm:px-6 sm:py-3 cursor-pointer rounded-lg text-white text-sm sm:text-base hover:bg-red-600 transition-colors" 
          href="/courses" 
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}