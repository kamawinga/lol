import React, { useEffect, useRef } from 'react';
import profilePic from "../../public/images/profile/kamaprofile.png";
import qPic from "../../public/images/1.jpg";
import wPic from "../../public/images/2.jpg";
import ePic from "../../public/images/3.jpg";
import rPic from "../../public/images/4.jpg";
import tPic from "../../public/images/5.png";
import yPic from "../../public/images/6.png";
import uPic from "../../public/images/7.png";
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
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Presale</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>Presale of $KAMA is</h1>
                    <h1>facilitated by our Telegram Bot.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-primaryDark dark:text-primary pt-3'>
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
                    <Image src={qPic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Airdrop</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>Airdrop of $KAMA is made to</h1>
                    <h1>Top 2,580 participants with</h1>
                        <h1>the most refferals..</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-primaryDark dark:text-primary pt-3'>
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
                    <Image src={wPic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Refferals</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>Refer family & friends,</h1>
                    <h1>get the chance to</h1>
                    <h1>earn $KAMA.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-primaryDark dark:text-primary pt-3'>
                    <p>100,000 $KAMA each</p>
                    <p>for Top 258 Refferals</p>
                </div>
            </div>

            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div>
                    <Image src={ePic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Tier 1 Bonuses</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>Buyers of Presale with</h1>
                    <h1>Minimum of 5.1 SOL</h1>
                    <h1>Maximum of 10 SOL</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-primaryDark dark:text-primary pt-3'>
                    <p>60,000 $KAMA each</p>
                    <p>for First 258 Buys</p>
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
                    <Image src={rPic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Tier 2 Bonuses</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>Buyers of Presale with</h1>
                    <h1>Minimum of 1.1 SOL</h1>
                    <h1>Maximum of 5 SOL</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-primaryDark dark:text-primary pt-3'>
                    <p>50,000 $KAMA each</p>
                    <p>for First 258 Buys</p>
                </div>
            </div>

            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div>
                    <Image src={tPic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Tier 3 Bonuses</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>The First 258</h1>
                    <h1>Buyers of Presale</h1>
                    <h1>are rewarded with</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-primaryDark dark:text-primary pt-3'>
                    <p>40,000 $KAMA each</p>
                    <p>for First 258 Buys</p>
                </div>
            </div>

            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div>
                    <Image src={yPic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Tier 4 Bonuses</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>Buyers of Presale with</h1>
                    <h1>Top 258 Largest Buys</h1>
                    <h1>0.1-10 SOL Maximum.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-primaryDark dark:text-primary pt-3'>
                    <p>30,000 $KAMA each</p>
                    <p>for Top 258 Buys</p>
                </div>
            </div>

            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div>
                    <Image src={uPic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Tier 5 Bonuses</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>258 Active Community Members</h1>
                    <h1>Who post fun $KAMA content</h1>
                    <h1>on X/Twitter</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-primaryDark dark:text-primary pt-3'>
                    <p>20,000 $KAMA each</p>
                    <p>for 258 members</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Programs