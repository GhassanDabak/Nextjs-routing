import { useRouter } from "next/router";

export default function ProductSinglePage() {
  const router = useRouter();
  const {params=[]} = router.query
  console.log(params)

  if(params.length===1){
    return <h1>Showing {params[0]} page</h1>
  }
  if(params.length===2){
    return <h1>Showing {params[0]} and {params[1]} page</h1>
  }
  if(params.length===3){
    return <h1>Showing {params[0]} and {params[1]} and {params[2]} page</h1>
  }
  return <h1>Docs homepage</h1>;
}
