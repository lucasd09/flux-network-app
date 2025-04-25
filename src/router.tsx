import { createBrowserRouter } from "react-router-dom"
import landingRoute from "./pages/landing/route"
import loginRoute from "./pages/auth/login/route"
import registerRoute from "./pages/auth/register/route"
import appRoute from "./pages/app/route"

const router = createBrowserRouter([
  landingRoute, loginRoute, registerRoute, appRoute
])

export default router