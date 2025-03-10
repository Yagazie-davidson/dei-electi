"use client";
import React from "react";
// import { useParams } from "next/navigation";
import Image from "next/image";
import ProductCard, { ProductsData } from "@/components/ProductCard";

const page = () => {
  //   const params = useParams();
  // window.location.reload();
  const productsData: ProductsData[] = [
    {
      image: "/images/products/img1.jpeg",
      name: "Aura Hoodie",
      price: 170,
      id: 1,
    },
    {
      image: "/images/products/img2.jpeg",
      name: "Aura Hoodie",
      price: 170,
      id: 2,
    },
    {
      image: "/images/products/img3.jpeg",
      name: "Aura Hoodie",
      price: 170,
      id: 3,
    },
    {
      image: "/images/products/img4.jpeg",
      name: "Aura Hoodie",
      price: 170,
      id: 4,
    },
    {
      image: "/images/products/img1.jpeg",
      name: "Aura Hoodie",
      price: 170,
      id: 5,
    },
    {
      image: "/images/products/img2.jpeg",
      name: "Aura Hoodie",
      price: 170,
      id: 6,
    },
    {
      image: "/images/products/img3.jpeg",
      name: "Aura Hoodie",
      price: 170,
      id: 7,
    },
    {
      image: "/images/products/img4.jpeg",
      name: "Aura Hoodie",
      price: 170,
      id: 8,
    },
  ];
  return (
    <div className="">
      {/* {params.collection} */}
      <div className="flex items-center justify-between border-t border-t-[#0A0A0A] border-b border-b-[#0A0A0A66] pt-[12px] pb-[12px] px-4">
        <h2 className="md:text-[32px] text-base">Ye&apos;s Slavation</h2>
        <div className="flex items-center space-x-2 cursor-pointer">
          <p className="uppercase text-[12px] md:text-[20px] font-normal text-[#0A0A0A]">
            fILTER BY
          </p>
          <span>
            <Image
              className=""
              src="/svg/filter.svg"
              alt="filter collection"
              width={16}
              height={16}
              priority
            />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3.5 mt-6 mb-14">
        {productsData.map((product: ProductsData) => {
          return (
            <div key={product.id}>
              <ProductCard
                name={product.name}
                price={product.price}
                image={product.image}
                id={product.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
