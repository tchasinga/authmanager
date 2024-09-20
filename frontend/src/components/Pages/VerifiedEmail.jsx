import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import {motion} from 'framer-motion'

export default function VerifiedEmail() {
    
    const [code, setCode] = useState(["","","","","",""])
    const inputsRef = useRef([])
    const navigate = useNavigate()

    
  return (
    <div className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md'
			>
                <h1>Checking emai</h1>   
            </motion.div>
   </div>           
  )
}
