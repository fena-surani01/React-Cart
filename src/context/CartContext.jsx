import {  createContext , useContext ,useState ,useEffect} from "react";


const cartContext = createContext();

export default function CartProvider({children}){
    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem('cart')
        return stored ? JSON.parse(stored) : []
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(product){
        setCart((prev)=>{
            const existing = prev.find((item)=> item.id === product.id)

            if(existing)
            {
                return prev.map((item)=> item.id === product.id ? {...item ,qty : item.qty+1 } : item)
            }

            return(
                [...prev , {...product , qty : 1}]
            )
        })

    }

    function removeFromCart(id){
        setCart((prev) => prev.filter((item)=> item.id !== id))
    }

    function updateQty(id, qty) {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? {...item, qty} : item
            )
        )
    }

    const countTotal = cart.reduce((sum,item) => sum + item.price * item.qty , 0)


    return(
        <cartContext.Provider value={{cart,setCart, addToCart , removeFromCart , updateQty , countTotal}}>
            {children}
        </cartContext.Provider>
    )
}

// Custom Hook
export const useCart = ()=> useContext(cartContext)