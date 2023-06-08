import { useSelector } from "react-redux"
import Item from "./Item"
import CartItem from "./CartItem"
import Button from "react-bootstrap/Button"

const Cart = () => {
    const cartItems = useSelector((state) => state.cart)
    const calculateTotal = () => {
        let total = 0
        cartItems.forEach(
            (item) => (total = total + item.price * item.quantity)
        )
        return total
    }

    const h2Style = {
        textAlign: "center",
    }

    return (
        <div>
            {cartItems.length === 0 ? (
                <h2 style={h2Style}>Your cart is empty</h2>
            ) : null}
            <div className="cart">
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
                <div className="checkout">
                    {" "}
                    <h2>Total: {calculateTotal()}$</h2>
                    <Button
                        variant="success"
                        onClick={() => console.log("checkout page")}
                    >
                        CHECKOUT
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Cart
