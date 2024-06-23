import Image from "next/image";

import ImageSobre from "@/assets/image-03.png";
import Logo from "@/assets/concrete-mixer-construction-machine-illustration-4d79a5.webp";

export function SectionSobre() {
    return (
        <>
            <div className="bg-sobre w-full h-sectionHero bg-no-repeat opacity-45 absolute"></div>
            <div className="z-10 relative flex flex-col items-center top-28 md:top-16">
                <Image
                    className="w-32 md:w-44"
                    src={Logo}
                    alt="Logo"
                />
                <h1 className="text-5xl md:text-7xl text-[#3B3B3B] font-bold pb-48 md:pb-12">MC<span className="text-green-btn">MIX</span></h1>
            </div>
        </>
    )
}