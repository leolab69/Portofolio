import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logoImg from '../public/assets/logoAB.png';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { VscPreview } from 'react-icons/vsc';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, [shadow]);

  return (
    <div
      className={
        shadow
          ? 'fixed w-full shadow-lg z-[100] shadow-gray-400'
          : 'fixed w-full z-[100]'
      }
    >
      <div className='bg-[#3d3737] h-16 sm:h-20 bg-opacity-80 z-[100] mx-2'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 pt-2 sm:pt-0'>
          <Link href='/'>
            <a>
              <Image
                src={logoImg}
                width={115}
                height={60}
                alt='logoLeoLab'
                className='cursor-pointer hover:scale-110'
              />
            </a>
          </Link>
          <div>
            <nav className='hidden md:flex'>
              <Link href='/'>
                <a
                  onClick={() => setNav(false)}
                  className='ml-10 text-sm uppercase hover:text-[#fda47e] hover:scale-125'
                >
                  Accueil
                </a>
              </Link>
              <Link href='/#about'>
                <a className='ml-10 text-sm uppercase hover:text-[#fda47e] hover:scale-125'>
                  A propos
                </a>
              </Link>
              <Link href='/#skills'>
                <a className='ml-10 text-sm uppercase hover:text-[#fda47e] hover:scale-125'>
                  Compétences
                </a>
              </Link>
              <Link href='/#projects'>
                <a className='ml-10 text-sm uppercase hover:text-[#fda47e] hover:scale-125'>
                  Projets
                </a>
              </Link>
              <Link href='/#contact'>
                <a className='ml-10 text-sm uppercase hover:text-[#fda47e] hover:scale-125'>
                  Contact
                </a>
              </Link>
            </nav>

            <div onClick={handleNav} className='md:hidden cursor-pointer'>
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
        <div
          className={nav && 'fixed left-0 top-0 w-full h-screen bg-black/60'}
        >
          <div
            className={
              nav
                ? 'fixed left-0 top-0 w-[80%] sm:w-[60%] md:w-[45%] h-screen bg-[#3d3737] ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
          >
            <div className='ml-4'>
              <div className='flex w-full items-center justify-between mt-5'>
                <Image
                  src={logoImg}
                  alt='logoLeoLab'
                  width={115}
                height={60}
                />
                <div
                  onClick={handleNav}
                  className='rounded-full shadow-md shadow-gray-400 p-2 mx-2'
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className='border-b border-gray-400 mt-10'>
                <p className='w-[85%] md:w-[90%]'>
                  Développons de beaux projets ensemble !
                </p>
              </div>
            </div>
            <div>
              <div className='py-2 flex flex-col md-5 ml-4'>
                <ul className='uppercase'>
                  <Link href='/'>
                    <li className='py-4 text-sm hover:text-base'>Accueil</li>
                  </Link>
                  <Link href='/#about'>
                    <li className='py-4 text-sm hover:text-base'>A propos</li>
                  </Link>
                  <Link href='/#skills'>
                    <li className='py-4 text-sm hover:text-base'>
                      Compétences
                    </li>
                  </Link>
                  <Link href='/#projects'>
                    <li className='py-4 text-sm hover:text-base'>Projets</li>
                  </Link>
                  <Link href='/#contact'>
                    <li className='py-4 text-sm hover:text-base'>Contact</li>
                  </Link>
                </ul>

                <div className='pt-36'>
                  <p className='uppercase tracking-widest text-[#fda47e]'>
                    Contactez-moi !
                  </p>
                  <div className='flex items-center justify-between px-3 py-2 w-full sm:w-[80%]'>
                    <Link href='https://www.linkedin.com/in/l%C3%A9o-laborie-016484206'>
                      <a
                        className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                        target='_blank'
                      >
                        <FaLinkedinIn />
                      </a>
                    </Link>
                    <Link href='https://github.com/leolab69'>
                      <a
                        className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                        target='_blank'
                      >
                        <FaGithub />
                      </a>
                    </Link>
                    <Link href='/#contact'>
                      <a className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail />
                      </a>
                    </Link>
                    <Link href='https://drive.google.com/file/d/1Syr5TmuC-kDpaPVU-2qiWQok97mVHI4q/view?usp=sharing'>
                      <a
                        className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                        target='_blank'
                      >
                        <VscPreview />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
