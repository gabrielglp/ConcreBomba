'use client'

import { InputContato } from "./InputContato"
import { SelectContato } from "./SelectContato"

export function SectionContato() {
    return (
        <div className="flex flex-col items-center md:items-stretch md:flex-row items-start justify-between bg-light-gray px-4 md:px-36 pt-44 gap-x-36 gap-y-4">
            <div className="flex flex-col items-center md:items-stretch md:flex-row md:block">
                <span className="text-2xl font-semibold text-green-title-contact">
                    ENTRE EM CONTATO
                </span>
                <h1 className="font-bold text-base md:text-5xl mt-10">
                    Fale com um de nossos representantes
                </h1>
                <p className="text-sm md:text-2xl font-light opacity-70 mt-10 items-center md:items-stretch text-center md:text-left">
                    Endereço: Av. Jairo de Camargo Martins, N 1555 - Esmeralda - Praia Grande - SP
                </p>
            </div>
            <div className="flex flex-col items-center mt-8">
                <div className="w-[400px] xs:w-[350px] md:w-full rounded-xl px-7 py-6 bg-white border-[#c9c9c9]">
                    <h1 className="font-bold text-base md:text-4xl mb-8 mt-4">
                        Fale com um especialista
                    </h1>
                    <form action="" className="flex flex-col">

                        <InputContato type="text" placeholder="Nome completo" pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]+" required />
                        <InputContato type="email" placeholder="E-mail profissional" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" required />
                        <InputContato type="text" placeholder="Celular/WhatsApp" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$" required />
                        {/* <InputContato type="text" placeholder="Nome completo" pattern="" required />
                        <SelectContato placeholder="Nome completo" options={[
                            {label: "Instagram", value: "instagram"},
                            {label: "Facebook", value: "facebook"}
                        ]} required /> */}

                        <button className="bg-green-title-contact w-full h-14 rounded-md mt-4"><p className="text-white font-semibold">Enviar</p></button>

                    </form>
                </div>
                <div className="col-start-2 text-center">
                    <p className="mb-24 mt-4 px-4 md:px-28 font-light text-xs md:text-sm">
                        Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <span className="font-bold">Política de Privacidade.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}