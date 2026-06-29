import {useCart} from '../context/CartContext'

export default function CartComp(){
        const {cart,setCart, addToCart , removeFromCart , updateQty , countTotal} = useCart()

        return(
            <div>
                <h3 className="mb-3">Your Cart</h3>
                {
                  cart.length === 0 ? 
                    (
                        <div className='alert alert-info'> Your Cart Is Empty !!</div>
                    ) 
                    
                    : (
                        <>
                            <table className="table table-bordered align-middle text-center">
                                <thead className="table-light">
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Subtotal</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    
                                    {
                                        cart.map((item) =>(
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>${item.price}</td>
                                                <td>
                                                    <input type='number' min='1' value={item.qty}
                                                        onChange={(e)=> updateQty(item.id,Number(e.target.value))} 
                                                    />
                                                </td>
                                                <td>${item.price * item.qty}</td>
                                                <td>
                                                    <button className="btn btn-danger btn-sm"
                                                        onClick={() => removeFromCart(item.id)}

                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>

                                        ) )
                                    }
                                </tbody>
                            </table>

                            <div className="text-end">
                                <h4>Total: <strong>${countTotal.toFixed()}</strong></h4>
                            </div>
                        </>
                    )
                }

            </div>
        )
}