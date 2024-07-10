import React from "react"

import Footer from "@/components/footer"

import Banner from "./_components/banner"
import RecommendStudents from "./_components/recommend-students"
import RecommendTutors from "./_components/recommend-tutors"
import SubjectList from "./_components/subject-list"

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <Banner />
        <RecommendStudents />
        <RecommendTutors />
        <SubjectList />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
