import PackageList from './package-list'
import { getSubjects } from '@/actions/subject/get-subjects'

const SubjectList = async () => {
  const subjects = await getSubjects()
  if (!subjects) return null

  return <div> {subjects?.map((subject: any) => <PackageList subjectName={subject.name} subject={subject} />)}</div>
}

export default SubjectList
