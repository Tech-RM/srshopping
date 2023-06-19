import { BaseButton, GoogleButton, InvertedButton } from "./button.styles";


export const BUTTON_TYPPE_CLASSES={
    base:'base',
    google: 'google-button',
    inverted: 'inverted'
};

const getButtonType=(buttonType=BUTTON_TYPPE_CLASSES.base)=>(
    {
        [BUTTON_TYPPE_CLASSES.base]:BaseButton,
        [BUTTON_TYPPE_CLASSES.google]:GoogleButton,
        [BUTTON_TYPPE_CLASSES.inverted]:InvertedButton,
    }[buttonType]);


const Button=({children, buttonType, ...otherProps})=>{
    const CustomButton=getButtonType(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>
}
export default Button;