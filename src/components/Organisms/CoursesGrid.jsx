import React from "react";
import CourseCard from "../Molecules/CourseCard";

const CoursesGrid = ({ courses }) => (
  <div className="ed-grid">
    <h1>Cursos</h1>
    <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
      {courses.map(course => (
        <CourseCard
          key={course.id}
          title={course.titulo}
          image={course.image}
          price={course.price}
          teacher={course.profesor}
        />
      ))}
    </div>
  </div>
);

export default CoursesGrid;
