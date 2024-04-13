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
import YouTubeVideo from '@/components/YouTubeVideo';
import CountdownTimer from '@/components/CountdownTimer';

const inter = Inter({ subsets: ['latin'] })


const FramerImage = motion(Image);

const FullCard = ({img, title, description, link, buttonTitle}) => {

  return(
    <article
        className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
    >
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'
      />
      
      <div className='w-1/2 cursor-pointer overflow-hidden ronded-lg lg:w-full'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 50vw"
        />
      </div>
      <div className='w-full flex flex-col items-start justify-between pl-6'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
          <p className='my-2 font-medium text-dark dark:text-light'>{description}</p>
          <div className='mt-2 flex items-center'>
            
            <motion.a href={link} target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="mt-2 flex items-center"
            >               
              <Link
                href={link}
                target="_blank"
                className='rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold'
              > {buttonTitle}</Link>
            </motion.a>
          </div>
      </div>
    </article>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>$KAMA Memecoin</title>
        <meta name="description" content="The Website of $KAMA (Kamawinga) Memecoin" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full main-h-screen dark:text-light'>
        
        <Layout className='pt-8 md:p-8 md:pt-8 sm:pt-8 lg:pt-8 xl:pt-8'>

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
              
              <AnimatedText text="Kamawinga!" className='!text-5xl !text-center text-primary
              xl:!text-4xl lg:!text-center lg:!text-5xl md:!text5xl sm:text-3xl dark:text-primaryDark
              '/>

              <p className='my-4 text-lg font-medium md:text-lg sm:text-lg'>
                If Kama had wheels, he’d be a bike. Kama can be whatever. 
              </p>

              <div className='flex items-center self-center mt-2 lg:self-center'>
                <Link href="https://t.me/kamawinga_bot" target={"_blank"}
                className="flex items-center bg-primaryDark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-primary hover:text-dark border-2 border-solid border-dark hover:border-dark
                dark:bg-primary dark:text-dark hover:dark:bg-primaryDark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base
                "
                download={true}
                >Join Presale <LinkArrow className={"w-6 ml-1"}/>
                </Link>

                <Link href="https://t.me/kamawinga_bot" target={"_blank"}
                className="ml-10 flex items-center bg-primaryDark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-primary hover:text-dark border-2 border-solid border-dark hover:border-dark
                dark:bg-primary dark:text-dark hover:dark:bg-primaryDark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base
                "
                download={true}
                >Join Airdrop <LinkArrow className={"w-6 ml-1"}/>
                </Link>
              </div>

              <div className='flex items-center self-center mt-2 lg:self-center'>
                <CountdownTimer />
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

          <div id='watch'>
            <YouTubeVideo/>
          </div>

        </Layout>

        <div className='absolute right-8 bottom-8 inline-block w-24 md:bottom-[300px] lg:bottom-[260px]'>
          <Image src={lightBulb} alt="$KAMA Memecoin" className='w-full h-auto' />
        </div>

      </main>
    </>
  )
}
