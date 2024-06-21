import React from 'react'

import Banner from './_components/banner'
import FieldCourse from './_components/field-course'
import RecommendStudents from './_components/recommend-students'
import RecommendTutors from './_components/recommend-tutors'

const HomePage = () => {
  return (
    <div className='container'>
      <Banner />
      <RecommendStudents />
      <RecommendTutors />
      <FieldCourse />
    </div>
  )
}

export default HomePage
