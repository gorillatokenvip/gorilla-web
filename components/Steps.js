import Image from "next/image";

import { motion } from "framer-motion";
import { Righteous, Rubik } from "next/font/google";
const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const rubik = Rubik({ weight: "300", subsets: ["latin"] });

export default function Steps({ title, sub, src }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="md:flex justify-center items-center shadow-2xl shadow-[#ffffff4D] w-4/5 bg-[#575b5e] my-4 p-4 border-2 rounded-tr-2xl rounded-bl-2xl border-white "
    >
      <div className="min-w-[250px] flex justify-center items-center">
        <Image
          src={src}
          height={150}
          width={200}
          className="p-4  flex-shrink-0 "
        ></Image>
      </div>
      <div className="flex flex-col text-[#f3fbfa]  pl-8">
        <div className={righteous.className}>
          <div className="text-xl md:text-5xl pb-4">{title}</div>
        </div>
        <div className={rubik.className}>
          <div className="text-lg pb-8">{sub}</div>
        </div>
      </div>
    </motion.div>
  );
}
