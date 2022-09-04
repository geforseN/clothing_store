import {ButtonHTMLAttributes, FC} from "react";

import {CustomButtons, CustomButtonsKeys} from "./button.types";


const Button: FC<ButtonProps> = ({children, styleType, ...otherProps}) => {
  const CustomButton = CustomButtons[styleType || "base"];

  return <CustomButton {...otherProps}>{children}</CustomButton>
};

export type ButtonProps = {
  styleType?: CustomButtonsKeys
} & ButtonHTMLAttributes<HTMLButtonElement>


export default Button;

