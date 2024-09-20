import { motion } from "framer-motion";
import Inputs from "./Pages/Inputs";
import { User, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordChecker from "./Pages/PasswordChecker";
import { useAuthStore } from "../store/authStore.js";
import { useNavigate } from "react-router-dom";



export default function Singup() {

  const {signup} = useAuthStore();
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handlerSubmitHere = async(e) => {
    e.preventDefault();
    try {
       await signup(email, password, name)
       navigate('/verify-email')
    } catch (error) {

    }
    console.log("Form submitted");
  };

 
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl shadow-lg rounded-2xl overflow-hidden"
    >
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Create an account
        </h1>

        {/* Adding a form here */}
        <form onSubmit={handlerSubmitHere}>
          <Inputs
            icon={User}
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Inputs
            icon={Mail}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Inputs
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Password regex */}
          <PasswordChecker password={password} />
          <motion.button
          className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
          font-bold rounded-lg shadow-lg hover:from-green-600
          hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
           focus:ring-offset-gray-900 transition duration-200'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type='submit'
          >
            Sing Up
          </motion.button>
        </form>
      </div>
      
      {/* Adding a link to login page */}
      <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center'>
				<p className='text-sm text-gray-400'>
					Already have an account?{" "}
					<Link to={"/singin"} className='text-green-400 hover:underline'>
						Login
					</Link>
				</p>
			</div>

    </motion.div>
  );
}
