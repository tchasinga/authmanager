import { motion } from "framer-motion";

export default function Singup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl shadow-lg rounded-2xl p-6 overflow-hidden"
    >
      <h1>Singup side</h1>
    </motion.div>
  );
}
