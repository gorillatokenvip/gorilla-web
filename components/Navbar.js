import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Righteous } from "next/font/google";
import logo from "../public/assets/logo1.2.png";


const righteous = Righteous({ weight: "400", subsets: ["latin"] });



export default function Home() {
  const [navbar, setNavbar] = useState(false);

  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };
  return (
    <div>
     
      <nav className="w-screen bg-[#575b5e] shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex w-full items-center justify-between py-3 md:py-5 md:block">
             <div className="flex justify-center items-center">
                <Image width={100} src={logo}  />
               </div>
             
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
                <div className={righteous.className}>
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-[#f3fbfa] text-2xl">
                  <div className="cursor-pointer" onClick={() => goToSection("#home")} >
                    home
                  </div>
                </li>
                <li className="text-[#f3fbfa] text-2xl">
                  <div className="cursor-pointer" onClick={() => goToSection("#about")} >
                    about
                  </div>
                </li>
                <li className="text-[#f3fbfa] text-2xl">
                  <div className="cursor-pointer" onClick={() => goToSection("#how")} >
                    how to buy
                  </div>
                </li>
                <li className="text-[#f3fbfa] text-2xl">
                  <div className="cursor-pointer" onClick={() => goToSection("#token")}>
                    tokenomics
                  </div>
                </li>
                <li className="text-[#f3fbfa] text-2xl">
                  <div className="cursor-pointer" onClick={() => goToSection("#road")}>
                   roadmap
                  </div>
                </li>
                 <div ><div className={righteous.className}>
            <div className="px-4 text-[#f3fbfa] rounded-3xl flex items-center py-4 justify-center border border-white hover:bg-gray-700 hover:text-white">
                <Link href="https://app.uniswap.org/#/tokens/ethereum/0x13d0ff7b89824b0862725cce4b22bcdcf196473f">
                buy now</Link>
            </div></div>
          </div>
              </ul>
              </div>
            </div>
          </div>
          
          <div className="w-1/12"></div>
         
        </div>
      </nav>
     
    </div>
  );
}