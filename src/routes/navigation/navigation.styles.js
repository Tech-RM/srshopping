import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer=styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`

export const LogoContainer=styled(Link)`
      height: 100%;
      width: 70px;
      padding: 10px 0px 10px 15px;
`

export const NavLinks=styled.div`
    width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
`
export const NavLink=styled(Link)`
        padding: 10px 15px;
        cursor: pointer;`