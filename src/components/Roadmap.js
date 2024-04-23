import { React, useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon"
import LiIconDone from "./LiIconDone"
import LiIconProgress from "./LiIconProgress"
import CountdownTimer from './CountdownTimer';

const airdropCountdownDate = new Date('April 30, 2024 23:59:59 UTC').getTime();
const airdropCountdownTitle = <h1 className='' >Airdrop&nbsp;</h1>;

const presaleCountdownDate = new Date('April 26, 2024 23:59:59 UTC').getTime();
const presaleCountdownTitle = <h1 className='' >Presale&nbsp;</h1>;


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
                <h3 className='capitalize font-bold text-kamawGreenDark dark:text-kamawGreen text-l sm:text-lg xs:text-sm'>
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
                <h3 className='capitalize font-bold text-kamawGreenDark dark:text-kamawGreen text-l sm:text-lg xs:text-sm'>
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
                <h3 className='capitalize font-bold text-kamawYellowDark dark:text-kamawYellow text-l sm:text-lg xs:text-sm'>
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
    <div className='my-20'>
        <h2 className='font-bold text-8xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
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
                title="Branding"
                status="DONE"
                time=""
                info="Establish branding, logo, image content."
                />

                <DoneDetails 
                title="Website"
                status="DONE"
                time=""
                info="Build and deploy the website."
                />

                <DoneDetails 
                title="Socials"
                status="DONE"
                time=""
                info="Create the socials, X, Telegram channel and group."
                />

                <DoneDetails 
                title="Initiate Marketing Campaign"
                status="DONE"
                time=""
                info="Start Marketing Campaign."
                />
                

                <ProgressDetails 
                    title="Airdrop Event"
                    status="PROGRESS"
                    time=""
                    info="Ongoing Airdrop Event."
                />

                <div className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between  md:w-[80-%]'>
                    <CountdownTimer 
                        countdownDate={airdropCountdownDate}
                        countdownTitle={airdropCountdownTitle}
                    />
                </div>


                <ProgressDetails 
                title="Presale Event"
                status="PROGRESS"
                time=""
                info="Ongoing Presale Event. 70% of SOL Raised will be put in LP, the remaining 30% is for team and marketing."
                />

                <div className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between  md:w-[80-%]'>
                    <CountdownTimer 
                        countdownDate={presaleCountdownDate}
                        countdownTitle={presaleCountdownTitle}
                    />
                </div>
                

                <Details 
                title="Token Generation Event"
                status=""
                time="" // April 22nd, 2024
                info="Create and deploy the SPL token, revoke mint and renounce contract ownership."
                />
                
                <Details 
                title="Presale & Bonuses Token Distribution"
                status=""
                time="" // April 23th, 2024
                info="Distribute the token allocation of presale participants (including their bonuses)."
                />
                
                <Details 
                title="Liquidity Launch"
                status=""
                time=""
                info="Add Liquidity on DEX and burn the LP token. 70% of the SOL Raised from Presale will be added to LP, the remainder is for the Team and Marketing."
                />
                
                <Details 
                title="Kickstart Competitions"
                status=""
                time=""
                info="Start Weekly $KAMAW Meme Creators competition."
                />

                <Details 
                title="Airdrop Distribution"
                status=""
                time=""
                info="Validate and Distribute the Airdrop Bonus allocations."
                />

                <Details 
                title="Daily Token Burn"
                status=""
                time="" // May 11th, 2024 - May 21st, 2024
                info="Burn $KAMAW - Burn 12.1% over the period of 10 days (1.21% Burn per day)."
                />
            </ul>
        </div>
    </div>
  )
}

export default Roadmap