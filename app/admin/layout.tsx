"use client"

import HeaderAdmin from "./_components/header-admin"
import SidebarAdmin from "./_components/sidebar-admin"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarAdmin />
      <div className="h-screen flex-1 bg-[#F8F8F8] pb-20">
        <HeaderAdmin />
        <div className="h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}
