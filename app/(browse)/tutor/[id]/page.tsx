import FeedbackList from './feedback-list'
import TutorBreadcum from './tutor-breadcrum'
import TutorComment from './tutor-comment'
import TutorInfo from './tutor-info'

import Footer from '@/components/footer'

const TutorDetailPage = () => {
  return (
    <div>
      <div className='container my-4 flex flex-col gap-8'>
        <TutorBreadcum />
        <TutorInfo />
        <TutorComment />
        <FeedbackList />
      </div>
      <Footer />
    </div>
  )
}

export default TutorDetailPage
