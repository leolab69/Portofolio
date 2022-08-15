import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#fda47e] to-[#3d3737]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={backgroundImg}
        alt='image of project'
        width={450}
        height={250}
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>React JS</p>
        <Link href={projectUrl}>
          <p className='text-center px-8 py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            Plus d'infos
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
