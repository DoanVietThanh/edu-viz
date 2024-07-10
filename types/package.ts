export type PackageType = {
  id: string
  subjectId: string
  tutorId: string
  pricePerHour: 300
  images: []
  video: null
  status: "Active" | "Pending"
  createdAt: string
  subject: {
    id: string
    name: string
    image: string
    description: string
  }
  tutor: {
    id: string
    roleId: string
    clerkId: string
    email: string
    fullName: string
    avatar: string
    hubIds: []
    balance: number
    lockPayment: boolean
    tutor: {
      isAvailable: boolean
      automaticGreeting: string
      bio: string | null
      album: any[]
    }
  }
  totalReservations: number
  averageFeedbacksValue: number
}
