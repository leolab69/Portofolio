import Image from "next/image";
import React from "react";
import medousaImg from "../public/assets/projects/medousa.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const medousa = () => {
  return (
    <>
      <div className="w-full h-[40vh] lg:h-[45vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10 " />
        <Image
          className="absolute z-1 brightness-75"
          layout="fill"
          objectFit="cover"
          src={medousaImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Medousa</h2>
          <h3> React JS / Sanity / Stripe / Figma</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 px-4 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="py-3 text-[#fda47e]">Présentation de Medousa </h2>
          <p className="mb-4">
            Il s'agit d'un site développé dans le cadre d'un "Checkpoint", qui
            était sur le thème de notre choix. <br /> Le but était de créer une
            application sur 2 jours, afin de voir les compétences que j'avais
            acquis durant la formation <br />
            Ce site met en vente des photographies encadrées. <br />
            J'ai créé une base de donnée, récupéré les données grâce à Sanity et
            utilisé Stripe pour le système de paiement en ligne.
          </p>
          <div className="flex justify-center">
            <h3 className="text-[#fda47e] px-8 py-2 mt-4 py -inset-5">
              En progression
            </h3>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-300 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Stack technique</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Sanity
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Stripe
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Figma
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="cursor-pointer hover:scale-110"> ⬅️ Retour</p>
        </Link>
      </div>
    </>
  );
};

export default medousa;
