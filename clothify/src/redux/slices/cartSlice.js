import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isCartOpen: false,
        modalOpen: false,
        cartItems: [],
        
    }, 
    reducers: {
        toggleCart(state, action){
            state.isCartOpen = action.payload
        },
        toggleModal (state, action){
state.modalOpen = action.payload
        },
        addItem(state, action){
            console.log(action.payload)
            const newItem = action.payload.id;
            const existingItem = state.cartItems.find(item => item.id === newItem)
            if (existingItem){
                existingItem.quantity++;
            }
            else {
                state.cartItems.push(action.payload)
            }
        },
        removeItem(state, action){
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        increaseItem(state, action){
            state.cartItems.map(item =>{
                if (item.id === action.payload) {
                    item.quantity++;
                }
                return item;
            })
        },
        decreaseItem(state, action){
            state.cartItems.map(item =>{
                if (item.id === action.payload) {
                    item.quantity++
                }
                return item
            })
        }
    }
})
export const {toggleCart, addItem, removeItem, increaseItem, decreaseItem, toggleModal} = cartSlice.actions
export default cartSlice.reducer;