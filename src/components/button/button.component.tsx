import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";
import {CustomButtons, CustomButtonsKeys} from "./button.types";


const Button: FC<CustomButtonProps> = ({children, buttonType, ...otherProps}) => {
  const CustomButton = getCustomButton(buttonType);

  return (
    <CustomButton {...otherProps}>
      {children}
    </CustomButton>
  );
};

export interface RegularButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement>
{}

export interface CustomButtonProps extends RegularButtonProps {
  buttonType?: CustomButtonsKeys
}

const getCustomButton = (buttonType: CustomButtonsKeys = "base"): FC<RegularButtonProps> => {
  return CustomButtons[buttonType];
}

export default Button;

