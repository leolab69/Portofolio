import React from 'react';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { VscPreview } from 'react-icons/vsc';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Main = () => {
  return (
    <div
      id='home'
      className='w-full md:h-screen text-center py-20 px-4 sm:px-12'
    >
      <div className='max-w-[1240px] w-full mx-auto flex justify-center items-center pt-10 sm:mt-14'>
        <div>
          <p className='uppercase text-base tracking-widest text-gray-300'>
            Développons de super projets ensemble !{' '}
            <span className='text-[20px] md:text-[32px]'>🚀</span>
          </p>
          <h1 className='py-8 text-[#fda47e]'>Léo Laborie</h1>
          <div className='typewritter'>
            <h2 className='py-3 text-gray-300'>
              <Typewriter
                options={{
                  strings: [
                    'Bienvenue sur mon Portfolio',
                    'Développeur Web et Mobile Full Stack junior',
                    'Disponible pour une alternance',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>
          <div className='mt-5'>
            <p className='py-4 text-gray-300 max-w-[90%] m-auto'>
              Je suis développeur Front-end junior et j'aime <br />
              coder des projets responsive, beaux et fonctionnels !
              <span className=' ml-2 '>📱</span>{' '}
            </p>
            <p className='py-4 text-gray-300 max-w-[70%] m-auto'>
              Terminant la formation "Développeur web et mobile" à la{' '}
              <Link href='https://www.wildcodeschool.com/fr-FR/campus/lyon'>
                <a
                  className='text-[#fda47e] font-bold hover:text-[#abe0ff]'
                  target='_blank'
                >
                  Wild Code School
                </a>
              </Link>
              , je souhaite vivement continuer mon apprentissage avec une{' '}
              <span className='font-bold'>alternance</span>{' '}
              septembre prochain, dans une entreprise qui partage mes valeurs.
            </p>
            <p className='py-4 text-gray-400 max-w-[70%] m-auto'>
              Hi, I’m a junior Front-end web developer and I love building
              beautiful and responsive digital projects! <br />
              Currently, I’m studying in Wild Code School and I'm focused on
              finding a sandwich degree from September.
            </p>
          </div>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link href='https://www.linkedin.com/in/l%C3%A9o-laborie-016484206'>
              <a
                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                target='_blank'
              >
                <FaLinkedinIn />
              </a>
            </Link>
            <Link href='https://github.com/leolab69'>
              <a
                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                target='_blank'
              >
                <FaGithub />
              </a>
            </Link>
            <Link href='/#contact'>
              <a className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </a>
            </Link>
            <Link href='https://drive.google.com/file/d/1Syr5TmuC-kDpaPVU-2qiWQok97mVHI4q/view?usp=sharing'>
              <a
                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                target='_blank'
              >
                <VscPreview />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
