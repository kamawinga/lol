import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import Link from 'next/link';
import {LinkArrow} from '../components/Icons';
import profilePic from "../../public/images/profile/kamaprofile.png";
import AnimatedText from '../components/AnimatedText';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect';
import Roadmap from '@/components/Roadmap';
import Programs from '@/components/Programs';
import Kamanomics from '@/components/Kamanomics';
import { motion } from 'framer-motion';
import CountdownTimer from '@/components/CountdownTimer';

const inter = Inter({ subsets: ['latin'] })

const CountdownDate = new Date('April 22, 2024 23:59:59 UTC').getTime();
const CountdownTitle = <h1 className='' >Presale&nbsp;</h1>;
const FramerImage = motion(Image);

export default function Home() {
  return (
    <>
      <Head>
        <title>$KAMA Memecoin</title>
        <meta name="description" content="The Website of $KAMA (Kamawinga) Memecoin" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full main-h-screen dark:text-light'>
        
        <Layout className='pt-12 md:p-8 md:pt-8 sm:pt-8 lg:pt-8 xl:pt-8'>

          <div className="flex items-center justify-between w-full lg:flex-col">
            
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="$KAMA Memecoin" className='w-full h-auto lg:w-full md:inline-block md:w-full'
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 50vw"
              />
            </div>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>

              <AnimatedText text="KAMA Oh, KAMA Oh!" className='!text-5xl !text-center text-primaryDark
              xl:!text-4xl lg:!text-center lg:!text-5xl md:!text5xl sm:text-3xl dark:text-primary
              '/>
              
              <AnimatedText text="Kamawinga!" className='!text-5xl !text-center text-primaryDark
              xl:!text-4xl lg:!text-center lg:!text-5xl md:!text5xl sm:text-3xl dark:text-primary
              '/>

              <p className='my-4 text-lg font-medium md:text-lg sm:text-lg'>
                If Kama had wheels, he’d be a bike. Kama can be whatever. 
              </p>

              <div className='flex items-center self-center mt-2 lg:self-center'>
                <Link href="https://t.me/kamawinga_bot" target={"_blank"}
                className="flex items-center bg-primary text-primaryDark p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-primaryDark hover:text-primary border-2 border-solid border-primaryDark hover:border-primary
                dark:bg-primary dark:text-primaryDark hover:dark:bg-primaryDark hover:dark:text-primary dark:border-primaryDark hover:dark:border-primary
                md:p-2 md:px-4 md:text-base
                "
                download={true}
                >Presale <LinkArrow className={"w-6 ml-1"}/>
                </Link>

                <Link href="https://t.me/kamawinga_bot" target={"_blank"}
                className="ml-10 flex items-center bg-primaryDark text-primary p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-primary hover:text-primaryDark border-2 border-solid border-primary hover:border-primaryDark
                dark:bg-primaryDark dark:text-primary hover:dark:bg-primary hover:dark:text-primaryDark dark:border-primary hover:dark:border-primaryDark
                md:p-2 md:px-4 md:text-base
                "
                download={true}
                >Airdrop <LinkArrow className={"w-6 ml-1"}/>
                </Link>
              </div>

              <div className='flex items-center self-center mt-5 lg:self-center'>
                  <CountdownTimer
                      countdownDate={CountdownDate}
                      countdownTitle={CountdownTitle}
                  />
              </div>

            </div>

          </div>
          
          <div id='kamanomics'>
            <Kamanomics/> 
          </div>

          <div id='programs'>
            <Programs/> 
          </div>

          <div id='roadmap'>
            <Roadmap/> 
          </div>
        </Layout>

        <div className='absolute right-8 bottom-8 inline-block w-24 md:bottom-[300px] lg:bottom-[260px]'>
          <Image src={lightBulb} alt="$KAMA Memecoin" className='w-full h-auto' />
        </div>

      </main>
    </>
  )
}
