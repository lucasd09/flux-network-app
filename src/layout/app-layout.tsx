import { Outlet } from "react-router-dom"
import { Sidebar } from "./sidebar"

export const AppLayout = () => {
  return <div className="">
    <Sidebar />
    <Outlet />
  </div>
}