import Image from 'next/image';
import htmlImg from '../public/assets/skills/html5.png';
import jsImg from '../public/assets/skills/js.png';
import reactImg from '../public/assets/skills/React-icon.png';
import tailwindImg from '../public/assets/skills/Tailwind_CSS.png';
import cypressImg from '../public/assets/skills/Cypress.png';
import nodeImg from '../public/assets/skills/nodejs.png';
import mysqlImg from '../public/assets/skills/png_mysql.png';
import githubImg from '../public/assets/skills/github-50.png';
import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='w-full px-4 sm:px-12 py-20'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center '>
        <p className='text-xl tracking-widest uppercase font-extrabold text-[#fda47e]'>
          Mes compétences tech
        </p>

        <h2 className='py-10'>Langages et Frameworks</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center '>
              <div className='m-auto'>
                <Image src={htmlImg} width='65px' height='65px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML / CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center mt-2'>
              <div className='m-auto'>
                <Image src={jsImg} width={150} height={80} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center mt-1'>
              <div className='m-auto'>
                <Image src={reactImg} width='70px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={tailwindImg} width='70px' height='50px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center mt-5'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto mt-5'>
                <Image src={cypressImg} width='170px' height='55px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center mt-4'>
                <h3>Cypress</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center mt-4'>
              <div className='m-auto '>
                <Image src={nodeImg} width='110px' height='30px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center mt-2'>
                <h3>Node js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center '>
              <div className='m-auto'>
                <Image src={mysqlImg} width='110px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center mt-4'>
                <h3>My SQL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto mt-3'>
                <Image src={githubImg} width='60px' height='60px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center mt-2'>
                <h3>Git / Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
