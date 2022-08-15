import React from 'react';
import ProjectItem from './ProjectItem';
import tokyoexpressImg from '../public/assets/projects/tokyoexpress.png';
import cinechillImg from '../public/assets/projects/cinechill.png';
import medousaImg from '../public/assets/projects/medousa.png';
import zenegoImg from '../public/assets/projects/zenego.png';
import codeImg from '../public/assets/projects/code.jpg';

const Projects = () => {
  return (
    <div id='projects' className='w-full lg:h-auto px-4 sm:px-12 py-20'>
      <div className=' m-auto max-w-[1240px]'>
        <p className='text-xl tracking-widest uppercase font-extrabold text-[#fda47e]'>
          Mes Projets
        </p>

        <h2 className='py-6'>Les projets développés pendant ma formation </h2>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Tokyo Express'
            backgroundImg={tokyoexpressImg}
            projectUrl='/tokyoExpress'
          />
          <ProjectItem
            title='CineChill'
            backgroundImg={cinechillImg}
            projectUrl='/cineChill'
          />
          <ProjectItem
            title='Zenego'
            backgroundImg={zenegoImg}
            projectUrl='/zenego'
          />
          <ProjectItem
            title='Portfolio'
            backgroundImg={codeImg}
            projectUrl='/portfolio'
          />
          <ProjectItem
            title='Medousa'
            backgroundImg={medousaImg}
            projectUrl='/medousa'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
