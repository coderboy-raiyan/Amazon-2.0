import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Header() {
    return (
        <header>
            {/* top nav */}
            <div className="flex flex-grow items-center bg-[#131921] py-2">
                <div className="mt-2 flex flex-grow items-center sm:flex-grow-0">
                    <Image
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/* search */}
                <div className="hidden h-10 flex-grow cursor-pointer items-center rounded-md bg-yellow-400 hover:bg-yellow-500 sm:flex">
                    <input
                        className="h-full w-6 flex-shrink flex-grow rounded-l-md border-none p-2 px-4 focus:outline-none focus:ring-0"
                        type="text"
                    />
                    <SearchIcon className="h-12 p-4 " />
                </div>

                {/* Right  */}
                <div className="mx-6 flex items-center space-x-6 text-xs text-white">
                    <div className="link">
                        <p>Hello, Raiyan</p>
                        <p className="font-extrabold md:text-sm">Account & List</p>
                    </div>

                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <div className="link relative flex items-center">
                        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-yellow-100 text-center font-bold text-black md:right-10">
                            0
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="mt-2 hidden font-extrabold sm:inline-flex md:text-sm">
                            Basket
                        </p>
                    </div>
                </div>
            </div>
            {/* bottom nav */}
        </header>
    );
}

export default Header;
