import React from "react"
import { useSelector } from "react-redux"
import Alert from "react-bootstrap/Alert"

const Notification = () => {
    const notification = useSelector((state) => state.notification)
    console.log(notification)
    if (notification === "") {
        return null
    }

    return (
        <div className="container success">
            {" "}
            {notification && <Alert variant="success">{notification}</Alert>}
        </div>
    )
}

export default Notification
