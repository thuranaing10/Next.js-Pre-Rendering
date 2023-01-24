import Link from "next/link";

function ProductList({products}){
    console.log(products);
    return (
        <div>
            <h1>Product List</h1>
            {
                products.map((product) => {
                    return (
                        
                        <div key={product.id}>
                            <Link href={`products/${product.id}`} passHref>
                                <h4>{product.id}. {product.title}</h4>
                            </Link>
                            <hr />
                        </div>
                       
                    )
                })
            }
        </div>
    )
}

export default ProductList;

export async function getStaticProps(){
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();

    return {
        props: {
            products: data
        }
    }
}