'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";

import Mockup from "@/assets/mockup-main.png";
import Card01 from "@/assets/image-01.png";
import Card02 from "@/assets/image-02.png";
import Card03 from "@/assets/image-03.png";
import Card04 from "@/assets/image-04.png";
import Card05 from "@/assets/image-05.png";
import Card06 from "@/assets/image-06.png";

gsap.registerPlugin(ScrollTrigger)

export function SectionCards() {


    const mockupRef = useRef(null);
    const titleRef = useRef(null);
    const sectionRef = useRef(null);
    
    const section = sectionRef.current;

    const card01Ref = useRef(null);
    const card02Ref = useRef(null);
    const card03Ref = useRef(null);
    const card04Ref = useRef(null);
    const card05Ref = useRef(null);
    const card06Ref = useRef(null);

    function animeteCards(images: null[], position: number) {
        gsap.fromTo(images, {
            opacity: 0,
            x: position,
        }, {
            opacity: 1,
            x: 0,
            duration: .5,
            stagger: .2,
            scrollTrigger: {
                trigger: section,
                start: 'center center'
            }
        })
    }


    useEffect(() => {
        const mockupPhone = mockupRef.current;
        const title = titleRef.current;

        const imgOne = card01Ref.current;
        const imgTwo = card02Ref.current;
        const imgThree = card03Ref.current;
        const imgFour = card04Ref.current;
        const imgFive = card05Ref.current;
        const imgSix = card06Ref.current;

        const leftImg = [imgOne, imgTwo, imgThree]
        const rightImg = [imgFour, imgFive, imgSix]

        animeteCards(leftImg, 50)
        animeteCards(rightImg, -50)

        gsap.fromTo(mockupPhone, {
            opacity: 0,
            scale: .5
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power5.out',
        })

        gsap.fromTo(title, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: '45% center',
                // markers: true
            }
        });

    }, []);
    
    return (
        <section className="w-full mx-auto pb-20" ref={sectionRef}>
            <Image
                src={Mockup}
                alt="Mockup main"
                className="w-64 md:w-80 sticky top-56 z-10 mx-auto -mt-[25rem] md:-mt-[32rem] mb-16 opacity-0"
                ref={mockupRef}
            />
            <h2 className="text-center text-2xl md:text-7xl font-semibold mb-24 md:mb-56 opacity-0" ref={titleRef}>Faça <span className="text-green-title-cards">você</span> mesmo de casa</h2>
            <div className="relative w-full max-w-area-cards h-area-cards md:h-area-cards-desk mx-auto">
                <Image
                    src={Card01}
                    alt="Card 01"
                    className="w-20 md:w-60 absolute top-8 md:top-0 left-4 md:left-44 opacity-0"
                    ref={card01Ref}
                />
                <Image
                    src={Card02}
                    alt="Card 02"
                    className="w-20 md:w-60 absolute left-8 md:left-0 bottom-60 md:bottom-32 rounded-xl md:rounded-4xl opacity-0"
                    ref={card02Ref}
                />
                <Image
                    src={Card03}
                    alt="Card 03"
                    className="w-20 md:w-60 absolute bottom-20 md:bottom-0 left- xs:left-[17rem] md:left-80 rounded-xl md:rounded-4xl opacity-0"
                    ref={card03Ref}
                />
                <Image
                    src={Card04}
                    alt="Card 04"
                    className="w-20 md:w-60 absolute top-0 md:-top-8 right-4 md:right-32 rounded-xl md:rounded-4xl opacity-0"
                    ref={card04Ref}
                />
                <Image
                    src={Card05}
                    alt="Card 05"
                    className="w-20 md:w-60 absolute right-6 md:right-0 bottom-80 md:bottom-28 rounded-xl md:rounded-4xl opacity-0"
                    ref={card05Ref}
                />
                <Image
                    src={Card06}
                    alt="Card 06"
                    className="w-20 md:w-60 absolute bottom-16 md:bottom-0 right-72 md:right-80 opacity-0"
                    ref={card06Ref}
                />
            </div>
        </section>
    )
}