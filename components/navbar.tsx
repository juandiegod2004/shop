"use client";
import Image from "next/image";
import {Heart, User, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";

const Navbar = () => {
    const router = useRouter();

    return (
        <div className=" border border-red-800 flex place-items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1 className="text-3xl cursor-pointer" onClick={() => router.push("/")}>
                <Image
                    src="/logo.png"
                    alt="Cubrelechos Bogotá"
                    width={50} 
                    height={40} 
                    className="w-auto h-auto"
                />
            </h1>

            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile/>
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap">
                <ShoppingCart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/cart")} />

                <Heart strokeWidth="1"  className="cursor-pointer" onClick={() => router.push("/loved-products")}/>
                
                <User strokeWidth={1} className="cursor-pointer" />
            </div>
        </div>
    );
};

export default Navbar;
