import Image from "next/image";

import Caminhao from "@/assets/caminhao-de-cimento.png"

export function SectionSobre() {
    return (
        <>
            <div className="w-full h-96 bg-black">
                <div className="flex flex-col items-center">
                    <Image
                        src={Caminhao}
                        alt="caminhao-de-cimento"
                        className="w-28 mt-28"
                    />
                    <p className="font-bold text-white text-5xl">MC<span className="text-green-btn">MIX</span></p>
                </div>
            </div>
        </>
    )
}