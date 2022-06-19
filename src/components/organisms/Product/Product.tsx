/* eslint-disable react/no-array-index-key */
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ product }: { product: any }) {
    const [ratings] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    return (
        <div>
            <p>{product.category}</p>

            <Image src={product.image} height={200} width={200} objectFit="contain" />

            <h4>{product.title}</h4>

            <div>
                {Array(ratings)
                    .fill("")
                    .map((_: any, i: any) => (
                        <StarIcon key={i} className="h-5" />
                    ))}
            </div>
        </div>
    );
}

export default Product;
