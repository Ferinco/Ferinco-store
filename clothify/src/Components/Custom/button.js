import {styled} from 'styled-components'
export const Button = styled.button`
background-color: ${(props => (props.black && 'black') || (props.transparent && 'transparent'))};
border: 1px solid black;
color: ${(props=>(props.black && 'white')|| (props.transparent && 'black'))};;
padding: 5px 25px;
border-radius: 20px;
font-size: 14px;
    font-weight: 600;
    height: fit-content;
    width: fit-content;

`