import React from 'react'

import Banner from './_components/banner'
import FieldCourse from './_components/field-course'
import RecommendStudents from './_components/recommend-students'
import RecommendTutors from './_components/recommend-tutors'
import Footer from '@/components/footer'

const HomePage = () => {
  return (
    <div>
      <div className='container'>
        <Banner />
        <RecommendStudents />
        <RecommendTutors />
        <FieldCourse />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
