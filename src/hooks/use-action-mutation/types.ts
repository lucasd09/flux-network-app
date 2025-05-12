import { QueryKey } from "@tanstack/react-query";
import { ActionResult } from "../../lib/types";

export type UseActionMutationOptions<TData, TVariables extends unknown[]> = {
  action: (...variables: TVariables) => Promise<ActionResult<TData>>;
  onSuccess?: (data: TData) => void;
  onSettled?: () => void;
  throwOnUndefined?: boolean;
  mutationKey?: QueryKey[];
};
