import React, { useEffect } from "react"
import SEO from "../components/seo"
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

  })

  return (
    <>
      <SEO title="FUR" />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full my-56 flex flex-col justify-center items-center absolute z-5"
      >
        <motion.div variants={item} transition="easeInOut">
          <h1
            className="font-normal text-gray-800 text-3xl text-center lg:text-7xl"
          >
            PASSAMA / LANGENDIJK
          </h1>
        </motion.div>

        <motion.div variants={item} transition="easeInOut">
          <div className="font-medium text-center text-gray-800 text-xl px-4">
          A RESEARCH INTO THE VALUES AND MEANINGS OF FUR
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default IndexPage
