import React from 'react';
import Image1 from '../img/portfolio/project_1.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Portfolio = () => {
  return( 
  <motion.section 
  initial={{ opacity: 0, y:'100%' }}
  animate={{ opacity: 1, y:0}}
  exit={{ opacity: 0 , y:'100%'}}
  transition={transition1}
  className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-center 
      gap-x-24 lg:px-20 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
        <motion.div
        initial={{ opacity: 0, y:'80%' }}
        animate={{ opacity: 1, y:0}}
        exit={{ opacity: 0 , y:'80%'}}
        transition={transition1}   
        className='flex flex-col lg:items-start'>
          <h1 className='h1 mb-10'>Portfolio</h1>
          <p className='mb-12 max-w-sm'>
            I am quite adept in designing and okay with development as I have worked on various projects design.
            You can see my recents work on below and hire or contact me.
          </p>
          <Link to={'/contact'} className='btn mb-[40px] xs:mx-auto lg:max-0'>
            Hire Me
          </Link>
        </motion.div>

        <div className='grid grid-cols-2 gap-2 xs:mx-2'>
          <div className='max-w-[250px] lg:max-w-[320px] h-[150px] lg:h-[180px] bg-accent 
          overflow-hidden'>
            <img src={Image1} alt='' className='object-cover h-full lg:h-[180px] hover:scale-105 transition-all duration-500'></img>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[150px] lg:h-[180px] bg-accent 
          overflow-hidden'>
            <img src={Image1} alt='' className='object-cover h-full lg:h-[180px] hover:scale-105 transition-all duration-500'></img>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[150px] lg:h-[180px] bg-accent 
          overflow-hidden'>
            <img src={Image1} alt='' className='object-cover h-full lg:h-[180px] hover:scale-105 transition-all duration-500'></img>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[150px] lg:h-[180px] bg-accent 
          overflow-hidden'>
            <img src={Image1} alt='' className='object-cover h-full lg:h-[180px] hover:scale-105 transition-all duration-500'></img>
          </div>
         
        </div>

      </div>

    </div>
  </motion.section>
  )
};

export default Portfolio;
