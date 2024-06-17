import { NavBar } from "@/components/NavBar";
import { SectionCards } from "@/components/SectionCards";
import { SectionHero } from "@/components/SectionHero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar/>
      <SectionHero/>
      <SectionCards/>
    </>
  );
}
