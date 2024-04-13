import { useRouter } from 'next/router';
import { LinkedInIcon, TwitterIcon, TelegramIcon, InstagramIcon, MediumIcon, GithubIcon, YouTubeIcon, SunIcon, MoonIcon } from './Icons';
import Logo from './Logo';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-1 rounded-md inline-block bg-primaryDark dark:bg-primary absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 text-primaryDark dark:text-primary
            ${router.asPath === href ? 'w-full h1 rounded-md' : 'w-0'}
            `}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return(
        <button href={href} className={`${className} relative group text-dark dark:text-dark my-2`} onClick={handleClick}>
            {title}

            <span className={`
            h-1 rounded-md inline-block bg-primaryDark dark:bg-primary absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 text-primaryDark dark:text-primary
            ${router.asPath === href ? 'w-full h1 rounded-md' : 'w-0'}
            `}
            >
                &nbsp;
            </span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

  return (
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative'
    >
        <div className='
        w-[95%] h-[10.5%] flex justify-between items-center fixed top-10 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-light/40 dark:bg-primaryDark/40 rounded-lg backdrop-blur-sm px-8 py-8 z-30
        '>
            
            <nav className="flex 2xl:pb-3 xl:pb-3 justify-center">
                    <Logo />
            </nav>

            <buton className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark hover:bg-light/50 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark hover:bg-light/50 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-00'} `}></span>
                <span className={`bg-dark hover:bg-light/50 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </buton>
            <div className='w-full flex justify-between items-center lg:hidden'>
                
                <nav className="flex 2xl:pb-3 xl:pb-3 justify-center">
                    {/* <Logo /> */}
                </nav>

                <nav>
                    <CustomLink href="/" title="Home" className='mr-10 xl:mr-5 2xl:mr-7 text-primaryDark dark:text-primary'/>
                    <CustomLink href="#kamanomics" title="Kamanomics" className='mr-6 xl:mr-3 2xl:mr-4 text-primaryDark dark:text-primary'/>
                    <CustomLink href="#programs" title="Programs" className='mx-6 xl:mx-3 2xl:mx-4 text-primaryDark dark:text-primary'/>
                    <CustomLink href="#roadmap" title="Roadmap" className='mx-6 xl:mx-3 2xl:mx-4 text-primaryDark dark:text-primary'/>
                    <CustomLink href="#footer" title="Disclaimer" className='mx-6 xl:mx-3 2xl:mx-4 text-primaryDark dark:text-primary'/>
                </nav>

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
        </div>
                        
        {
            isOpen ?

            <motion.div
            initial={ {scale:0, opacity:0, x: "-50%", y:"-50%"} }
            animate={ {scale:1, opacity:1}}
            className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-primary/40 dark:bg-primaryDark/40 rounded-lg backdrop-blur-md py-32
            '>
                <nav className='flex items-center flex-col justify-center'>
                    <CustomMobileLink href="/" title="Home" className='text-primaryDark dark:text-primary' toggle={handleClick} />
                    <CustomMobileLink href="#kamanomics" title="Kamanomics" className='text-primaryDark dark:text-primary' toggle={handleClick} />
                    <CustomMobileLink href="#programs" title="Programs" className='text-primaryDark dark:text-primary' toggle={handleClick} />
                    <CustomMobileLink href="#roadmap" title="Roadmap" className='text-primaryDark dark:text-primary' toggle={handleClick} />
                    <CustomMobileLink href="#footer" title="Disclaimer" className='text-primaryDark dark:text-primary' toggle={handleClick} />
                </nav>

                <nav className="flex items-center justify-center flex-wrap mt-2">
                    
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
                    className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                     sm:mx-1`}
                    >
                        {
                        mode === 'dark'?
                        <SunIcon className={"fill-dark"}/>
                        : <MoonIcon className={"fill-dark"}/>
                        }
                    </button>
                </nav>
            </motion.div>

            : null
        }
    </header>
  )
}

export default NavBar;
