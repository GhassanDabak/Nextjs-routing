import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Home() {
  const router= useRouter()
  const handleClick =()=>{
    console.log("Order placed")
    router.push('/docs/feature1')
  }
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <button onClick={handleClick}>
        Place order
      </button>
    </>
  );
}
