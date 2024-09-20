import { useState } from "react";
import { motion } from "framer-motion";

export default function Singin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <motion.div>
        <h1>Singin side</h1>
    </motion.div>
  )
}
