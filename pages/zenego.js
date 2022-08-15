import Image from "next/image";
import React from "react";
import zenegoImg from "../public/assets/projects/zenego.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const zenego = () => {
  return (
    <>
      <div className="w-full h-[40vh] lg:h-[45vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10 " />
        <Image
          className="absolute z-1 brightness-75"
          layout="fill"
          objectFit="cover"
          src={zenegoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">ZENEGO</h2>
          <h3> NextJs / Firebase / Node / Cypress </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 px-4">
        <div className="col-span-4">
          <h2 className="py-3 text-[#fda47e]">Présentation de ZENEGO </h2>

          <p className="mb-4">
            Développement d’une application pour l'entreprise Taiwa.
            <br /> Cette appli permet aux pratitiens (Sophrologue, yoga,
            thérapeute) d'enregister leurs clients et leurs séances sur leur
            compte. <br />
            Les fonctionnalités principales sont : <br />
            Login, accès aux séances, accès aux patients/clients, enregistrement
            d'une séance en mp3 ou vidéo, modification du profil. Notre équipe
            de 4 développeurs a créé une base de donnée avec{" "}
            <span className="pr-1">
              <Link href="https://firebase.google.com/">
                <a
                  className="text-[#fda47e] cursor-pointer font-bold"
                  target="_blank"
                >
                  Firebase
                </a>
              </Link>
            </span>
            .
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-2 mt-4 py -inset-5 hover:scale-105 bg-gradient-to-r from-[#fda47e] to-[#3d3737]">
              <Link href="https://atempo.vercel.app/">
                <a target="_blank">Voir le site</a>
              </Link>
            </button>
          </div>
          <div className="flex justify-center mt-5">
            <button className="px-8 py-2 mt-4 py -inset-5 hover:scale-105 bg-gradient-to-r from-[#fda47e] to-[#3d3737]">
              <Link href="https://github.com/leolab69/atempo">
                <a target="_blank">Voir le code</a>
              </Link>
            </button>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-300 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Stack technique</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJs
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node js
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Cypress
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

export default zenego;
