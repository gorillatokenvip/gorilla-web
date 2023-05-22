import { Righteous, Rubik } from "next/font/google";
import Steps from "../components/Steps";
const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const rubik = Rubik({ weight: "300", subsets: ["latin"] });
import Image from "next/image";
import chart from "../public/assets/chart2.png";
import { motion } from "framer-motion";

export default function Tokenomics({ id }) {
  return (
    <div className="w-screen flex flex-col justify-center items-center py-24 ">
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
          id={id}
          className="font-outline-1 w-full flex items-center justify-center text-white text-[54px] md:text-[60px] lg:text-[80px] pb-12"
        >
          tokenomics
        </motion.div>
        <div>
          <div className="lg:flex w-full px-0 md:px-16  justify-between items-center md:space-x-8">
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
                viewport={{ once: true }}
                className="text-white  font-outline-1 text-4xl text-center"
              >
                GORILLA Supply: <br></br>420,690,000,000,000
              </motion.div>
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
                viewport={{ once: true }}
                className="md:flex shadow-2xl max-w-[1500px] shadow-[#ffffff4D]  bg-[#575b5e] my-4 p-4 border-2 rounded-tr-2xl rounded-bl-2xl border-white"
              >
                <div className="flex flex-col text-[#f3fbfa] ">
                  <div className={rubik.className}>
                    <div className="text-2xl pb-8">
                      No Taxes, No Bullshit.<br></br><br></br> It’s that simple. 93.1% of the
                      tokens were sent to the liquidity pool, LP tokens were
                      burnt, and contract is renounced. The remaining 6.9% of
                      the supply is being held in a multi-sig wallet only to be
                      used as tokens for future centralized exchange listings,
                      bridges, and liquidity pools. This wallet is easily
                      trackable with the ENS name “gorillacexwallet.eth”
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
                    damping: 4,
                    rotate: 360,
                  },
                },
              }}
              className="w-full flex justify-center   items-center lg:justify-start"
            >
              <Image
                src={chart}
                className="w-[300px] flex-shrink-0 lg:w-[900px]"
              ></Image>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
