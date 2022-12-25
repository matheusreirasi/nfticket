import React from "react"
import {Welcome, Teams, Footer} from "../components/indexComponents"

import { motion } from "framer-motion"

const Home = () => {
  return (
    <motion.div
    initial={{width:"100vw"}}
    animate={{width:"-100vw"}}
    exit={{x:"0", transition:{duration:0.2}}}
    >
      <main className="flex items-center mx-28 justify-between">
        <Welcome />
        <Teams />
      </main>
      <footer>
        <Footer />
      </footer>
    </motion.div>
  )
}

export default Home
