"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Package, ShoppingBasket, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type ProductParams = {
  slug: string;
  product: string;
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
};

const page = ({ params }: { params: ProductParams }) => {
  const [products, setProducts] = useState<ProductParams | null>({
    slug: "",
    product: "",
    id: 0,
    title: "",
    thumbnail: "",
    description: "",
    price: 0,
    rating: 0,
    brand: "",
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://dummyjson.com/products/${params.product}`
      );

      const data = await res.json();

      console.log(data);

      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {products && (
        <>
          {/* <Image className="w" width={600} height={100} alt={products.title} src={products.thumbnail} />
          <h1>{products.title}</h1>
          <p>{products.description}</p>
          <p>${products.price}</p> */}
          {/* Add more details as needed */}

          <div className="flex lg:flex-row flex-col container mx-auto mt-16">
            {/* image */}
            <div>
              {!products.thumbnail ? (
                <>
                  <Skeleton className="h-[300px] w-[600px] rounded-lg" />
                </>
              ) : (
                <>
                  <Image
                    className="w-[600px] h-[300px] object-contain"
                    width={600}
                    height={100}
                    alt={products.title}
                    src={products.thumbnail}
                  />
                </>
              )}
            </div>

            {/* product description */}
            <div className="ms-8">
              <div className="">
                <h1 className="text-3xl">
                  {!products.title ? (
                    <>
                      <Skeleton className="h-[30px] w-[20rem]" />
                    </>
                  ) : (
                    products.title
                  )}
                </h1>
                <div className="flex items-center mt-6">
                  <div className="flex items-center text-lg">
                    {!products?.rating ? (
                      <>
                        <Skeleton className="h-[16px] w-[4rem]" />
                      </>
                    ) : (
                      <>
                        {" "}
                        <Star className="w-[20px] mr-2 " />
                        {products?.rating}
                      </>
                    )}
                  </div>

                  <span className="px-4">
                    {products?.rating ? (
                      <>|</>
                    ) : (
                      <>
                        <Skeleton className="w-[5px]" />
                      </>
                    )}
                  </span>

                  <div className="text-lg">
                    {" "}
                    {!products?.brand ? (
                      <>
                        <Skeleton className="h-[16px] w-[5rem]" />
                      </>
                    ) : (
                      <>Brand: {products?.brand}</>
                    )}
                  </div>
                </div>

                {/* description */}
                <div className="mt-4">
                  <div>
                    {!products.description ? (
                      <>
                        <Skeleton className="h-[16px] w-[15rem]" />
                        <Skeleton className="h-[16px] w-[10rem] mt-2" />
                      </>
                    ) : (
                      products.description
                    )}
                  </div>
                </div>

                {/* price */}
                <div>
                  <div className="text-3xl font-semibold text-orange-500 mt-6">
                    {!products.price ? (
                      <>
                        <Skeleton className="h-[30px] w-[8rem]" />
                      </>
                    ) : (
                      <>${products?.price}</>
                    )}
                  </div>
                </div>
              </div>

              {/* action button */}
              <div className="mt-8 text flex gap-4">
                {!products?.price ? (
                  <>
                    <Skeleton className="h-[40px] w-[188px] px-4 py-2" />
                  </>
                ) : (
                  <>
                    <Button className="text-lg bg-orange-500" size="lg">
                      <ShoppingBasket className="w-[20px] mr-2" /> Add to cart
                    </Button>
                  </>
                )}

                {!products?.price ? (
                  <>
                    <Skeleton className="h-[40px] w-[188px] px-4 py-2" />
                  </>
                ) : (
                  <>
                    <Button className="bg-blue-500 text-lg" size="lg">
                      <Package className="w-[20px] mr-2" /> Buy Now
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
