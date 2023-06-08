import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        initializeItems(state, action) {
            return (state = action.payload)
        },
    },
})

export const { initializeItems } = itemSlice.actions
export default itemSlice.reducer
