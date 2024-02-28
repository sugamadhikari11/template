import React from 'react';
import Cute from '../img/home/Cutie.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section '>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col justify-center'>
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className='w-full pt-36 pb-14 lg:pt-20 lg:pb-0 lg:pl-20  lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
            <h2 className='h1'>
              Designer <br /> & Developer
            </h2>
            <p className='text-[26px] lg:text-[30px] font-primary mb-4 lg-mb-12'>Open to Free-lancing!</p>
            <Link to={'/contact'} className='btn xs:mt-[40px] mb-[30px]'>hire me</Link>
          </motion.div>

          <div className='flex justify-end max-h-100 lg:max-h-max'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative overflow-hidden lg:-right-30'>
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={Cute} alt='' className='lg:h-[100vh]' />
            </motion.div>
          </div>
        </div>

      </div>
    </motion.section>
  )
};

export default Home;
