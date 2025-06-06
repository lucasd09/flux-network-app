import { InputHTMLAttributes } from "react";
import { FieldValues } from "react-hook-form";
import { InputDefaultProps } from "../form/types";
import { OmitMerge } from "../../lib/types";

export type InputProps<TForm extends FieldValues> = OmitMerge<
  InputHTMLAttributes<HTMLInputElement>,
  InputDefaultProps<TForm>
> & {
  label?: string;
};

export type InputRef = HTMLInputElement;
