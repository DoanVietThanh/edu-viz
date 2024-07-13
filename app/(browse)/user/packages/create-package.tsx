"use client"

import { useEffect, useState, useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { PlusCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { createPackage } from "@/actions/package/create-package"
import { getSubjects } from "@/actions/subject/get-subjects"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  subjectId: z.string().min(1, { message: "Subject is required" }),
  images: z.array(z.string()).catch([]),
  video: z.string().catch(""),
  pricePerHour: z
    .number()
    .int()
    .min(50)
    .max(500)
    .transform((data) => data - (data % 50)),
})

const CreatePackage = () => {
  const [subjects, setSubjects] = useState<any>(null)
  const [isLoadingSubject, startGetSubject] = useTransition()
  const [isCreatePackageLoading, startCreatePackage] = useTransition()
  const [isShowForm, setIsShowForm] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subjectId: "",
      images: [],
      video: "",
      pricePerHour: 50,
    },
  })

  useEffect(() => {
    startGetSubject(async () => {
      await getSubjects()
        .then((data) => {
          setSubjects(data)
        })
        .catch((error) => {
          console.log(error)
        })
    })
    form.reset()
  }, [form])

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startCreatePackage(async () => {
      await createPackage(values)
        .then(() => {
          toast.success("Create package successfully")
          form.reset()
          setIsShowForm(false)
        })
        .catch((error) => {
          console.log("🚀 ~ startCreatePackage ~ error:", error)
          toast.error(error.message || "Package already exists")
        })
    })
  }

  if (!subjects || isLoadingSubject) return "Loading..."

  return (
    <Dialog open={isShowForm} onOpenChange={setIsShowForm}>
      <Button asChild variant={"primary"} className="flex gap-2">
        <DialogTrigger>
          <PlusCircle size={18} /> Create
        </DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new package</DialogTitle>
          <DialogDescription>
            Date {new Date().toLocaleDateString()}
          </DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="subjectId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects?.map((subject: any) => (
                            <SelectItem key={subject.id} value={subject.id}>
                              {subject.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Images</FormLabel>
                    <FormControl>
                      <Input placeholder="URL Image" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="video"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video</FormLabel>
                    <FormControl>
                      <Input placeholder="Video link" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pricePerHour"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price per hour</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        min={50}
                        max={500}
                        value={field.value || ""}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
                        placeholder="Enter price per hour"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant={"primary"}
                  disabled={isCreatePackageLoading}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default CreatePackage
