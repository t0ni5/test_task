import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: "notification",
    initialState: "",
    reducers: {
        showNotification(state, action) {
            const content = action.payload
            return (state = content)
        },
        hideNotification(state, action) {
            return (state = "")
        },
    },
})

export const { showNotification, hideNotification } = notificationSlice.actions
export default notificationSlice.reducer
