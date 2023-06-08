import { Button } from "react-bootstrap"

const Item = ({ item, handleItemAdding }) => {
    return (
        <div className="item">
            <div className="image">
                <img src={item.img} alt="" />
            </div>
            <div className="details">
                <p>{item.name}</p>
                <p>
                    {" "}
                    <span style={{ fontWeight: "bold" }}>{item.price}$ </span>
                </p>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={() => handleItemAdding(item)}
                >
                    Add to cart
                </Button>
            </div>
        </div>
    )
}

export default Item
