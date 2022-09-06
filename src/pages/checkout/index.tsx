import { Header } from "components/molecules";
import { CheckoutProduct } from "components/organisms";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
import { selectTotal } from "redux/Reducers/basketSlice";

function Checkout() {
    const { basket } = useSelector((state: any) => state.basket);
    const { data: session } = useSession();
    const total = useSelector(selectTotal);

    return (
        <div className="bg-gray-100">
            <Header />

            <main className="mx-auto max-w-screen-2xl lg:flex">
                {/* left side */}
                <div className="m-2 flex-grow shadow-sm">
                    <Image
                        src="https://links.papareact.com/ikj"
                        objectFit="contain"
                        width={1020}
                        height={250}
                    />

                    <div className="flex flex-col space-y-10 bg-white p-8">
                        <div className="flex justify-between border-b">
                            <h1 className="pb-4 text-3xl">
                                {basket.length ? "Shopping Cart" : "Empty Shopping Cart"}
                            </h1>
                            <h1>Price</h1>
                        </div>

                        {
                            // eslint-disable-next-line no-undef
                            basket.map((items: IProduct) => (
                                <CheckoutProduct key={items.id} items={items} />
                            ))
                        }
                    </div>
                </div>

                {/* right side */}

                {basket.length > 0 && (
                    <div className="flex flex-col bg-white p-5 shadow-md lg:w-[60%]">
                        {basket.length > 0 && (
                            <>
                                <h2>
                                    Subtotal ({basket.length} items) :{" "}
                                    <span className="font-bold">
                                        <Currency quantity={total} currency="USD" />
                                    </span>
                                </h2>

                                <button
                                    className={`${
                                        !session &&
                                        "cursor-not-allowed border-gray-200 from-gray-300 to-gray-500 text-gray-300"
                                    } button mt-2`}
                                    disabled={!session}
                                    type="button"
                                >
                                    {!session ? "Sign in to checkout" : "Proceed to checkout"}
                                </button>
                            </>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}

export default Checkout;
