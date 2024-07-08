
import GTM from "@/components/GTM/GTM";
import Course from "@/components/molecules/Course/Course";
import { COURSES } from "@/data";

const Page = ({ params }) => {

  let course = COURSES.find(course => course.slug === params.courseSlug);

  return (
    <>
      <GTM />
      <Course course={course} />
    </>
  )
}

export default Page;