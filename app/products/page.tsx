import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function fetchData() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return data.products;
}

interface ProductType {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  rating: number;
}

const ProductList = async () => {
  const products = await fetchData();

  return (
    <>
      {/* Removed unnecessary h1 */}
      <div>
        <h1 className="text-3xl text-semibold text-center my-8">
          All Products
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 grid-cols-1  p-4 lg:p-0 container mx-auto">
        {products.map((product: ProductType) => (
          <Link href={`products/${product.id}`}>
            <Card
              className="overflow-hidden hover:shadow-xl transition"
              key={product.id}
            >
              {/* Card header */}
              <CardHeader className="p-0">
                <Image
                  className="h-[250px] w-full object-cover"
                  width="350"
                  height="150"
                  src={product.thumbnail}
                  alt={product.title}
                />
              </CardHeader>
              {/* Card content */}
              <CardContent>
                {/* Card title */}
                <CardTitle>
                  <div
                    title={`${product.title}`}
                    className={`text-2xl mt-4 truncate`}
                  >
                    {product.title}
                  </div>
                </CardTitle>
                {/* Card description and price combined */}
                <CardDescription>
                  <p
                    title={`${product.description}`}
                    className="text-sm py-4 truncate"
                  >
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <p className="text-xl text-orange-500 font-semibold">
                      ${product.price}
                    </p>
                    <p className="flex items-center">
                      <Star className="w-[18px] mr-2 text-yellow-500" />{" "}
                      {product.rating}
                    </p>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductList;
