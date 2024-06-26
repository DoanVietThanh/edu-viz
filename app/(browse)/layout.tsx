import Footer from '@/components/footer'
import Header from '@/components/header'

export default function BrowseLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <Header />
      <div className='flex-1 flex flex-col'>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}
