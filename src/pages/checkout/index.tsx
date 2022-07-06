import { Header } from "components/molecules";
import Image from "next/image";

function Checkout() {
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
                        <h1 className="border-5 pb-4 text-3xl">Your Shopping Basket</h1>
                    </div>
                </div>

                {/* right side */}
            </main>
        </div>
    );
}

export default Checkout;
