import styled from "styled-components";
import React, { useState } from 'react'
import { Button } from "../Custom/button";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { toggleModal } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
export default function CartModal(props) {
const [quantity, setQuantity] = useState(1)
const dispatch = useDispatch()
const isCartOpen = useSelector((state)=> state.cart)
const handleAddItem =()=>{
    dispatch(addItem({...props, quantity}))
} 
const closeModal = ()=>{
    dispatch(toggleModal(false))
}
  return (
    <Wrapper className="d-flex p-3 flex-column justify-content-between">
        <div className="d-flex flex-row align-items-center justify-content-between">
            <div className="image">
                <img src={props.image}/>
            </div>
            <div>
<div className="d-flex flex-row gap-3 cart-field">
    <button onClick={()=> setQuantity( quantity-1)}>-</button>
    <div>{quantity}</div>
    <button onClick={()=> setQuantity( quantity+1)}>+</button>
</div>
            </div>
            <div></div>
        </div>
        <div className="buttons d-flex justify-content-between">
            <Button onClick={closeModal}>CONTINUE SHOPPING</Button>
            <Button onClick={handleAddItem}>ADD ITEMS TO CART</Button>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
width: 400px;
height: 400px;
/* position: absolute !important; */
border: 1px solid red;
background-color: white;
border-radius: 10px;
.image{
    width: 180px;
    height: 300px;
    background-color: #f1f1f1;
    border-radius: 10px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
`
