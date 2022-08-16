import { useRouter } from "next/router";

export default function ProductSinglePage() {
  const router = useRouter();
  const { productid } = router.query;
  return <h1>Product Single Page {productid}</h1>;
}
