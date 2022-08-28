import {BaseButton, GoogleSignInButton, InvetedButton} from "./button.styles";

export const CustomButtons = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: InvetedButton,
}

export type CustomButtonsKeys = keyof typeof CustomButtons
