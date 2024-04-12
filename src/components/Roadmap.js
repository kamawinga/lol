import { React, useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon"
import LiIconDone from "./LiIconDone"
import LiIconProgress from "./LiIconProgress"

const Details = ({ status, time, title, info}) => {
    const ref = useRef(null)

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between  md:w-[80-%]'>
            
            <LiIcon reference={ref}/> 
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 0.5, status: "spring"}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {title}
                </h3>
                <h3 className='capitalize font-bold text-kamaGreenDark dark:text-kamaGreen text-l sm:text-lg xs:text-sm'>
                    {status}
                </h3>
                <span className='capitalize font-medium text-primaryDark/75 dark:text-light/75 sm:text-lg xs:text-sm'>
                    {time}
                </span>
                <p className='font-medium w-full md:text-sm'>{info}</p>
            </motion.div>
        </li>
    );
}


const DoneDetails = ({ status, time, title, info}) => {
    const ref = useRef(null)

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between  md:w-[80-%]'>
            
            <LiIconDone reference={ref}/> 
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 0.5, status: "spring"}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {title}
                </h3>
                <h3 className='capitalize font-bold text-kamaGreenDark dark:text-kamaGreen text-l sm:text-lg xs:text-sm'>
                    {status}
                </h3>
                <span className='capitalize font-medium text-primaryDark/75 dark:text-light/75 sm:text-lg xs:text-sm'>
                    {time}
                </span>
                <p className='font-medium w-full md:text-sm'>{info}</p>
            </motion.div>
        </li>
    );
}

const ProgressDetails = ({ status, time, title, info}) => {
    const ref = useRef(null)

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between  md:w-[80-%]'>
            
            <LiIconProgress reference={ref}/> 
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 0.5, status: "spring"}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {title}
                </h3>
                <h3 className='capitalize font-bold text-primary dark:text-primary text-l sm:text-lg xs:text-sm'>
                    {status}
                </h3>
                <span className='capitalize font-medium text-primaryDark/75 dark:text-light/75 sm:text-lg xs:text-sm'>
                    {time}
                </span>
                <p className='font-medium w-full md:text-sm'>{info}</p>
            </motion.div>
        </li>
    );
}

const Roadmap = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"],
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Roadmap
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div
            style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
                md:w-[2px] md:left-[30px] xs:left-[20px]
                ' />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <DoneDetails 
                title="Branding, Website and Socials"
                status="DONE"
                time=""
                info="Create branding, build website, launch X account, launch Telegram channel and group."
                />

                <DoneDetails 
                title="Deploy and Renounce Contract"
                status="DONE"
                time=""
                info="Create and deploy the SPL token contract and renounce ownership."
                />
                
                <DoneDetails 
                title="Build and Deploy Telegram Bot"
                status="DONE"
                time=""
                info="Build and deploy the $KAMA Bot for Airdrop, Presale, Referrals and Bonuses."
                />
                
                <ProgressDetails 
                title="Airdrop"
                status="PROGRESS"
                time="April 13th, 2024 - April 24th, 2024 [20:00 UTC]"
                info="Launch Airdrop Event."
                />
                
                <ProgressDetails 
                title="Presale"
                status="PROGRESS"
                time="April 13th, 2024 - April 19th, 2024 (BTC Halving) [20:00 UTC]"
                info="Launch Presale Event."
                />
                
                <Details 
                title="Initiate Marketing Campaign"
                status=""
                time="April 13th, 2024"
                info="Start Marketing Campaign."
                />
                
                <Details 
                title="Launch $KAMA, Add Liquidity and Burn LP Token"
                status=""
                time="April 19th, 2024 (BTC Halving)"
                info="Add Liquidity to the DEX and burn the LP token."
                />
                
                <Details 
                title="Presale Token Distribution"
                status=""
                time="April 21st, 2024 - 8:00 PM (UTC)"
                info="Distribute the token allocation of presale participants."
                />
                
                <Details 
                title="Airdrop & Bonuses Distribution"
                status=""
                time="April 28th, 2024"
                info="Distribute the Airdrop & Bonus allocations."
                />

                <Details 
                title="Yield Farming"
                status=""
                time="April 29th, 2024"
                info="Create yield farm for those providing Liquidity to the pool. Farm 1% of Suply daily for 7 days."
                />
                
                <Details 
                title="Token Burning"
                status=""
                time="May 7th, 2024 - May 13th, 2024"
                info="Burn $KAMA - Burn 7% over the period of 7 days (1% Burn per day)."
                />
            </ul>
        </div>
    </div>
  )
}

export default Roadmap