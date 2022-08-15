import Image from 'next/image';
import React from 'react';
import tokyoexpressImg from '../public/assets/projects/tokyoexpress.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const tokyoExpress = () => {
  return (
    <>
      <div className='w-full h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10' />
        <Image
          className='absolute z-1 brightness-75'
          layout='fill'
          objectFit='cover'
          src={tokyoexpressImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Tokyo Express</h2>
          <h3> HTML / CSS / Javascript </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 px-4'>
        <div className='col-span-4'>
          <h2 className='py-3 text-[#fda47e] '>
            Présentation de Tokyo Express{' '}
          </h2>
          <p className='mb-4'>
            Ce premier projet de groupe a été créé avec les langages HTML, CSS
            et Javascript pour la partie dynamique. <br />
            Il s'agit d'un site de type blog voyage, ayant pour objectif de
            recommander des endroits à visiter et des conseils pour les curieux
            ou les personnes qui souhaitent s'y rendre. <br />
            Nous avons utilisé pour ce projet Git, GitHub et Figma pour les
            maquettes.
          </p>
          <div className='flex justify-center'>
            <button className='px-8 py-2 mt-4 py -inset-5 hover:scale-105 bg-gradient-to-r from-[#fda47e] to-[#3d3737]'>
              <Link href='https://tokyoexpress.netlify.app/'>
                <a target='_blank'>Voir le site</a>
              </Link>
            </button>
          </div>
          <div className='flex justify-center mt-5'>
            <button className='px-8 py-2 mt-4 py -inset-5 hover:scale-105 bg-gradient-to-r from-[#fda47e] to-[#3d3737]'>
              <Link href='https://github.com/leolab69/Wild-P1-TokyoExpress'>
                <a target='_blank'>Voir le code</a>
              </Link>
            </button>
          </div>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-300 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Stack technique</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML / CSS
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> GitHub, Figma
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Netlify
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='cursor-pointer hover:scale-110'> ⬅️ Retour</p>
        </Link>
      </div>
    </>
  );
};

export default tokyoExpress;
