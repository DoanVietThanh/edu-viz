import { getTutor } from "@/actions/tutor/get-tutor"
import { getCurrentUser } from "@/actions/user/get-who-am-i"
import Footer from "@/components/footer"

import TutorBreadcum from "./_components/tutor-breadcrum"
import TutorInfo from "./_components/tutor-info"

type TutorDetailPageProps = {
  params: {
    id: string
  }
  searchParams: {
    subject: string
  }
}

const TutorDetailPage = async ({
  params,
  searchParams,
}: TutorDetailPageProps) => {
  const tutorInfo = await getTutor(params.id)
  const currentUser = await getCurrentUser()
  if (!tutorInfo) {
    return null
  }
  console.log("🚀 ~ TutorDetailPage ~ currentUser:", currentUser)
  return (
    <div>
      <div className="container my-4 flex flex-col gap-8">
        <TutorBreadcum tutorName={tutorInfo.fullName} />
        <TutorInfo tutorInfo={tutorInfo} subjectName={searchParams.subject} />
      </div>
      <Footer />
    </div>
  )
}

export default TutorDetailPage
