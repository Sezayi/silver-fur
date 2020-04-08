import React, { useEffect } from "react"
import SEO from "../components/seo"
import Particles from "../components/fur"
import { motion } from "framer-motion"

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const IndexPage = () => {
  useEffect(() => {
    Particles.draw()

    return () => {
      Particles.clear()
    }
  })

  return (
    <>
      <SEO title="Home" />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full my-56 flex flex-col justify-center items-center absolute z-5"
      >
        <motion.div variants={item} transition="easeInOut">
          <h1
            className="font-normal text-gray-800 text-center text-5xl"
            style={{ fontSize: 100 }}
          >
            PASSAMA / LANGENDIJK
          </h1>
        </motion.div>

        <motion.div variants={item} transition="easeInOut">
          <div className="font-medium text-gray-800 text-2xl">
            A GRANDEUR ADVENTURE INTO FUR
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default IndexPage
