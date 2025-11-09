"use client";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen   font-sans items-center w-full max-w-7xl  bg-white  mx-auto ">
      {!loading && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full sticky top-0 left-4 z-10"
        >
          <Header />
        </motion.div>
      )}
      <main className="flex w-full flex-col justify-between px-4">
        {loading ? (
          <Preloader />
        ) : (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Dashboard />
          </motion.div>
        )}
      </main>
    </div>
  );
}
