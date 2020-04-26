import React from "react"
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

const AboutPage = () => {
  return (
    <>
      <SEO title="ABOUT" />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-small"
      >
        {/* <motion.div className="content" variants={item} transition="easeInOut">
          <h1 className="text-5xl tracking-widest">ABOUT</h1>
        </motion.div>

        <motion.div className="content" variants={item} transition="easeInOut">
          <hr className="block my-8" />
        </motion.div> */}

        <motion.div
          className="content flex flex-col"
          variants={item}
          transition="easeInOut"
        >
          <div className="mr-8 ">
            <p>
              <strong>Noon Passama</strong> is a Bangkok-born jewellery designer. In 2007, she
              moved to the Netherlands where she graduated from Gerrit Rietveld
              Academie. Her main interest is based on existing jewellery
              typologies in connection to broader subjects, for example,
              identity and language. Noon works across different genres of
              jewellery and collaborates between diverse artistic fields. She is
              interested in jewellery’s roles in different contexts.
            </p>
          </div>
          <div className="">
            <p>
              <strong>Barbara Langendijk</strong> is a Dutch fashion designer. She studied
              fashion design at ArtEZ Fashion Masters and HKU University of the
              Arts. Since her graduation Barbara has been working on new
              interpretations of garment construction by combining it with
              traditional crafts, cultures, and rituals. She often collaborates
              with artists from other disciplines resulting in interdisciplinary
              works which play with mainstream fashion codes.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default AboutPage
