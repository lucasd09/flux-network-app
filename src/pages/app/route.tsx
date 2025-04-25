import { AppLayout } from "../../layout/app-layout"
import { ProtectedRoute } from "../../layout/protected-route"
import dashboardRoute from "./dashboard/route"
import projectsRoute from "./projects/route"

const appRoute = {
  path: '/app',
  element: <ProtectedRoute><AppLayout /></ProtectedRoute>,
  children: [
    dashboardRoute, projectsRoute
  ]
}

export default appRoute