import React from 'react';
import Image from 'next/image';
import picImg from '../public/pic.jpg';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full px-4 sm:px-12 py-24 '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl font-extrabold tracking-widest text-[#fda47e]'>
            A propos de moi
          </p>
          <h2 className='py-4'>Qui suis-je ? </h2>
          <p className='py-2 text-gray-300'>
            Développeur  curieux, créatif et rigoureux 👩‍💻
          </p>
          <p className='py-2 text-gray-300'>
            Ayant travailler dans divers domaines, j'ai décidé de me convertir dans ce métier incroyable qu'est{' '}
            <span className='font-bold'>développeur web et mobile ! </span>{' '}
            <br />
            Pour me former, j'ai commencé avec une première formation de de developpeur web à Webforce 3 en 2021. Par la suite, j'ai choisi la Wild Code School à Lyon, qui proposait
            une formation intensive "développeur web et mobile",
            certifiée BAC +2. <br />
            La formation repose sur la théorie mais surtout la pratique
            intensive : maquettage, intégration et développement de projets en
            Javascript / React pour la partie front-end et Node.js pour le
            back-end. <br /> Je continue d'apprendre également à modéliser les bases de
            données Sql avec Express et Prisma, créer des API REST et à tester
            le code avec Cypress.
          </p>
          <p className='py-2 text-gray-300'>
            De nature curieux et technophile, j'ai un attraît pour le digital
            depuis mon enfance. <br /> J'exerce à coté, le métier de DJ/producteur à mon compte. Je suis co-fondateur du collectif FMR et je fais parti des artistes de l'agence de booking Je...Demain. De ce fait, j'ai développé une sensibilité
            créative. <br />
            Enfin, j'ai une appétence pour les challenges, la production musicale et les jeux en équipe. <br />
            C'est donc naturellement que je me suis orienté vers ce métier du web, à la fois technique, créatif et stimulant
            intellectuellement.
          </p>
          <div className='py-6'>
            <Link href='/#projects'>
              <a className=' text-gray-300 font-bold cursor-pointer mb-8 hover:text-lg'>
                Jetez un oeil à mes projets ! 👀
              </a>
            </Link>
          </div>
        </div>
        <div className='w-60 h-80 mt-8 sm:mt-auto m-auto shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            className='rounded-xl'
            src={picImg}
            alt='photo-of-me'
            width={200}
            height={270}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
