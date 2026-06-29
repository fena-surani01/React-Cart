import ProductCard from './ProductCard'

const products = [
    {id:1,name:"Phone",price : 30000},
    {id:2,name:"Tablet",price : 50000},
    {id:3,name:"TV",price : 80000},
    {id:4,name:"Laptop",price : 120000},
    {id:5,name:"Computer",price : 150000},
    {id:6,name:"Mouse",price : 800},
    {id:7,name:"KeyBoard",price : 1200},
    {id:8,name:"HeadPhone",price : 1500},

]

export default function ProductList(){
    return(
        <div className="row">   
                {
                    products.map((p)=>(
                        <div className="col-md-3 mb-4" key={p.id}>
                            <ProductCard product={p}/>
                        </div>
                    ))
                }
        </div>
    )
}