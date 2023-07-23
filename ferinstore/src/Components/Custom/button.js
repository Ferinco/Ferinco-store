import {styled} from 'styled-components'
export const Button = styled.button`
background-color: ${(props => (props.blue && '#05386b') || (props.transparent && 'transparent'))};
border: ${(props=>(props.border && '1px solid #05386b')|| '0')};
color: ${(props=>(props.blue && 'white')|| (props.transparent && '#05386b'))};;
`