import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";

export default function Singin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmitHereLogin = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <motion.div>
        <h1>Singin side</h1>
    </motion.div>
  )
}
