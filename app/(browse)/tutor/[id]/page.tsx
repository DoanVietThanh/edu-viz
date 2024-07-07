import { getTutor } from '@/actions/tutor/get-tutor'

import FeedbackList from './_components/feedback-list'
import TutorBreadcum from './_components/tutor-breadcrum'
import TutorComment from './_components/tutor-comment'
import TutorInfo from './_components/tutor-info'
import Footer from '@/components/footer'

type TutorDetailPageProps = {
  params: {
    id: string
  }
  searchParams: {
    subject: string
  }
}

const TutorDetailPage = async ({ params, searchParams }: TutorDetailPageProps) => {
  console.log({ params, searchParams })
  const tutorInfo = await getTutor(params.id)
  console.log('🚀 ~ TutorDetailPage ~ tutorInfo:', tutorInfo)

  if (!tutorInfo) {
    return null
  }
  return (
    <div>
      <div className='container my-4 flex flex-col gap-8'>
        <TutorBreadcum tutorName={tutorInfo.fullName} />
        <TutorInfo tutorInfo={tutorInfo} subjectName={searchParams.subject} />
        <TutorComment />
        <FeedbackList />
      </div>
      <Footer />
    </div>
  )
}

export default TutorDetailPage
