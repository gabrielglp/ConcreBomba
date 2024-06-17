import Image from "next/image";

import Mockup from "@/assets/mockup-main.png"
import Card01 from "@/assets/image-01.png"
import Card02 from "@/assets/image-02.png"
import Card03 from "@/assets/image-03.png"
import Card04 from "@/assets/image-04.png"
import Card05 from "@/assets/image-05.png"
import Card06 from "@/assets/image-06.png"

export function SectionCards() {
    return (
        <section className="w-full mx-auto pb-20">
            <Image
                src={Mockup}
                alt="Mockup main"
                className="w-64 md:w-80 sticky top-56 z-10 mx-auto -mt-[25rem] md:-mt-[32rem] mb-16"
            />
            <h2 className="text-center text-2xl md:text-7xl font-semibold mb-24 md:mb-56">Faça <span className="text-green-title-cards">você</span> mesmo de casa</h2>
            <div className="relative w-full max-w-area-cards h-area-cards md:h-area-cards-desk mx-auto">
                <Image
                    src={Card01}
                    alt="Card 01"
                    className="w-20 md:w-60 absolute top-8 md:top-0 left-4 md:left-44"
                />
                <Image
                    src={Card02}
                    alt="Card 02"
                    className="w-20 md:w-60 absolute left-8 md:left-0 bottom-60 md:bottom-32 rounded-xl md:rounded-4xl"
                />
                <Image
                    src={Card03}
                    alt="Card 03"
                    className="w-20 md:w-60 absolute bottom-20 md:bottom-0 left-72 md:left-80 rounded-xl md:rounded-4xl"
                />
                <Image
                    src={Card04}
                    alt="Card 04"
                    className="w-20 md:w-60 absolute top-0 md:-top-8 right-4 md:right-32 rounded-xl md:rounded-4xl"
                />
                <Image
                    src={Card05}
                    alt="Card 05"
                    className="w-20 md:w-60 absolute right-6 md:right-0 bottom-80 md:bottom-28 rounded-xl md:rounded-4xl"
                />
                <Image
                    src={Card06}
                    alt="Card 06"
                    className="w-20 md:w-60 absolute bottom-16 md:bottom-0 right-72 md:right-80"
                />
            </div>
        </section>
    )
}