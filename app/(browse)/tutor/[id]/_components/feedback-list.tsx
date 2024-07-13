"use client"

import React, { useEffect, useState } from "react"
import { Edit, Trash } from "lucide-react"

import { getPackageFeedbacks } from "@/actions/package/get-feedbacks"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type FeedbackListProps = {
  selectedPackage: any
}

const FeedbackList = ({ selectedPackage }: FeedbackListProps) => {
  const [feedbacks, setFeedbacks] = useState<any[]>([])
  console.log("🚀 ~ FeedbackList ~ feedbacks:", feedbacks)

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const data = await getPackageFeedbacks(
        selectedPackage.id,
        selectedPackage.tutorId
      )
      setFeedbacks(data)
    }
    fetchFeedbacks()
  }, [selectedPackage])

  return (
    <div className="flex flex-col gap-4">
      {feedbacks?.map((feedbackItem: any, index: number) =>
        feedbackItem.feedback ? (
          <div
            key={index}
            className={`flex flex-col gap-2 rounded-2xl border p-4 shadow-lg hover:bg-slate-100`}
          >
            <div className="flex items-center justify-between gap-4 px-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/assets/avatar-student.jpg" alt="@shadcn" />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className="font-serif text-xl font-semibold">
                      {feedbackItem.student.fullName}
                    </div>
                    <div className="font-semibold">
                      {new Date(feedbackItem.feedback.createAt).toLocaleString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        }
                      )}
                    </div>
                  </div>
                  <div className="italic">
                    Ratings{" "}
                    {Array.from({
                      length: feedbackItem.feedback.value || 5,
                    }).map(() => "⭐️")}
                  </div>
                </div>
              </div>
              {/* <div className="flex items-center gap-4">
                <Edit className="mr-2 size-6" />
                <Trash className="size-6" />
              </div> */}
            </div>
            <div className="flex gap-4 p-4 font-medium">
              {feedbackItem?.feedback?.content}
            </div>
          </div>
        ) : null
      )}
    </div>
  )
}

export default FeedbackList
