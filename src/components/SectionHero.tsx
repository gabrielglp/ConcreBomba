'use client'

import { useEffect, useRef } from "react";

import Image from "next/image";

import { Container } from "./Container";

import IconFile from "@/assets/icon-file.svg";
import IconHand from "@/assets/icon-hand.svg";
import IconHand02 from "@/assets/icon-hand-02.svg";
import IconMockup from "@/assets/mockup.svg";
import gsap from "gsap";

export function SectionHero() {

    const textHeroRef = useRef(null);
    const mockupLeftRef = useRef(null);
    const mockupRightRef = useRef(null);

    useEffect(() => {
        const textHero = textHeroRef.current
        const mleft = mockupLeftRef.current
        const mRight = mockupRightRef.current

        gsap.fromTo(mleft, {
            rotate: 0
        }, {
            rotate: -10,
            duration: 1
        })

        gsap.fromTo(mRight, {
            rotate: 0
        }, {
            rotate: 10,
            duration: 1
        })

        gsap.fromTo(textHero, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out'
        })
    }, []);

    const openWhatsApp = () => {
        window.open('https://api.whatsapp.com/send/?phone=5513974094052&text=Ol%C3%A1,%20tudo%20bem?&type=phone_number&app_absent=0', '_blank');
    };

    return (
        <section className="relative w-full h-sectionHero bg-hero bg-no-repeat bg-light-gray pt-16 bg-top overflow-hidden">
            <Container className="flex flex-col items-center">
                <div className="w-full max-w-text-hero text-center opacity-0" ref={textHeroRef}>
                    <h3 className="text-xl font-medium text-gray-actived mb-4">Bombeamento de concreto usinado em toda a Baixada Santista</h3>
                    <h1 className="text-6xl/normal md:text-7xl/normal font-semibold mb-2">Eficiência e qualidade</h1>
                    <div className="flex items-center justify-center gap-10">
                        <div className="flex items-center gap-2">
                            <Image
                                src={IconFile}
                                alt="Icon File"
                                className="cursor-pointer"
                                onClick={openWhatsApp}
                            />
                            <span className="font-medium">Entre em contato</span>
                        </div>
                        <button className="py-4 px-5 bg-green-btn rounded-full font-bold" onClick={openWhatsApp}>
                            WhatsApp
                        </button>
                    </div>
                </div>
                <div className="relative w-full max-w-area-icon h-28 mt-4">
                    <Image
                        src={IconHand}
                        alt="Icon Hand"
                        className="absolute left-0 bottom-0"
                    />

                    <Image
                        src={IconHand02}
                        alt="Icon Hand 02"
                        className="absolute top-0 right-0"
                    />
                </div>
                <div className="hidden md:flex absolute -bottom-44 w-full max-w-area-mockups justify-between bottom-">
                    <Image
                        src={IconMockup}
                        alt="Mockup"
                        className="relative top-[18px] left-[53px]"
                        ref={mockupLeftRef}
                    />
                    <Image
                        src={IconMockup}
                        alt="Mockup"
                        className="relative top-[18px] right-[53px]"
                        ref={mockupRightRef}
                    />
                </div>
            </Container>
        </section>
    )
}