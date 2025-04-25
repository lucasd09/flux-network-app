import { Inbox, LayoutDashboard, LogOut } from "lucide-react"
import { Sidebar as BaseSidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from "../components/ui/sidebar"
import { useNavigate } from "react-router-dom"

const items = [
  {
    title: "Dashboard",
    url: "/app",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    url: "/app/projects",
    icon: Inbox,
  },
]

export const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <BaseSidebar className="select-none" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Flux Network</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild onClick={() => navigate(item.url)}>
                    <div>
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton onClick={() => navigate('/')}>
          <LogOut />
          Log out
        </SidebarMenuButton>
      </SidebarFooter>
    </BaseSidebar>
  )
}
