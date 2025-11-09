import { date, time } from "@/utils/dateUtils";
import Chart from "./Chart";
import { mockData } from "@/data/mockData";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="w-full pt-10">
      <div className="flex gap-4 lg:flex-row flex-col">
        {mockData.data.map((coinData) => {
          return <Chart key={coinData.coin} data={coinData} />;
        })}
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="flex items-center justify-center my-10 border  border-gray-200 rounded-lg">
          <p className="text-gray-700 p-4 lg:p-8 ">
            Data is mocked for demonstration purposes. Last updated:{" "}
            <span className="font-semibold">
              {date}, {time}
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
