"use client";
import { CoinData } from "@/types/types";
import { FaBitcoin } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   { name: "Mon", value: 63000 },
//   { name: "Tue", value: 64500 },
//   { name: "Wed", value: 64200 },
//   { name: "Thu", value: 65800 },
//   { name: "Fri", value: 65000 },
// ];

export default function Chart({ data }: { data: CoinData }) {
  return (
    <div className="h-[500px] w-full rounded-xl p-4 text-gray-800 border border-gray-200 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div
            className={`text-4xl mb-4 ${
              data.coin === "Bitcoin" ? "text-yellow-400" : "text-purple-400"
            }`}
          >
            {data.coin === "Bitcoin" ? <FaBitcoin /> : <SiSolana />}
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              {data.coin} ({data.symbol})
            </h2>
            <p>{data.symbol}</p>
          </div>
        </div>
        <div className="text-end">
          <h3 className="text-2xl font-semibold">${data.price}</h3>
          <p>
            {data.changePercent.startsWith("-") ? (
              <span className="text-red-500">{data.changePercent}</span>
            ) : (
              <span className="text-green-500">+{data.changePercent}</span>
            )}
          </p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data.chatData}>
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke={data.coin === "Bitcoin" ? "#fde047" : "#a855f7"}
            strokeWidth={3}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
