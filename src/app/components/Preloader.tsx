"use client";
import { motion } from "framer-motion";
import { FaBitcoin } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import LoadingBar from "./LoadingBar";

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
      <div className="flex flex-col gap-2 items-center animate-pulse">
        <p className="text-gray-900 text-2xl font-bold">Loading Crypto Data</p>
        <p className="text-md  text-gray-500 ">
          Fetching Bitcoin & Solana rates...
        </p>
      </div>
      <LoadingBar />
    </div>
  );
}
