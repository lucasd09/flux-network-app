export type AuthResponse = {
  payload: {
    companyId: number;
    userId: number;
    email: string;
    exp: number;
  };
  accessToken: string;
};
