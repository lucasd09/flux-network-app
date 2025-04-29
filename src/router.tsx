import { createBrowserRouter } from "react-router-dom"
import landingRoute from "./pages/landing/route"
import appRoute from "./pages/app/route"
import authRoute from "./pages/auth/route"

const router = createBrowserRouter([
  landingRoute, authRoute, appRoute
])

export default router