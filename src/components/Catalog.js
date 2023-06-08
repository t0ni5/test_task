import Item from "./Item"
import { useSelector } from "react-redux"
const Catalog = ({ handleItemAdding }) => {
    const items = useSelector((state) => state.items)
    return (
        <div className="catalog">
            {items.map((i) => (
                <Item key={i.id} item={i} handleItemAdding={handleItemAdding} />
            ))}
        </div>
    )
}

export default Catalog
