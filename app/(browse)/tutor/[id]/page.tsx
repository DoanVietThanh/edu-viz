import { getTutor } from '@/actions/tutor/get-tutor'

import TutorBreadcum from './_components/tutor-breadcrum'
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
  const tutorInfo = await getTutor(params.id)

  if (!tutorInfo) {
    return null
  }
  return (
    <div>
      <div className='container my-4 flex flex-col gap-8'>
        <TutorBreadcum tutorName={tutorInfo.fullName} />
        <TutorInfo tutorInfo={tutorInfo} subjectName={searchParams.subject} />
      </div>
      <Footer />
    </div>
  )
}

export default TutorDetailPage
