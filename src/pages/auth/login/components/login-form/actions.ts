import { ActionResult } from "../../../../../lib/types";
import { authService } from "../../../../../services/auth";
import { AuthResponse } from "../../../../../services/auth/types";
import { LoginFormData } from "./types";

export const login = async (
  data: LoginFormData,
): Promise<ActionResult<AuthResponse>> => {
  try {
    const result = await authService.login(data);

    localStorage.setItem("auth_token", result.accessToken);
    localStorage.setItem("payload", JSON.stringify(result.payload));

    return { success: true, data: result };
  } catch (error) {
    return { success: false, error };
  }
};
