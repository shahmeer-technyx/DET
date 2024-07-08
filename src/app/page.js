
import CourseList from '@/components/CourseList';
import GTM from '@/components/GTM/GTM';
import { COURSES } from '@/data';

export default function Page() {
  return (
    <>
      <GTM />
      <CourseList courses={COURSES} />
    </>
  )
};