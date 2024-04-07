import React, { useEffect, useRef } from 'react';
import profilePic from "../../public/images/profile/kamaprofile.png";
import Image from 'next/image';

const Programs = () => {
  return (
    <div className='my-64'>
        
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
           Program$
        </h2>

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
                    <h1>Presale</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>Presale of $KAMA is</h1>
                    <h1>facilitated by our Telegram Bot.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-dark/75 dark:text-light/75 pt-3'>
                    <p>Minimum of 0.1SOL</p>
                    <p>Maximum of 10 SOL</p>
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
                    <h1>Airdrop</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>Airdrop of $KAMA is made to</h1>
                    <h1>Top 2,580 participants with</h1>
                        <h1>the most refferals..</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-dark/75 dark:text-light/75 pt-3'>
                    <p>40,000 $KAMA each</p>
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
                    <h1>Presale</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>Presale of $KAMA is</h1>
                    <h1>facilitated by our</h1>
                    <h1>Telegram Bot.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-dark/75 dark:text-light/75 pt-3'>
                    <p>Minimum of 0.1SOL</p>
                    <p>Maximum of 10 SOL</p>
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
                    <h1>Presale</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>Presale of $KAMA is</h1>
                    <h1>facilitated by our</h1>
                    <h1>Telegram Bot.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-dark/75 dark:text-light/75 pt-3'>
                    <p>Minimum of 0.1SOL</p>
                    <p>Maximum of 10 SOL</p>
                </div>
            </div>
        </div>
        
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 pt-16'>
            
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
                    <h1>Presale</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>Presale of $KAMA is</h1>
                    <h1>facilitated by our</h1>
                    <h1>Telegram Bot.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-dark/75 dark:text-light/75 pt-3'>
                    <p>Minimum of 0.1SOL</p>
                    <p>Maximum of 10 SOL</p>
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
                    <h1>Presale</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>Presale of $KAMA is</h1>
                    <h1>facilitated by our</h1>
                    <h1>Telegram Bot.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-dark/75 dark:text-light/75 pt-3'>
                    <p>Minimum of 0.1SOL</p>
                    <p>Maximum of 10 SOL</p>
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
                    <h1>Presale</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>Presale of $KAMA is</h1>
                    <h1>facilitated by our</h1>
                    <h1>Telegram Bot.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-dark/75 dark:text-light/75 pt-3'>
                    <p>Minimum of 0.1SOL</p>
                    <p>Maximum of 10 SOL</p>
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
                    <h1>Presale</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>Presale of $KAMA is</h1>
                    <h1>facilitated by our</h1>
                    <h1>Telegram Bot.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-dark/75 dark:text-light/75 pt-3'>
                    <p>Minimum of 0.1SOL</p>
                    <p>Maximum of 10 SOL</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Programs