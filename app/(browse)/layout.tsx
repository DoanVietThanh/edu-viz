import Footer from '@/components/footer'
import Header from '@/components/header'

export default function BrowseLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='relative'>
      <Header />
      <div className='flex flex-col h-screen pt-20'>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}
