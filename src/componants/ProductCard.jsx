
import { useCart } from "../context/CartContext";
import CartProvider from "../context/CartContext";


export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="card text-center shadow-sm h-100">
            <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <h5>${product.price}</h5>

                <button
                    className="btn btn-primary mt-3"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}