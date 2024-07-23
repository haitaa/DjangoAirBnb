import React from "react";
import Image from "next/image";

function Categories() {
    return (
        <div className="pt-6 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-300 hover:opacity-100">
                <Image
                    src={"/category-icon-beach.jpg"}
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Beach</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-300 hover:opacity-100">
                <Image
                    src={"/category-icon-villas.jpg"}
                    alt="Category - Villas"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Villas</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-300 hover:opacity-100">
                <Image
                    src={"/category-icon-beach.jpg"}
                    alt="Category - Cabins"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Cabins</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-300 hover:opacity-100">
                <Image
                    src={"/category-icon-beach.jpg"}
                    alt="Category - Tiny Homes"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Tiny Homes</span>
            </div>
        </div>
    );
}

export default Categories;
