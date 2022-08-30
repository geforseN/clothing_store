import {BaseButton, GoogleSignInButton, InvertedButton} from "./button.styles";


export const CustomButtons = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: InvertedButton,
}

export type CustomButtonsKeys = keyof typeof CustomButtons
