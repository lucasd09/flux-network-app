import { Navigate, Outlet } from "react-router-dom"
import { Sidebar } from "./sidebar"
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"

export const AppLayout = () => {
  const token = localStorage.getItem('auth_token');

  if (!token) {
    return <Navigate to={'/login'} />
  }

  return <SidebarProvider>
    <Sidebar />
    <main>
      <SidebarTrigger />
      <Outlet />
    </main>
  </SidebarProvider>
}