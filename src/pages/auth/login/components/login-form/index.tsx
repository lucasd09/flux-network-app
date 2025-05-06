import { Form } from "../../../../../components/form"
import { Input } from "../../../../../components/input"
import { Button } from "../../../../../components/button"
import { useZodForm } from "../../../../../hooks/use-zod-form"
import { LoginFormData, loginFormSchema } from "./types"
import { authService } from "../../../../../services/auth"

export const LoginForm = () => {
  const form = useZodForm({ schema: loginFormSchema })

  const handleSubmit = async (data: LoginFormData) => {
    const result = await authService.login(data)
  }

  return <Form form={form} onSubmit={handleSubmit} className="w-[420px]">
    <Input form={form} name='email' />
    <Input form={form} name="password" type="password" />
    <Button
      type="submit"
      className="w-full"
    >
      Sign up
    </Button>
  </Form>
}