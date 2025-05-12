import { Form } from "../../../../../components/form"
import { Input } from "../../../../../components/input"
import { Button } from "../../../../../components/button"
import { useZodForm } from "../../../../../hooks/use-zod-form"
import { loginFormSchema } from "./types"
import { useActionMutation } from "../../../../../hooks/use-action-mutation"
import { login } from "./actions"
import { useNavigate } from "react-router-dom"

export const LoginForm = () => {
  const form = useZodForm({ schema: loginFormSchema })

  const navigate = useNavigate();

  const { mutate, isPending } = useActionMutation({
    action: login, onSuccess: () => {
      navigate('/app')
    }
  })

  return <Form form={form} onSubmit={mutate} className="w-[420px]">
    <Input form={form} name='email' />
    <Input form={form} name="password" type="password" />
    <Button
      type="submit"
      className="w-full"
      isLoading={isPending}
    >
      Sign up
    </Button>
  </Form>
}