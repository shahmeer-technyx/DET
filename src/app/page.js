"use client";

import CourseList from '@/components/CourseList';
import GTM from '@/components/GTM/GTM';
import { COURSES } from '@/data';

export default function Page() {


  const handleSubmit = (event) => {
    event.preventDefault();
    dataLayer.push({
      'event': 'formSubmit',
      'formId': 'contactForm'
    });
  }
  return (
    <>
      <GTM />
      <CourseList courses={COURSES} />
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
};