import Link from "next/link"

export default function ProductList() {
    const products = [1,2,3]
    return (
        <>
        {products.map(id=>{
            return(

        <h1 key={id}>
            <Link href={`/product/${id}`}>
            <a>Product {id}</a>
        </Link>
        </h1>
            )
        })}

        <Link href="/">
        <a>Home</a>
      </Link>
        </>
    )
  }
  