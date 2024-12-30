import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiYoutube } from "react-icons/si"; // Removed `SiTwitter`

export const RevealBento = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        
        <Navbar />
        
        <Tools4 />
        <Tools5 />
        <Tools7 />
        <Tools6 />
        

        </motion.div>

      {/*  <SocialsBlock />
        <Tools />
        <Tools1 />
        <Tools2/>
        <Tools3 />

        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      <Footer />*/}
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 z-50 w-full bg-zinc-800 border-b border-zinc-700">
    <div className='fixed mt-6 top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-[80px] flex justify-between items-center px-4 bg-[#0a1925] rounded-3xl md:w-[50%] text-gray-300 z-50'> {/* Increased z-index to 50 */}
      {/* Logo */}
      <a href="#" className="text-2xl font-semibold text-zinc-50">
        MyPortfolio
      </a>

      {/* Navbar Links */}
      <ul className="hidden md:flex space-x-6 text-zinc-50">
        <li>
          <a href="#about" className="hover:text-red-300 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-red-300 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-red-300 transition-colors">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-zinc-50 hover:text-red-300 focus:outline-none"
        onClick={() => {
          const mobileMenu = document.getElementById('mobile-menu');
          mobileMenu.classList.toggle('hidden');
        }}
      >
        ☰ {/* Hamburger Icon */}
      </button>
    </div>

    {/* Mobile Menu */}
    <div id="mobile-menu" className="hidden md:hidden bg-zinc-800 border-t border-zinc-700">
      <ul className="flex flex-col space-y-4 px-6 py-4 text-zinc-50">
        <li>
          <a href="#about" className="hover:text-red-300 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-red-300 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-red-300 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

const Tools = () => (
  <Block className="col-span-4 row-span-3 md:row-span-3">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Tools 
     
    </h1>
    
  </Block>
);



const Tools1 = () => (
  <Block className="col-span-4 row-span-3 md:col-span-4">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Tools 1
     
    </h1>
    
  </Block>
);

const Tools2 = () => (
  <Block className="col-span-4 row-span-3 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Tools 2
     
    </h1>
    
  </Block>
);

const Tools3 = () => (
  <Block className="col-span-4 row-span-3 md:col-span-4">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Tools 3
     
    </h1>
    
  </Block>
);

const Tools7 = () => (
  <Block className="col-span-3 row-span-12 md:col-span-5 flex flex-col items-center p-4">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Experience
     
    </h1>
    
  </Block>
);

const Tools4 = () => (
  <Block className="col-span-3 row-span-2 md:col-span-3 flex flex-col items-center p-4">
    <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
    <div className="space-y-3 text-center">
      <a
        href="mailto:your.email@example.com"
        className="flex items-center justify-center space-x-2 text-lg hover:text-red-300 transition-colors"
      >
        <FiMail />
        <span>your.email@example.com</span>
      </a>
      <div className="flex items-center justify-center space-x-2">
        <FiMapPin />
        <span>Your City, Your Country</span>
      </div>
      <div className="flex space-x-4 justify-center">
        <a
          href="https://github.com/yourgithub"
          className="text-2xl hover:text-red-300 transition-colors"
        >
          <SiGithub />
        </a>
        <a
          href="https://tiktok.com/@yourtiktok"
          className="text-2xl hover:text-red-300 transition-colors"
        >
          <SiTiktok />
        </a>
        <a
          href="https://youtube.com/yourchannel"
          className="text-2xl hover:text-red-300 transition-colors"
        >
          <SiYoutube />
        </a>
      </div>
    </div>
  </Block>
);




const Tools5 = () => (
  <Block className="col-span-3 row-span-2 md:col-span-4 flex flex-col items-center p-4">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      About
     
    </h1>
    
  </Block>
);

const Tools6 = () => (
  <Block className="col-span-4 row-span-4 md:row-span-3 md:col-span-12 h-16 flex items-center justify-center">
    <h1 className="text-xl font-medium">Footer</h1>
  </Block>
);


const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a
        href="https://youtube.com"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiYoutube />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
        href="https://github.com"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-4 bg-zinc-50 md:col-span-3"
    >
      <a
        href="https://tiktok.com"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="https://example.com" // Replace this with a valid Twitter-like platform link
        className="grid h-full place-content-center text-3xl text-white"
      >
        {/* Replace this icon with something valid, if needed */}
        <FiMail />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Cyberspace</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤️ by{" "}
        <a href="https://example.com" className="text-red-300 hover:underline">
          @tomisloading
        </a>
      </p>
    </footer>
  );
};
