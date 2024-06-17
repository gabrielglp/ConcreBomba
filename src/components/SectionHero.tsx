import Image from "next/image";

import { Container } from "./Container";

import IconFile from "@/assets/icon-file.svg"

export function SectionHero() {
    return (
        <section className="w-full h-sectionHero bg-light-gray pt-16">
            <Container className="flex flex-col items-center">
                <div className="w-full max-w-text-hero text-center">
                    <h3 className="text-xl font-medium text-gray-actived mb-4">Bombeamento de concreto usinado em toda a Baixada Santista</h3>
                    <h1 className="text-7xl/normal font-semibold mb-2">Eficiência e qualidade</h1>
                    <div className="flex items-center justify-center gap-10">
                        <button className="flex items-center gap-2">
                            <Image
                                src={IconFile}
                                alt="Icon File"
                            />
                            <span className="font-medium">Entre em contato</span>
                        </button>
                        <button className="py-4 px-5 bg-green-btn rounded-full font-bold">
                            WhatsApp
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    )
}