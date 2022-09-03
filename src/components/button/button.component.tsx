import {ButtonHTMLAttributes, FC} from "react";

import {CustomButtons, CustomButtonsKeys} from "./button.types";


const Button: FC<ButtonProps> = ({children, buttonType, ...otherProps}) => {
  const CustomButton = CustomButtons[buttonType || "base"];

  return <CustomButton {...otherProps}>{children}</CustomButton>
};

export type ButtonProps = {
  buttonType?: CustomButtonsKeys
} & ButtonHTMLAttributes<HTMLButtonElement>


export default Button;

