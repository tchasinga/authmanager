import { motion } from "framer-motion";
import Inputs from "./Pages/Inputs";
import {User} from 'lucide-react'

export default function Singup() {

  const handlerSubmitHere = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl shadow-lg rounded-2xl p-6 overflow-hidden"
    >
     <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">Create an account</h1>

        {/* Adding a form here */}
        <form onSubmit={handlerSubmitHere}>
          <Inputs
             icon={User} 
             type="text"
              placeholder="type your name"
          />
        </form>
     </div>
    </motion.div>
  );
}
