import React, { useEffect, useRef } from 'react';
import presalcommunityBonusesPic from "../../public/images/presale.png";
import airdropPic from "../../public/images/airdrop.png";
import referralsPic from "../../public/images/referrals.png";
import communityBonusesPic from "../../public/images/community-bonuses.png";
import firstBuyersBonusesPic from "../../public/images/first-buyers-bonuses.png";
import biggestBuyersBonusesPic from "../../public/images/biggest-buyers-bonuses.png";
import Image from 'next/image';

const Programs = () => {
  return (
    <div className='my-64'>
        
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
           Program$
        </h2>

        <div className='grid w-full grid-cols-6 gap-16 sm:gap-8'>
            
            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
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
                    <h1>30% of $KAMA supply for Presale.</h1>
                    <h1>Open for Only 7 Days.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm text-primaryDark dark:text-primary pt-3'>
                    <p>Min. 0.1 SOL - 10 SOL Max.</p>
                </div>
            </div>

            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
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
                    <h1>4% of $KAMA supply for Top 2,580</h1>
                    <h1>participants with he most refferals.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm text-primaryDark dark:text-primary pt-3'>
                    <p>Alloc. relative to referrals share.</p>
                </div>
            </div>

            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
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
                    <h1>1% of $KAMA supply for Top 258</h1>
                    <h1>accounts with he most refferals.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm text-primaryDark dark:text-primary pt-3'>
                    <p>Alloc. relative to referrals share.</p>
                </div>
            </div>
        </div>
        
        <div className='grid w-full grid-cols-6 gap-16 sm:gap-8 pt-16'>
            
            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
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
                    <h1>Community Bonuses</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>1% of $KAMA supply for 258</h1>
                    <h1>active community contributors.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm text-primaryDark dark:text-primary pt-3'>
                    <p>100,000 $KAMA Each.</p>
                </div>
            </div>

            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
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
                    <h1>First Buyers Bonuses</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>0.5% of $KAMA supply for</h1>
                    <h1>the First 258 Presale Buyers.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm text-primaryDark dark:text-primary pt-3'>
                <p>Alloc. relative to presale share.</p>
                </div>
            </div>

            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div>
                    <Image src={biggestBuyersBonusesPic} alt='$KAMA Memecoin' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                    />
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Biggest Buyers Bonuses</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm pt-3'>
                    <h1>0.5% of $KAMA supply for</h1>
                    <h1>the 258 Biggest Presale Buyers.</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm text-primaryDark dark:text-primary pt-3'>
                <p>Alloc. relative to presale share.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Programs