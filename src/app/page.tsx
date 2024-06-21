import { NavBar } from "@/components/NavBar";
import { SectionCards } from "@/components/SectionCards";
import { SectionContato } from "@/components/SectionContato";
import { SectionHero } from "@/components/SectionHero";
import { SectionSobre } from "@/components/SectionSobre";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar/>
      <SectionHero/>
      <SectionCards/>
      <SectionSobre/>
      <SectionContato/>
    </>
  );
}
