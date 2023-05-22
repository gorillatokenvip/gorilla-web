import { Righteous, Rubik } from "next/font/google";
const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const rubik = Rubik({ weight: "400", subsets: ["latin"] });
import Image from "next/image";
import gorilla from "../public/assets/cap.png";
import hat from "../public/assets/chimpGorilla-2.png";
import { motion } from "framer-motion";

export default function Roadmap({ id }) {
  return (
    <div className="w-screen flex flex-col justify-center items-center pb-24 ">
      <div className={righteous.className}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {
              scale: 0.6,
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
          className="font-outline-1 w-full flex items-center justify-center text-white text-[80px] py-12"
        >
          Gorillamap
        </motion.div>
        <div
          id={id}
          className="md:flex  justify-center lg:space-x-8 items-center "
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {
                scale: 0,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 2,
                  rotate: 360,
                },
              },
            }}
          >
            <Image width={300} height={300} src={hat} className="md:ml-0 ml-8 " ></Image>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:flex text-center items-center justify-center  shadow-2xl shadow-[#ffffff4D]  bg-[#575b5e] my-4 p-4 border-2 rounded-tr-2xl rounded-bl-2xl border-white"
          >
            <div className="flex flex-col text-[#f3fbfa]  font-outline-0 ">
              <div className={rubik.className}>
                <div className="text-2xl pb-4">
                  Phase 1: Gorilla
                  <br></br>
                  Phase 2: Gorilla and HODL
                  <br></br>
                  Phase 3: Gorilla Takeover
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {
                scale: 0,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 2,
                  rotate: 360,
                },
              },
            }}
          >
            <Image src={gorilla} width={300} height={300} ></Image>
          </motion.div>
        </div>
      </div>
      <div className={rubik.className}>
        <div className="w-full flex justify-center text-center">
          <div className="text-[#f3fbfa]  w-3/4 font-outline-0 text-2xl py-8">
            All jokes aside, here is a rough sketch of $Gorilla path ahead. We dont
            wan’t to give everything away on day 1, Expect surprises along the
            way ;)
          </div>
        </div>
      </div>
      <div className="w-full md:flex justify-around px-4 md:px-32 ">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:flex w-full md:max-w-[30%] items-start justify-center  shadow-2xl shadow-[#ffffff4D]  bg-[#575b5e] my-4 p-4 border-2 rounded-tr-2xl rounded-bl-2xl border-white"
        >
          <div className="flex items-center flex-col text-[#f3fbfa]  font-outline-0 ">
            <div className={righteous.className}>
              <div className="text-5xl py-4">Phase 1</div>
            </div>

            <div className={rubik.className}>
              <div className="text-xl pb-4 px-12">
                &#8226; Launch <br></br>&#8226;CoinGecko/Coinmarketcap Listings{" "}
                <br></br>&#8226; 1,000+ Gorillas <br></br>&#8226; Get $Gorilla
                Trending on twitter with our Gorillaetic power
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:flex w-full md:max-w-[30%] items-start justify-center  shadow-2xl shadow-[#ffffff4D]  bg-[#575b5e] my-4 p-4 border-2 rounded-tr-2xl rounded-bl-2xl border-white"
        >
          <div className="flex items-center flex-col text-[#f3fbfa] font-outline-0 ">
            <div className={righteous.className}>
              <div className="text-5xl py-4">Phase 2</div>
            </div>

            <div className={rubik.className}>
              <div className="text-xl pb-4 px-12 ">
                &#8226; Community Partnerships Gorilla Times digital newsletter
                <br></br>&#8226; Formation of token gated discord Gorilla, Gorilla
                Palace, for holders, more details tba <br></br>&#8226; CEX
                Listings 10,000+Gorillas
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:flex w-full md:max-w-[30%] items-start justify-center  shadow-2xl shadow-[#ffffff4D]  bg-[#575b5e] my-4 p-4 border-2 rounded-tr-2xl rounded-bl-2xl border-white"
        >
          <div className="flex items-center flex-col text-[#f3fbfa] font-outline-0 ">
            <div className={righteous.className}>
              <div className="text-5xl py-4">Phase 3</div>
            </div>

            <div className={rubik.className}>
              <div className="text-xl pb-4 px-12">
                &#8226; Gorilla merch <br></br>&#8226; Gorilla Academy <br></br>
                &#8226; Gorilla Tools <br></br>&#8226; T1 Exchange Listings
                100,000+ holders
                <br></br>&#8226; Gorilla Takeover
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
