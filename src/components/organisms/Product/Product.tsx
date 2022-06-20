/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ product }: { product: any }) {
    const [ratings] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime] = useState(Math.random() < 0.5);
    const [toggle, setToggle] = useState(false);

    return (
        <div className="relative z-30 m-5 flex flex-col bg-white p-10">
            <p className="absolute top-2 right-2 text-xs text-gray-400">{product.category}</p>

            <Image src={product.image} height={200} width={200} objectFit="contain" />

            <h4 className="my-3">{product.title}</h4>

            <div className="flex">
                {Array(ratings)
                    .fill("")
                    .map((_: any, i: any) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
            </div>

            <div className="flex items-end justify-center">
                <p className={`my-2 text-xs ${toggle ? "" : "line-clamp-2"}`}>
                    {product.description}
                </p>
                <button
                    className="text-xs text-yellow-500 underline"
                    type="button"
                    onClick={() => setToggle(!toggle)}
                >
                    {toggle ? "less" : "more"}
                </button>
            </div>

            <div className="mb-5">
                <Currency quantity={product.price} currency="USD" />
            </div>

            {hasPrime && (
                <div className="-mt-5 flex items-center space-x-2">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}

            <button type="button" className="button mt-auto">
                Add to Busket
            </button>
        </div>
    );
}

export default Product;