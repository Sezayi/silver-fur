import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className="container"
        >
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </motion.section>
  </>
)

export default NotFoundPage
