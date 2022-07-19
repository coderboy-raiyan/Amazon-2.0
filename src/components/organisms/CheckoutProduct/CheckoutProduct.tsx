/* eslint-disable react/no-array-index-key */
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";

// eslint-disable-next-line no-undef
function CheckoutProduct({ items }: { items: IProduct }) {
    return (
        <div className="grid grid-cols-5">
            <Image src={items.image} height={200} width={200} objectFit="contain" />

            <div className="col-span-3 mx-5">
                <p>{items.title}</p>

                <div className="flex">
                    {items.ratings?.map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="my-2 text-xs line-clamp-2">{items.description}</p>

                <Currency quantity={items.price} currency="USD" />
                {items.hasPrime && (
                    <div className=" flex items-center space-x-2">
                        <img
                            className="w-12"
                            loading="lazy"
                            src="https://links.papareact.com/fdw"
                            alt=""
                        />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>

            <div className="my-auto flex flex-col space-y-2 justify-self-end">
                <button type="button" className="button">
                    Add to Basket
                </button>
                <button type="button" className="button">
                    Remove from Basket
                </button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
