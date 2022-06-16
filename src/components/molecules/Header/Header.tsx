import { SearchIcon } from "@heroicons/react/outline";
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
                <div className="text-white">
                    <div>
                        <p>Hello, Raiyan</p>
                        <p>Account & List</p>
                    </div>

                    <div>
                        <p>Returns</p>
                        <p>& Orders</p>
                    </div>
                </div>
            </div>
            {/* bottom nav */}
        </header>
    );
}

export default Header;
