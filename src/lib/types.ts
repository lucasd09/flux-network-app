export type Nullable<T> = { [key in keyof T]: T[key] | null };

export type OmitMerge<T, K extends object> = Omit<T, keyof K> & K;
