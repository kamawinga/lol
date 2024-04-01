import React, { useEffect, useRef } from 'react';
import profilePic from "../../public/images/profile/kamaprofile.png";
import Image from 'next/image';

const About = () => {
  return (
    <div className='my-64'>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            
            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div>
                    <Image src={profilePic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primary dark:text-primaryDark'>
                    <h1>$KAMA Memecoin</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>$KAMA Memecoin</h1>
                    <h1>$KAMA Memecoin</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-dark/75 dark:text-light/75'>
                    <p>SDE| TPM| Architect| Researcher</p>
                    <p>(STAR)</p>
                </div>
            </div>

            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div>
                    <Image src={profilePic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primary dark:text-primaryDark'>
                    <h1>$KAMA Memecoin</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>$KAMA Memecoin</h1>
                    <h1>$KAMA Memecoin</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-dark/75 dark:text-light/75'>
                    <p>SDE| TPM| Architect| Researcher</p>
                    <p>(STAR)</p>
                </div>
            </div>
            
            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div>
                    <Image src={profilePic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primary dark:text-primaryDark'>
                    <h1>$KAMA Memecoin</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>$KAMA Memecoin</h1>
                    <h1>$KAMA Memecoin</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-dark/75 dark:text-light/75'>
                    <p>SDE| TPM| Architect| Researcher</p>
                    <p>(STAR)</p>
                </div>
            </div>

            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div>
                    <Image src={profilePic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primary dark:text-primaryDark'>
                    <h1>$KAMA Memecoin</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>$KAMA Memecoin</h1>
                    <h1>$KAMA Memecoin</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-dark/75 dark:text-light/75'>
                    <p>SDE| TPM| Architect| Researcher</p>
                    <p>(STAR)</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About