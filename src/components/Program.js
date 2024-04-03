import React from 'react';

const Program = () => {
  return (
    <div className='my-64'>
        <div className='w-full grid grid-cols-3 gap-16 sm:gap-8 items-center justify-center'>
            
            <div className='col-span-1 relative w-[200px] h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-8'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Renounced Conract</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>The contract ownership is RENOUNCED.</h1>
                </div>
            </div>

            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-8'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Revoked Mint</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>The contract ownership is RENOUNCED.</h1>
                </div>
            </div>

            <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-primary p-8 dark:bg-primaryDark dark:border-light xl:col-span-1 md:order-1 md:col-span-8'
            >
                <div
                    className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                />
                <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryDark dark:text-primary'>
                    <h1>Revoked Freez</h1>
                </div>
                <div className='flex w-full flex-col items-center justify-center font-bold text-sm'>
                    <h1>The contract ownership is RENOUNCED.</h1>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Program
