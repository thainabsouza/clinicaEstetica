"use client";

import Image from "next/image";
import { SlideToWhatsApp } from "@/components/SlideToWhatsApp";
import { CardDescrition } from "@/components/CardDescrition";
import { CardService } from "@/components/CardService";
import Slid from "@/components/Slid";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-screen overflow-hidden">
        <Slid />
      </section>

      {/* SEÇÃO DO CARD */}
      <section className="py-24 px-6 bg-gray-50">
        <CardDescrition
          imageSrc="/exemplo.jpg"
          title="Quem é a Esther?"
          description="Esther é uma profissional dedicada e apaixonada pela área da estética e da saúde, atuando como esteticista e biomédica. Ao longo de sua trajetória, ela vem construindo uma carreira baseada em conhecimento, cuidado e compromisso com o bem-estar de cada paciente. Seu trabalho vai muito além de procedimentos estéticos: Esther acredita que cuidar da aparência também é uma forma de fortalecer a autoestima, a confiança e a qualidade de vida das pessoas.

Com formação na área da Biomedicina e especialização em estética, Esther une conhecimento científico com técnicas modernas para oferecer tratamentos seguros, eficazes e personalizados. "
        />
      </section>

      <section className="relative bg-white ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 p-6 ">
          <CardService image="/Rejuvenescimento.png" title="Limpeza de Pele" />

          <CardService image="/cremmy.png" title="Botox" />

          <CardService image="/cuidadopele.png" title="Preenchimento" />
        </div>
      </section>
    </>
  );
}
