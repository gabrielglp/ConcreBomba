import Image from "next/image";

import ImageSobre from "@/assets/image-03.png";
import Logo from "@/assets/concrete-mixer-construction-machine-illustration-4d79a5.webp";

export function SectionSobre() {
    return (
        <>
            <div className="bg-sobre w-full h-sectionHero bg-no-repeat opacity-45 absolute"></div>
            <div className="z-10 relative flex flex-col items-center top-24 md:top-14">
                <h1 className="text-3xl md:text-7xl text-[#3B3B3B] font-bold">Concre<span className="text-green-btn">Bomba</span></h1>
                <Image
                    className="w-56 md:w-72 pb-12"
                    src={Logo}
                    alt="Logo"
                />
            </div>
        </>
    )
}