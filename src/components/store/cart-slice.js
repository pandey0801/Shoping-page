import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: [],
        totalQuantity:0,
        quantity: 0
    },
    reducers:{
        add:(state, action)=>{
            const newItem  = action.payload;
            const existingItem = state.items.find(item=> item.id === newItem.id) //// Check if the item already exists in the state by matching IDs
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id : newItem.id, 
                    price:newItem.price, 
                    quantity:1 , 
                    totalPrice:newItem.price,
                name: newItem.title});
            }
            else{     
                existingItem.quantity++;
                existingItem.totalPrice= existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart:(state, action)=>{
            const id = action.payload;
            const exitingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if(exitingItem.quantity === 1){
                state.items=state.items.filter(item=> item.id !== id);
            } else{
                exitingItem.quantity--;
                // exitingItem.totalPrice = exitingItem.totalPrice - exitingItem.price;
            }
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;
