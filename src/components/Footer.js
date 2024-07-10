import { useRouter } from 'next/router';
import React from 'react'
import { TwitterIcon, TelegramIcon, InstagramIcon, MediumIcon, GithubIcon, YouTubeIcon, SunIcon, MoonIcon } from './Icons';
import Layout from './Layout'
import Link from 'next/link';
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';
import Logo from './Logo';

const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();
  return(
      <Link href={href} className={`${className} relative group`}>
          {title}

          <span className={`
          h-1 inline-block bg-primary absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? 'w-full h-1' : 'w-0'}
          dark:bg-primaryDark`}
          >
              &nbsp;
          </span>
      </Link>
  )
}

const Footer = () => {

  const [mode, setMode] = useThemeSwitcher();

  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-primaryDark backdrop-blur-md
    sm:text-base
    '
    >
      <div className='bg-primary dark:bg-primaryDark px-8 py-8 lg:py-2'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
          <nav className="flex 2xl:pb-3 xl:pb-3 justify-center">
              <Logo />
          </nav>

          <div className='lg:pt-4'>
            <nav className="flex items-center justify-center flex-wrap">
              
              
              <motion.a href="https://twitter.com/kamawinga_lol" target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-6 mx-3 bg-dark rounded-md"
              >
                  <TwitterIcon />
              </motion.a>

              
              <motion.a href="https://t.me/kamawinga_lol" target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-6 mx-3"
              >
                  <TelegramIcon />
              </motion.a>
              

              {/* 
              <motion.a href="https://github.com/kamawinga" target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-6 ml-3 bg-dark text-light rounded-full"
              >
                  <GithubIcon />
              </motion.a>
              */}


              <button
              onClick={() => setMode(mode === 'light'? 'dark' : 'light')}
              className={`w-6 ml-3 flex items-center justify-center rounded-full p-1
              ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
              `}
              >
                  {
                  mode === 'dark'?
                  <SunIcon className={"fill-dark"}/>
                  : <MoonIcon className={"fill-dark"}/>
                  }
              </button>
            </nav>
          </div>
        </Layout>

        <Layout className='py-4 flex items-center justify-between lg:flex-col lg:py-6'>
            <div className='flex items-center lg:py-4'>
              <p>
                Disclaimer: $KAMAW is a meme coin with no intrinsic value or expectation of financial return. 
                The memecoin is strictly for fun and experimental and should not be considered as having any 
                monetary value. $KAMAW is completely useless and for entertainment purposes only and its use 
                beyond this scope is neither intended nor endorsed. $KAMAW is a fictional character based on 
                a living meme and does not represent a person. This website does not collect user data. 
                Neither $KAMAW nor its developer(s) assume any liability for any form of value attributed 
                to the $KAMAW memecoin or for any financial activities undertaken by users within or in relation 
                to the $KAMAW community. By purchasing $KAMAW and/or participating in the $KAMAW community and 
                its related applications and activities, you are agreeing that you have seen this disclaimer 
                and acknowledge the uselessness of the memecoin and agree to bear all the risks associated 
                with the use and/or purchase of a memecoin.
              </p>
            </div>
        </Layout>

        <Layout className='py-4 flex items-center justify-between lg:flex-col lg:py-6'>
          <span>{new Date().getFullYear} &copy; 2024-Present | All Rights Reserved.</span>
            <div className='flex items-center lg:py-4'>
                Built with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&hearts;</span>
                by&nbsp;<Link href="https://alfellati.xyz/" target={"_black"} className='underline underline-offset-2 text-primary dark:text-primaryDark'>MBA</Link>
            </div>
        </Layout>
      </div>
    </footer>
  )
}

export default Footer
