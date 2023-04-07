import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers:{
        // These reducers are pure functions. Mean yay function
        //  kay baahir ka data change nhi krty hein
        add(state, action){
            state.push(action.payload)
        },
        remove(state, action){
            return state.filter(item => item.id !== action.payload)
        }
    }
})

export const { add,remove } = cartSlice.actions;
export default cartSlice.reducer;