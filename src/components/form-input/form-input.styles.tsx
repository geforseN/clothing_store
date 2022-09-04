import styled, {css} from "styled-components";

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`

export const FormInputGroup = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`

type FormInputLabelProps = {
  shrink?: boolean
}

export const InputLabel = styled.label<FormInputLabelProps>`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({shrink}) => shrink && shrinkLabelStyles};
`

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px 10px 10px 5px;
  margin: 25px 0;
  background: white none;
  
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  
  color: ${subColor};
  font-size: 18px;
  
  &:focus {
    //outline: none;
  }
  
  &:focus ~ ${InputLabel} {
    ${shrinkLabelStyles};
  }
`

