

import Image from "next/image";
import { SocialIcon } from 'react-social-icons';
import logo from "../public/assets/logo2.2.png";

import { Righteous, Rubik } from "next/font/google";
const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const rubik = Rubik({ weight: "400", subsets: ["latin"] });

export default function Contact() {
  return (
    <div className="w-screen flex flex-col justify-center items-center pb-24 ">
      <div className={righteous.className}>
        <div className="font-outline-1 w-full flex items-center justify-center text-white text-[80px] py-12">
          contact us
        </div>

        <div className="flex justify-center items-center">
          <Image width={180} src={logo} className="mb-4" />
         
        </div>
        <div className=" w-full justify-center items-center flex space-x-8 pt-8">
        <SocialIcon url="" network="telegram" bgColor="white" style={{ height: 100, width: 100 }}></SocialIcon>
        <SocialIcon url="https://twitter.com/gorillatokeneth" network="twitter" bgColor="white" style={{ height: 100, width: 100 }}></SocialIcon>

        <SocialIcon network="discord" bgColor="white" style={{ height: 100, width: 100 }}></SocialIcon>
</div>
<div className={rubik.className}>
        <div className="w-full flex justify-center text-center">
          <div className="text-[#f3fbfa] w-3/4 font-outline-0 text-2xl py-8">
          $gorilla coin has no association with anyone. This Gorilla is simply paying homage to a meme we all love and recognize.
          </div>
        </div>
      </div>
      <div className={rubik.className}>
        <div className="w-full flex justify-center text-center">
          <div className="text-[#f3fbfa] w-3/4 font-outline-0 text-2xl py-8">
          $Gorilla is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely taxless and for entertainment purposes only.
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
