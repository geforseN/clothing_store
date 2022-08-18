import './button.style.scss'

const Button = (props: any) => {
  const {children, buttonType, ...otherProps}= props

  // TODO button type prop
  const buttonClassName =
    buttonType === 'google' ?  'google-sign-in' :
    buttonType === 'inverted' ? 'inverted' :
      ''

  return (
    <button
      className={`button-container ${buttonClassName}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;