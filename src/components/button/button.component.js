import './button.styles.scss';

const BUTTON_TYPPE_CLASSES={
    google: 'google-button',
    inverted: 'inverted'
}


const Button=({children, buttonType, ...otherProps})=>{
    return <button className={`${BUTTON_TYPPE_CLASSES[buttonType]} button-container`} {...otherProps}>{children}</button>
}
export default Button;