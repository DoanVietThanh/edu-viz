'use client'
import React, { useState } from 'react'

import CourseList from '@/components/course-list'
import { Button } from '@/components/ui/button'
import { fieldCourses, moreFieldCourses } from '@/shared/field-courses-dummy'

const FieldCourse = () => {
  const dummyData = fieldCourses
  const moreDummyData = moreFieldCourses
  const [isMore, setIsMore] = useState(false)

  return (
    <div>
      {dummyData?.map((item) => (
        <CourseList courseId={item.id} key={item.id} title={item.nameCourse} tutors={item.tutors} />
      ))}

      {isMore &&
        moreDummyData?.map((item) => (
          <CourseList courseId={item.id} key={item.id} title={item.nameCourse} tutors={item.tutors} />
        ))}
      <div className='flex justify-center my-8'>
        <Button variant='default' onClick={() => setIsMore(!isMore)}>
          {!isMore ? 'Xem thêm' : 'Thu gọn'}
        </Button>
      </div>
    </div>
  )
}

export default FieldCourse
