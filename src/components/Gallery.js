import React from 'react';
import Image from 'next/image';

import kamaclean from "../../public/images/gallery/kamaclean.png"
import kamaclub from "../../public/images/gallery/kamaclub.png"
import kamaestadio from "../../public/images/gallery/kamaestadio.png"
import kamafingerbus from "../../public/images/gallery/kamafingerbus.png"
import kamahousethanos from "../../public/images/gallery/kamahousethanos.png"
import kamaspray from "../../public/images/gallery/kamaspray.png"

const Gallery = () => {

  return (
    <div className='my-20'>
        
        <h2 className='font-bold text-8xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Gallery
        </h2>

      <div className='grid w-full grid-cols-6 gap-16 sm:gap-8 items-center justify-center'>
        
        <div className='col-span-3 xl:col-span-3 md:col-span-6 lg:col-span-6 relative h-max rounded-2xl border-2
        border-solid border-dark bg-radialSunLight p-8 dark:bg-radialSunDark dark:border-light md:order-1'
        >
          <Image src={kamaclean} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl break-inside-avoid' />
        </div>

        <div className='col-span-3 xl:col-span-3 md:col-span-6 lg:col-span-6 relative h-max rounded-2xl border-2
        border-solid border-dark bg-radialSunLight p-8 dark:bg-radialSunDark dark:border-light md:order-1'
        >
          <Image src={kamaclub} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl break-inside-avoid' />
        </div>

        <div className='col-span-3 xl:col-span-3 md:col-span-6 lg:col-span-6 relative h-max rounded-2xl border-2
        border-solid border-dark bg-radialSunLight p-8 dark:bg-radialSunDark dark:border-light md:order-1'
        >
          <Image src={kamaestadio} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl break-inside-avoid' />
        </div>

        <div className='col-span-3 xl:col-span-3 md:col-span-6 lg:col-span-6 relative h-max rounded-2xl border-2
        border-solid border-dark bg-radialSunLight p-8 dark:bg-radialSunDark dark:border-light md:order-1'
        >
          <Image src={kamafingerbus} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl break-inside-avoid' />
        </div>

        <div className='col-span-3 xl:col-span-3 md:col-span-6 lg:col-span-6 relative h-max rounded-2xl border-2
        border-solid border-dark bg-radialSunLight p-8 dark:bg-radialSunDark dark:border-light md:order-1'
        >
          <Image src={kamahousethanos} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl break-inside-avoid' />
        </div>

        <div className='col-span-3 xl:col-span-3 md:col-span-6 lg:col-span-6 relative h-max rounded-2xl border-2
        border-solid border-dark bg-radialSunLight p-8 dark:bg-radialSunDark dark:border-light md:order-1'
        >
          <Image src={kamaspray} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl break-inside-avoid' />
        </div>
      </div>
    </div>
  );
}

export default Gallery;

