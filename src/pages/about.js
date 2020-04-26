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
        <motion.div className="content" variants={item} transition="easeInOut">
          <h1 className="text-5xl tracking-widest">ABOUT</h1>
        </motion.div>

        <motion.div className="content" variants={item} transition="easeInOut">
          <hr className="block my-8" />
        </motion.div>

        <motion.div
          className="content flex flex-row"
          variants={item}
          transition="easeInOut"
        >
          <div className="mr-8 ">
            <h2 className="tracking-widest">Noon Passama</h2>
            <p>
              Noon Passama is a Bangkok-born jewellery designer. In 2007, she
              moved to the Netherlands where she graduated from Gerrit Rietveld
              Academie. Noon’s work has been exhibited in various renowned
              institutions and platforms, such as The Design Museum in London,
              Stedelijk Museum in Amsterdam, and Design Miami. Recently, her
              work is part of Medusa, Bijoux et Tabous show at Musée d’Art
              Moderne de la Ville de Paris and Non-Stick Nostalgia: Y2K
              Retrofuturism in Contemporary Jewelry exhibition at Museum of Arts
              and Design in New York. Her main interest is based on existing
              jewellery typologies in connection to broader subjects, for
              example, identity and language. Noon works across different genres
              of jewellery and collaborates between diverse artistic fields. She
              is interested in jewellery’s roles in different contexts.
            </p>
          </div>
          <div className="">
            <h2 className="tracking-widest">Barbara Langendijk</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default AboutPage
