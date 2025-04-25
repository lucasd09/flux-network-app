import { Outlet } from "react-router-dom"
import { Sidebar } from "./sidebar"
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"

export const AppLayout = () => {
  return <SidebarProvider>
    <Sidebar />
    <main>
      <SidebarTrigger />
      <Outlet />
    </main>
  </SidebarProvider>
}