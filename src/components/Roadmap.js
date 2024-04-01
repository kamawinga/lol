import { React, useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon"

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
                <h3 className='capitalize font-bold text-primary dark:text-primaryDark text-l sm:text-lg xs:text-sm'>
                    {status}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 sm:text-lg xs:text-sm'>
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
                <Details 
                title="Branding, Website and Socials"
                status="DONE"
                time=""
                info="Create branding, build website, launch X account, launch Telegram channel and group."
                />

                <Details 
                title="Deploy and Renounce Contract"
                status=""
                time="April 2nd, 2024"
                info="Create and deploy the SPL token contract and renounce ownership."
                />
                
                <Details 
                title="Build and Deploy Telegram Bot"
                status=""
                time="April 2nd, 2024"
                info="Build and deploy the $KAMA Bot for Airdrop, Presale, Referrals and Bonuses."
                />
                
                <Details 
                title="Start Airdrop & Presale"
                status=""
                time="April 2nd, 2024"
                info="Start Presale Event with the Airdrop and Presale."
                />
                
                <Details 
                title="End Airdrop & Presale"
                status=""
                time="April 13th, 2024"
                info="End of the Airdrop & Presale Event."
                />
                
                <Details 
                title="Add Liquidity and Burn LP Token"
                status=""
                time="April 13th, 2024"
                info="Add Liquidity to the DEX and burn the LP token."
                />
                
                <Details 
                title="Presale Token Distribution"
                status=""
                time="April 14th, 2024"
                info="Distribute the token allocation of presale participants."
                />
                
                <Details 
                title="Yield Farming"
                status=""
                time="April 15th, 2024"
                info="Create yield farm for those providing Liquidity to the pool."
                />
                
                <Details 
                title="Airdrop Token Distribution"
                status=""
                time="April 17th, 2024"
                info="Distribute the airdrop allocation amongst the airdrop participants."
                />
                
                <Details 
                title="Bonuses Distribution"
                status=""
                time="April 19th, 2024"
                info="Distribute the Bonus allocation amongst the Winners."
                />
            </ul>
        </div>
    </div>
  )
}

export default Roadmap