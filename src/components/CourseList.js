import Link from "next/link";

const CourseList = ({ courses }) => {
  return (
    <>
      <h1>Courses</h1>
      <ul>
        {courses.map((course, i) => (
          <li key={course.id}>
            <Link href={`/courses/${course.slug}`}><button>{i + 1}. {course.title} - {course.subTitle}</button></Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseList;