import React from "react"
import Image from "next/image"
import { Calendar, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

const TutorInfo = () => {
  return (
    <div className="flex flex-1 justify-center gap-8 p-8">
      <div className="overflow-hidden rounded-lg p-4 shadow-lg">
        <Image
          src="/assets/avatar-tutor.png"
          alt="Avatar"
          width={400}
          height={400}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between border bg-white p-4 px-20 shadow-md">
        <p className="font-serif text-3xl">Mr. Albert Einstein</p>

        <div className="flex justify-between text-muted-foreground">
          <p className="flex items-center gap-4 font-sans text-xl">
            70 years old
          </p>
          <p className="flex items-center gap-4 font-sans text-xl">
            30 Years of experience
          </p>
        </div>

        <div className="flex justify-between text-muted-foreground">
          <p className="flex items-center gap-4 font-sans text-xl">
            <Phone /> 012.3456.789
          </p>
          <p className="flex items-center gap-4 font-sans text-xl">
            <Mail /> tutor@fpt.edu.vn
          </p>
        </div>

        <p className="flex items-center gap-4 font-sans text-xl font-semibold">
          <Calendar /> Monday Wednesday Friday (9:00 AM - 5:00 PM)
        </p>

        <div className="flex justify-between">
          <p className="flex items-center gap-4 font-sans text-xl font-semibold text-yellow-700">
            <span>Price: $7 / hour</span>
          </p>
          <Button variant={"primary"}>Contact</Button>
        </div>
      </div>
    </div>
  )
}

export default TutorInfo
