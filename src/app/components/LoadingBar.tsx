import { motion } from "framer-motion";

export default function LoadingBar() {
  return (
    <div className="w-[300px] h-2 bg-gray-200 rounded overflow-hidden my-5">
      <motion.div
        className="h-2 bg-blue-500"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 3 }}
      />
    </div>
  );
}
