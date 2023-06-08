import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import "./styles/navbar.css"
import "./styles/item.css"
import "./styles/notification.css"
import "./styles/cart.css"
import { configureStore } from "@reduxjs/toolkit"
import itemReducer from "./reducers/itemReducer"
import cartReducer from "./reducers/cartReducer"
import { Provider } from "react-redux"
import notificationReducer from "./reducers/notificationReducer"

const store = configureStore({
    reducer: {
        items: itemReducer,
        cart: cartReducer,
        notification: notificationReducer,
    },
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
)
