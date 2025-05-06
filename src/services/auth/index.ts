import { post } from "../../lib/api-client";
import { LoginFormData } from "../../pages/auth/login/components/login-form/types";
import { AuthResponse } from "./types";

export const authService = {
  login: async (data: LoginFormData) => {
    const result = await post<LoginFormData, AuthResponse>("auth/login", data);

    return result;
  },
  register: () => {},
};
