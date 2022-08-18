import './form-input.style.scss';
import {ChangeEventHandler} from "react";

const FormInput = (props: FormInputProps) => {
  const {label, ...otherProps} = props

  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 
              'shrink' :
              ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};


export interface FormInputProps {
  label: string
  type: string
  required: boolean
  onChange: ChangeEventHandler
  name: string
  value: string
}


export default FormInput;