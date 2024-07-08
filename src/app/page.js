
import CourseList from '@/components/CourseList';
import { COURSES } from '@/data';

export default function Page() {
  return (
    <>
      <CourseList courses={COURSES} />
    </>
  )
};