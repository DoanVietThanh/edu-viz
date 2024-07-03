import Header from "@/components/header"

export default function BrowseLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative">
      <Header />
      <div className="flex h-screen flex-col pt-20">{children}</div>
    </div>
  )
}
