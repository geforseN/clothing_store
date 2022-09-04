import {InputHTMLAttributes, FC} from "react";

import {FormInputGroup, InputLabel, Input} from "./form-input.styles";


const FormInput: FC<FormInputProps> = (
  {label, ...otherProps}
) => (
  <FormInputGroup>
    <Input {...otherProps} />
    {label && (
      <InputLabel shrink={typeof otherProps.value === 'string' && !!otherProps.value.length}>
        {label}
      </InputLabel>
    )}
  </FormInputGroup>
);


export type FormInputProps = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>


export default FormInput;