/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { changeQty, removeFromBasket } from "redux/Reducers/basketSlice";

// eslint-disable-next-line no-undef
function CheckoutProduct({ items }: { items: IProduct }) {
    const dispatch = useDispatch();

    const handelQty = (e: any) => {
        // eslint-disable-next-line no-undef
        const updatedProductWithQty: IProduct = { ...items, quantity: Number(e.target.value) };
        dispatch(changeQty(updatedProductWithQty));
        if (Number(e.target.value) === 0) {
            dispatch(removeFromBasket(items.id));
        }
    };

    return (
        <div className="grid grid-cols-5 border-b pb-4">
            <Image src={items.image} height={120} width={120} objectFit="contain" />

            <div className="col-span-3 mx-5">
                <p className="text-lg font-semibold">{items.title}</p>

                <div className="flex">
                    {items.ratings?.map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="my-2 text-xs line-clamp-2">{items.description}</p>

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

                <div className="flex items-center space-x-5">
                    {items.quantity! > 0 && (
                        <div className="flex h-8 w-28 items-center justify-center space-x-3 rounded-xl border-gray-300 bg-gray-100  text-sm font-semibold shadow">
                            <label>Qty : </label>
                            <select
                                className="w-2/5  border-none bg-transparent p-1 focus:ring-0"
                                onChange={handelQty}
                            >
                                {Array(10)
                                    .fill("")
                                    .map((_, i) => (
                                        <option key={i} selected={i === items.quantity} value={i}>
                                            {i === 0 ? `${i} (Delete)` : i}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    )}

                    <div>
                        <button
                            onClick={() => dispatch(removeFromBasket(items.id))}
                            type="button"
                            className="text-xs text-[#0066C0] hover:underline"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-self-end">
                <p className="text-lg font-semibold">
                    <Currency quantity={items.price} currency="USD" />
                </p>
            </div>
        </div>
    );
}

export default CheckoutProduct;
