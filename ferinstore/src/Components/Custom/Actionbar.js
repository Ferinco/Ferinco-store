import styled from "styled-components";
import { Icon } from '@iconify/react';
export default function ActionBar() {
    return(
        <ACTIONBAR>
          <Icon icon="ion:cart-sharp" className="icon" />
          <Icon icon="iconamoon:profile-fill" color="gray" />
        </ACTIONBAR>
    )
}
const ACTIONBAR = styled.div `
background: #5cdb95;
border-radius: 10px;
height: 70px !important;
width: 100% !important;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;
justify-content: flex-end;
`