import { Header } from "components/molecules";
import Image from "next/image";

function Checkout() {
    return (
        <div className="bg-gray-100">
            <Header />

            <main className="mx-auto max-w-screen-2xl lg:flex">
                {/* left side */}
                <div>
                    <Image
                        src="https://links.papareact.com/ikj"
                        objectFit="contain"
                        width={1020}
                        height={250}
                    />

                    <div>
                        <h1>Your Shopping Basket</h1>
                    </div>
                </div>

                {/* right side */}
            </main>
        </div>
    );
}

export default Checkout;
