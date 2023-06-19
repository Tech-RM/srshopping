import { styled } from "styled-components";
import { ReactComponent as ShoppingSVG } from '../../assets/shopping-bag.svg';

export const ShoppingIconContainer=styled.div`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
position: relative;
width: 45px;
height: 45px;
`
export const ShoppingIcon=styled(ShoppingSVG)`
width: 24px;
height: 24px;
`
export const ItemCount=styled.span`
font-size: 10px;
font-weight: bold;
position: absolute;
bottom: 14px;
`