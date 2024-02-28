import React from 'react';
import Cute from '../img/about/cutie.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const About = () => {
  return( 
  <motion.section 
  initial={{ opacity: 0, y:'100%' }}
  animate={{ opacity: 1, y:0}}
  exit={{ opacity: 0 , y:'100%'}}
  transition={transition1}
  className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-20 lg:px-20'>
        <div className='flex-1 max-h-96 lg:max-h-1/4 order-2 lg:order-none overflow-hidden'>
          <img src={Cute} alt='' className='lg:ml-10 lg:w-80'/>
        </div>
        <motion.div
        initial={{ opacity: 0, y:'80%' }}
        animate={{ opacity: 1, y:0}}
        exit={{ opacity: 0 , y:'80%'}}
        transition={transition1}   
        className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-0 flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1 mb-8'>About Me</h1>
          <p className='mb-12 max-w-sm'>Hello, I am Prasansha Tamang. Currently a student studying at Suunway Business college affilated with BCU(UK)
          <br/>
          Despite being enrolled in datascience, I am quite interested in design and development.
          </p>
          <Link to={'/portfolio'} className='btn'>View My Work</Link>
        </motion.div>

      </div>
    </div>
  </motion.section>
  )
};

export default About;
