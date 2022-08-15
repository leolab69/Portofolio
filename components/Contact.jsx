import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import contactImg from '../public/assets/contact.jpeg';
import { AiOutlineMail } from 'react-icons/ai';
import { VscPreview } from 'react-icons/vsc';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    setName();
    setPhone();
    setEmail();
    setSubject();
    setMessage();
  };

  return (
    <div id='contact' className='w-full h-screen px-4 sm:px-12 py-20'>
      <div className='m-auto max-w-[1240px]'>
        <p className='text-xl tracking-wider font-extrabold uppercase text-[#fda47e] pb-5'>
          Contact
        </p>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={contactImg}
                  alt='contact_pic'
                  height={150}
                  width={300}
                />
              </div>
              <div>
                <h2 className='py-2'>Léo Laborie</h2>
                <p>Développeur web et mobile junior</p>
                <p className='py-4'>
                  Je suis disponible à Lyon à
                  partir de septembre 2022 pour un contrat d'apprentissage d'un an.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Contactez-moi ! </p>
                <div className='flex items-center justify-between py-4'>
                  <Link href='https://www.linkedin.com/in/l%C3%A9o-laborie-016484206/'>
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

          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4 '>
              <form
                onSubmit={handleSubmit}
                action='https://getform.io/f/3d3dc589-4571-4954-a4e1-a4baeb2303e7'
                method='POST'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Nom</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-500 text-gray-700 bg-[#f2efdb]'
                      type='text'
                      name='name'
                      required
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Téléphone</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-500 text-gray-700 bg-[#f2efdb]'
                      type='text'
                      name='phone'
                      required
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-500 text-gray-700 bg-[#f2efdb]'
                    type='email'
                    name='email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>
                    Objet
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-500 text-gray-700 bg-[#f2efdb]'
                      type='text'
                      name='subject'
                      required
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                    />{' '}
                  </label>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-500 text-gray-700 bg-[#f2efdb]'
                    rows='10'
                    name='message'
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4 bg from-[#fda47e]'>
                  Envoyer un message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer scroll-smooth ease-in duration-3000 hover:scale-110 '>
              <HiOutlineChevronDoubleUp className='text-[#fda47e]' size={30} />{' '}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;