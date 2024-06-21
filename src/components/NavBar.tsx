"use client";

import React, { useState } from "react";

import Image from "next/image";

import Logo from "@/assets/concrete-mixer-construction-machine-illustration-4d79a5.webp"
import Menu from "@/assets/menu_24dp_FILL0_wght400_GRAD0_opsz24.svg"
import Close from "@/assets/close_24dp_FILL0_wght400_GRAD0_opsz24.svg"

import { ItemMenu } from "./ItemMenu";

export function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const openWhatsApp = () => {
        window.open('https://api.whatsapp.com/send/?phone=5513996790272&text=Ol%C3%A1,%20tudo%20bem?&type=phone_number&app_absent=0', '_blank');
    };

    return (
        <nav className="flex justify-between items-center w-[92%] mx-auto md:pb-0 pb-4">
            <div className="flex items-center gap-2">
                <Image
                    className="w-16"
                    src={Logo}
                    alt="Logo"
                />
                <span className={`font-bold hidden md:block text-3xl`}>Concre<span className="text-green-btn">Bomba</span></span>
            </div>
            <div className={`md:static absolute bg-white md:min-h-fit min-h-[38vh] left-0 ${menuOpen ? "top-[9%] z-20" : "top-[-100%]"} md:w-auto w-full flex items-center px-5 transition-all duration-300 pr-24`}>
                <ul className="flex md:flex-row flex-col md:items-center md:gap-10 gap-8">
                    <li>
                        <ItemMenu
                            name="Inicio"
                        />
                    </li>
                    <li>
                        <ItemMenu
                            name="Galeria"
                        />
                    </li>
                    <li>
                        <ItemMenu
                            name="Sobre"
                        />
                    </li>
                    <li>
                        <ItemMenu
                            name="Contato"
                        />
                    </li>
                    <li>
                        <ItemMenu
                            name="Soluções"
                        />
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <button className="bg-green-btn px-5 py-2 rounded-md font-bold hover:bg-[#74DD3B]" onClick={openWhatsApp}>
                    Fale Conosco
                </button>
                {menuOpen ? (
                        <Image
                            className="text-3xl cursor-pointer md:hidden"
                            src={Close}
                            alt="Close"
                            onClick={handleMenuClick}
                        />
                    ) : (
                        <Image
                            className="text-3xl cursor-pointer md:hidden"
                            src={Menu}
                            alt="Menu"
                            onClick={handleMenuClick}
                        />
                )}
            </div>
        </nav>
    )
}