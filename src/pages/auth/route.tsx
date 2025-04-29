import { AuthLayout } from "../../layout/auth-layout"
import loginRoute from "./login/route"
import registerRoute from "./register/route"

const authRoute = {
  element: <AuthLayout />,
  children: [
    loginRoute, registerRoute
  ]
}

export default authRoute