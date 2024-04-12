import React from 'react';
import Image from 'next/image';
import allocPic from "../../public/images/allocations.png";

const Kamanomics = () => {
  return (
    <div className='my-64'>

        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Kamanomic$
        </h2>

        <div className='w-full grid grid-cols-3 gap-16 sm:gap-8 items-center justify-center'>
            
            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Renounced</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>Contract ownership is RENOUNCED.</h1>
                </div>
            </div>

            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Revoked Mint</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>Mint Authority is REVOKED.</h1>
                </div>
            </div>

            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>0% Tax</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>NO Buy/Sell Tax.</h1>
                </div>
            </div>

        </div>
        
        <div className='w-full grid grid-cols-3 gap-16 sm:gap-8 items-center justify-center pt-16'>
            
            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>LP Burn</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>LP Token Will Be Burned.</h1>
                </div>
            </div>

            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Yield Farming</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                <h1>Farm 1% of Suply daily for 7 days.</h1>
                </div>
            </div>

            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Daily Token Burn</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>Burn 1% of Suply daily for 7 days.</h1>
                </div>
            </div>

        </div>

        <div className='flex w-full flex-col items-center justify-center' >
            <Image src={allocPic} alt='$KAMA Memecoin Token Allocations' />
        </div>
        
        <div className='w-full grid grid-cols-3 gap-16 sm:gap-8 items-center justify-center'>
            
            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Airdrop</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>Airdrop for marketing.</h1>
                </div>
            </div>

            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Marketing</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>Promotions for Marketing.</h1>
                </div>
            </div>

            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Referrals</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>Referrals for Marketing.</h1>
                </div>
            </div>

        </div>
        
        <div className='w-full grid grid-cols-3 gap-16 sm:gap-8 items-center justify-center pt-16'>
            
            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Presale</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                <h1>Presale for early liquidity.</h1>
                </div>
            </div>

            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Bonuses</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>Bonuses for winners.</h1>
                </div>
            </div>

            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Giveaways</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>Active Community Giveaways.</h1>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Kamanomics
