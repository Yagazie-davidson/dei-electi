import Image from "next/image";
import Link from "next/link";
import React from "react";

export type ProductsData = {
  image: string;
  name: string;
  price: number;
  id?: number;
};
const ProductCard = ({ image, name, price, id }: ProductsData) => {
  return (
    <Link href={`product/${id}`}>
      <div className="flex flex-col items-center w-fit hover:scale-[1.03] transition delay-100 duration-300 ease-in-out">
        <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
          <Image
            src={image}
            alt="Cropped Image"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-[12px] md:text-[28px] font-normal">{name}</h3>
        <p className="text-[8px] md:text-3xl font-normal">${price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
