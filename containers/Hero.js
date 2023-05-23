import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { SocialIcon } from "react-social-icons";
import { Righteous, Rubik } from "next/font/google";
const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const rubik = Rubik({ weight: "400", subsets: ["latin"] });
import uniswap from "../public/assets/uniswap.png";
import logo from "../public/assets/logo1.2.png";

export default function Hero({ id }) {
  return (
    <div
      id={id}
      className="pt-32 px-20 md:py-80 md:flex text-xl justify-between md:justify-start md:items-center w-screen h-screen bg-hero1 bg-cover bg-center "
    >
      <div className="w-full h-1/2 md:h-full flex items-center md:pl-24 text-black justify-center">
        <div className={rubik.className}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
            className="flex flex-col mb-0 md:mb-20 text-white"
          >
            <div className="text-5xl">GORILLA</div>
            <div className="text-xl md:text-3xl py-8">
            the most memeable memecoin in existence. The dogs have had their day, it’s time for Gorilla to take reign.
            </div>
            <div className="flex space-x-4">
              {" "}
              <SocialIcon
                network="twitter"
                fgColor="white"
                url="https://twitter.com/gorillatokeneth"
                style={{ height: 80, width: 80 }}
              ></SocialIcon>
              <SocialIcon
                network="telegram"
                fgColor="white"
                url="https://t.me/+nFenPblLbVhlNzNk"
                style={{ height: 80, width: 80 }}
              ></SocialIcon>
              <Link href="">
                <Image src={uniswap} style={{ height: 90, width: 90 }}></Image>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="w-full  md:h-full  flex items-center justify-center"
      >
        <Image src={logo} className="md:mb-48 w-[300px] md:w-[500px]"></Image>
      </motion.div>
    </div>
  );
}
