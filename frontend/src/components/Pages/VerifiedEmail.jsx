/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import {motion} from 'framer-motion'

export default function VerifiedEmail() {
    
    const [code, setCode] = useState(["","","","","",""])
    const inputsRef = useRef([])
    const navigate = useNavigate()


    const handleChange = (index, value) => {
    }

    const handleKeyDown = (index, e) => {
    }

    
  return (
    <div className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md'
			>
                <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
					Verify Your Email
				</h2>  
                <p className='text-center text-gray-300 mb-6'>Enter the 6-digit code sent to your email address.</p>

                <form className="space-y-6">
                    <div className="flex justify-between">
                    {code.map((digit, index) => (
							<input
								key={index}
								ref={(el) => (inputsRef.current[index] = el)}
								type='text'
								maxLength='6'
								value={digit}
								onChange={(e) => handleChange(index, e.target.value)}
								onKeyDown={(e) => handleKeyDown(index, e)}
								className='w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-green-500 focus:outline-none'
							/>
						))}
                    </div>
                </form>
            </motion.div>
   </div>           
  )
}
