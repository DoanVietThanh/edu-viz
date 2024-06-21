import FeedbackList from './feedback-list'
import TutorBreadcum from './tutor-breadcrum'
import TutorComment from './tutor-comment'
import TutorInfo from './tutor-info'
const TutorDetailPage = () => {
  return (
    <div className='container my-4 flex flex-col gap-8'>
      <TutorBreadcum />
      <TutorInfo />
      <TutorComment />
      <FeedbackList />
    </div>
  )
}

export default TutorDetailPage
