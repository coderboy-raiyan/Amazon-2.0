import { Header } from "components/molecules";
import { CheckoutProduct } from "components/organisms";
import Image from "next/image";
import { useSelector } from "react-redux";

function Checkout() {
    const { basket } = useSelector((state: any) => state.basket);

    return (
        <div className="bg-gray-100">
            <Header />

            <main className="mx-auto max-w-screen-2xl lg:flex">
                {/* left side */}
                <div className="m-5 flex-grow shadow-sm">
                    <Image
                        src="https://links.papareact.com/ikj"
                        objectFit="contain"
                        width={1020}
                        height={250}
                    />

                    <div className="flex flex-col space-y-10 bg-white p-5">
                        <h1 className="border-5 pb-4 text-3xl">
                            {basket.length ? "Shopping Basket" : "Empty Shopping Basket"}
                        </h1>

                        {
                            // eslint-disable-next-line no-undef
                            basket.map((items: IProduct) => (
                                <CheckoutProduct key={items.id} items={items} />
                            ))
                        }
                    </div>
                </div>

                {/* right side */}
            </main>
        </div>
    );
}

export default Checkout;
