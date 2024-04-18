import React, { useEffect, useRef } from 'react';
import presalcommunityBonusesPic from "../../public/images/presale.png";
import airdropPic from "../../public/images/airdrop.png";
import referralsPic from "../../public/images/referrals.png";
import communityBonusesPic from "../../public/images/community-competitions.png";
import firstBuyersBonusesPic from "../../public/images/first-buyers-bonuses.png";
import biggestBuyersBonusesPic from "../../public/images/biggest-buyers-bonuses.png";
import Image from 'next/image';

const Programs = () => {
  return (
    <div className='my-20'>
        
        <h2 className='font-bold text-8xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
           Program$
        </h2>

        <div className='grid w-full grid-cols-6 gap-16 sm:gap-8'>
            
            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-radialSunLight p-8 dark:bg-radialSunDark dark:border-light xl:col-span-2 md:order-1 md:col-span-6'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div>
                    <Image src={presalcommunityBonusesPic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Presale</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>30% of $KAMA for Presale.</h1>
                    <h1>On $KAMA Presale Bot</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm text-primaryDark dark:text-primary pt-3'>
                    <p>Minimum 0.5</p>
                </div>
            </div>

            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-radialSunLight p-8 dark:bg-radialSunDark dark:border-light xl:col-span-2 md:order-1 md:col-span-6'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div>
                    <Image src={airdropPic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Airdrop</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>103.2M $KAMA (4%) to Top</h1>
                    <h1>2,580 Airdrop Referrers.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm text-primaryDark dark:text-primary pt-3'>
                    <p>40,000 $KAMA Each</p>
                </div>
            </div>

            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-radialSunLight p-8 dark:bg-radialSunDark dark:border-light xl:col-span-2 md:order-1 md:col-span-6'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div>
                    <Image src={referralsPic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Referrals</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>25.8M $KAMA to Top 258</h1>
                    <h1>Presale Referrers.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm text-primaryDark dark:text-primary pt-3'>
                    <p>100,000 $KAMA Each</p>
                </div>
            </div>
        </div>
        
        <div className='grid w-full grid-cols-6 gap-16 sm:gap-8 pt-16'>
            
            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-radialSunLight p-8 dark:bg-radialSunDark dark:border-light xl:col-span-2 md:order-1 md:col-span-6'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div>
                    <Image src={communityBonusesPic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Creators Competition</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>25.8M $KAMA (1%) to</h1>
                    <h1>Community Chosen Winners.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm text-primaryDark dark:text-primary pt-3'>
                    <p>Funny Meme Creators</p>
                </div>
            </div>

            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-radialSunLight p-8 dark:bg-radialSunDark dark:border-light xl:col-span-2 md:order-1 md:col-span-6'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div>
                    <Image src={firstBuyersBonusesPic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>1st Buyers Bonuses</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>12.9M $KAMA to the</h1>
                    <h1>First 258 Presale Buyers.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm text-primaryDark dark:text-primary pt-3'>
                    <p>50,000 $KAMA Each</p>
                </div>
            </div>

            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-radialSunLight p-8 dark:bg-radialSunDark dark:border-light xl:col-span-2 md:order-1 md:col-span-6'
            >
                <div
                    className='absolute top-0 -right-2 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div>
                    <Image src={biggestBuyersBonusesPic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Max Buyers Bonuses</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>12.9M $KAMA to 258</h1>
                    <h1>Biggest Presale Buyers.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm text-primaryDark dark:text-primary pt-3'>
                    <p>50,000 $KAMA Each</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Programs
