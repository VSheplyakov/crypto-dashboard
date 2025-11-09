"use client";
import { motion } from "framer-motion";
import { FaBitcoin } from "react-icons/fa";
import { SiSolana } from "react-icons/si";

export default function Preloader() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-dvh">
      <div className="flex gap-8">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="text-6xl mb-4 text-yellow-400"
        >
          <FaBitcoin />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="text-6xl mb-4 text-purple-400"
        >
          <SiSolana />
        </motion.div>
      </div>
      <div className="flex flex-col gap-4 items-center ">
        <p className="text-gray-900 text-2xl">Loading Crypto Data</p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-xl animate-pulse text-gray-500 ">
            Fetching Bitcoin & Solana rates...
          </p>
          <p className="text-lg animate-pulse"></p>
        </motion.div>
      </div>
    </div>
  );
}
