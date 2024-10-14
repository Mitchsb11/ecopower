"use client"

import MaxWidthWrapper from "./MaxWidthWrapper"
import { Searchbar } from "./searchbar"
import NavItems from "./navitems"
import { Button } from "./ui/button"
import Link from "next/link"
import { UserButton, useAuth } from "@clerk/nextjs"
import Cart from "./cart"
import { Zap } from 'lucide-react';

const Navbar = () => {

    const { isSignedIn } = useAuth()
    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 border-b border-gray-200">
            <header className="relative">
                <MaxWidthWrapper className="md:px-0 px-0">
                    <div>
                        <div className="flex h-16 2xl:h-[4.2vw] items-center justify-between">
                            <div className="hidden lg:flex ml-4 ">
                                <Link href="/">
                                    <Zap className="text-blue-900"/>
                                </Link>
                            </div>
                            <div className="ml-0 lg:ml-[15vw] xl:ml-80 pr-0 flex items-center z-50 px-10 font-bold">
                                <NavItems name={"PRODUITS"} repo={"product"} />
                                <NavItems name={"À PROPOS"} repo={"about-us"} />
                                <NavItems name={"CONTACT"} repo={"contact"} />
                            </div>
                            <div className="flex pr-0 items-center justify-between">
                                <Searchbar />
                                <div className="flex h-16 2xl:h-[4.2vw]  border-l border-gray-200 items-center px-3 ">
                                    {isSignedIn ?
                                        <UserButton afterSignOutUrl="/"/>
                                        :
                                        <Button className="bg-blue-900">
                                            <Link href="/auth/sign-in">
                                                Se connecter
                                            </Link>
                                        </Button>
                                    }
                                </div>
                                <div className="flex h-16 2xl:h-[4.2vw]  border-l border-gray-200 items-center pr-3 pl-3 ">
                                    <Cart />
                                </div>
                            </div>
                        </div>

                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar