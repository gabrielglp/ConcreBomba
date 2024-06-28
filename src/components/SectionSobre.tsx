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

            <div className="flex flex-col md:flex-row items-center justify-between w-full px-10 md:px-20 gap-10 md:gap-64 md:h-80 h-full py-10">
                <div className="flex flex-col text-end items-end">
                    <h1 className="font-bold text-6xl mb-1">QUEM</h1>
                    <h2 className="font-semibold text-2xl mb-4">SOMOS?</h2>
                    <p className="text-xs md:pl-10 text-gray-actived">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis odio debitis eligendi, possimus, suscipit perferendis velit placeat exercitationem error itaque provident. Aliquam ipsa non debitis deserunt error iure ut neque!</p>
                </div>

                <div className="flex flex-col text-end items-end">
                    <h1 className="font-bold text-6xl mb-1">O QUE</h1>
                    <h2 className="font-semibold text-2xl mb-4">FAZEMOS?</h2>
                    <p className="text-xs md:pl-10 text-gray-actived">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis odio debitis eligendi, possimus, suscipit perferendis velit placeat exercitationem error itaque provident. Aliquam ipsa non debitis deserunt error iure ut neque!</p>
                </div>

                <div className="flex flex-col text-end items-end">
                    <h1 className="font-bold text-6xl mb-1">COMO</h1>
                    <h2 className="font-semibold text-2xl mb-4">CONTATAR?</h2>
                    <p className="text-xs md:pl-10 text-gray-actived">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis odio debitis eligendi, possimus, suscipit perferendis velit placeat exercitationem error itaque provident. Aliquam ipsa non debitis deserunt error iure ut neque!</p>
                </div>
            </div>
        </>
    )
}