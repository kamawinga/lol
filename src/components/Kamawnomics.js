import React from 'react';
import Image from 'next/image';
import allocPic from "../../public/images/allocations.png";

const Kamawnomics = () => {
  return (
    <div className='my-20'>

        <h2 className='font-bold text-8xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Kamawnomic$
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
                    <h1>Ownership is RENOUNCED</h1>
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
                    <h1>Mint Authority is REVOKED</h1>
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
                    <h1>NO Buy/Sell Tax</h1>
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
                    <h1>LP Token Will Be Burned</h1>
                </div>
            </div>

            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Fair Tokenomics</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                <h1>9.9% Team & 12.1% Burn</h1>
                </div>
            </div>

            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Daily Burn 1.21%</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>Burn 12.1% in 10 Days</h1>
                </div>
            </div>

        </div>
        
        <div className='w-full grid grid-cols-1 gap-16 sm:gap-8 items-center justify-center pt-16 pb-20'>
            <div className='col-span-1 relative h-200 rounded-2xl border-2 border-solid border-dark
            bg-radialSunDark p-8 dark:bg-radialSunDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center' >
                    <Image src={allocPic} alt='$KAMAW Memecoin Token Allocations' />
                </div>
            </div>
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
                    <h1>Airdrop for marketing</h1>
                </div>
            </div>

            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Roadmap</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>Clear Roadmap</h1>
                </div>
            </div>

            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>LP Launch</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>70% of Raised $SOL for LP</h1>
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
                <h1>70% of raise for LP</h1>
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
                    <h1>Bonus Rewards</h1>
                </div>
            </div>

            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-3'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Competitions</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>Weekly Winners Rewarded</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kamawnomics
