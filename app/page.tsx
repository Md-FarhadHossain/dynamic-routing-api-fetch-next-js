import Link from "next/link";
import ProductList from "./products/page";
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <main className="container mx-auto">
      Hello world
      {/* <ProductList /> */}
      <Link href='products'>
        <Button>Go to Products</Button>
      </Link>
    </main>
  )
}
