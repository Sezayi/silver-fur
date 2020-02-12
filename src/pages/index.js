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
        className="w-full my-56 flex flex-col justify-center items-center absolute z-50"
      >
        <motion.div className="content" variants={item} transition="easeInOut">
          <h1
            className="font-normal text-gray-800 text-center sm:text-6xl"
            style={{ fontSize: 120 }}
          >
            SILVER FUR
          </h1>
        </motion.div>

        <motion.div className="content" variants={item} transition="easeInOut">
          <div className="font-serif font-medium text-gray-800 text-2xl">
            PARIS - 12 MAY - 2020
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default IndexPage
