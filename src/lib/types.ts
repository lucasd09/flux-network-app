export type Nullable<T> = { [key in keyof T]: T[key] | null };

export type OmitMerge<T, K extends object> = Omit<T, keyof K> & K;

export type ActionSuccessResult<T> = {
  success: true;
  data: T;
  message?: string;
};
export type ActionErrorResult = {
  success: false;
  error: unknown;
};
export type ActionResult<T = undefined> =
  | ActionSuccessResult<T>
  | ActionErrorResult;
