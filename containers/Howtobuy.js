import Steps from "../components/Steps";
import wallet from "../public/assets/wallet.png";
import eth from "../public/assets/eth.png";
import uniswap from "../public/assets/uniswap.png";
import swap from "../public/assets/swap.png";


import { Righteous } from "next/font/google";
const righteous = Righteous({ weight: "400", subsets: ["latin"] });
import { motion } from "framer-motion";

export default function Howtobuy({ id }) {
  return (
    <div className="w-screen flex flex-col justify-center items-center mb-16 ">
      <div className={righteous.className}>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            scale: 0.6,
            opacity:0,
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
          className="w-full flex items-center justify-center font-outline-1 text-white text-[60px] md:text-[80px] py-12"
        >
          how to buy
        </motion.div>
      </div>
      <Steps
        src={wallet}
        title="create a metamask"
        sub="download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io."
      ></Steps>
      <Steps
        src={eth}
        title="get some eth"
        sub="have ETH in your wallet to switch to $GORILLA. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet."
      ></Steps>
      <Steps
        src={uniswap}
        title="go to Uniswap"
        sub="connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $GORILLA token address into Uniswap, select Gorilla, and confirm. When Metamask prompts you for a wallet signature, sign."
      ></Steps>
      <Steps
        src={swap}
        title="switch eth for $gorilla"
        sub="switch ETH for $GORILLA. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility."
      ></Steps>

      
    </div>
  );
}
