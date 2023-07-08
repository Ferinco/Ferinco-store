import styled from "styled-components";
import { Icon } from '@iconify/react';
export default function ActionBar() {
    return(
        <ACTIONBAR>
          <Icon icon="ion:cart-sharp" className="icon" />
        </ACTIONBAR>
    )
}
const ACTIONBAR = styled.div `
 background-color: rgb(243, 255, 243);
border-radius: 10px;
height: 70px;
width: 100% !important;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;
justify-content: flex-end;
.icon{
    font-size: 45px;
    
}`