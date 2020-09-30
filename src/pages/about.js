import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"

import Logo from "../images/logo-creative-industries-nl.jpg"


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
          <p>
            <h3 className="font-bold">Project Passama/Langendijk</h3> The starting point for our research
            project is the first collaborative collection we worked on in 2017,
            which intertwined jewellery and fashion. In the previous project, we
            combined a technical textile with precious metal and called the
            outcome “silver fur”. Inspired by this concept, we decided to
            develop our new project around several subjects related to fur. In
            contrast to the present situation of fashion, which is marked by
            over-consumption and low quality products, jewellery pieces can stay
            in a shop for longer than one season and are valued much higher. Our
            intention of this project is to create research-based work that is
            meaningful and valuable. For us, fur is a material which relates to
            fashion and jewellery. It symbolises wealth, power, glamour,
            heritage and, unavoidably, animal cruelty. It is a controversial
            material that has been continuously utilised in products of fashion
            and jewellery. We incorporate the values attached to fur, whether
            considered negative or positive, in our work and materialise them
            through techniques and materials from both our working fields. In
            this project, we work as interdisciplinary designers. We researched,
            brainstormed and produced each item together in every step in the
            process. Our main interests, either as jewellery or fashion
            designer, did not limit our ideas, techniques, tasks and
            responsibilities. We also collaborated with creative professionals
            and producers to develop our own materials and products.{" "}
          </p>
        </motion.div>

        <motion.div
          className="content flex flex-col"
          variants={item}
          transition="easeInOut"
        >
          <div>
            <p>
              <h3 className="font-bold">Noon Passama</h3> Noon Passama is a Bangkok-born jewellery
              designer. In 2007, she moved to the Netherlands where she
              graduated from Gerrit Rietveld Academie. Her main interest is
              based on existing jewellery typologies in connection to broader
              subjects, for example, identity and language. Noon works across
              different genres of jewellery and collaborates between diverse
              artistic fields. She is interested in jewellery’s roles in
              different contexts.
            </p>
          </div>
          <div>
            <p>
              <h3 className="font-bold">Barbara Langendijk</h3>
              Barbara Langendijk is a Dutch fashion designer.
              She studied fashion design at ArtEZ Fashion Masters and HKU
              University of the Arts. Since her graduation Barbara has been
              working on new interpretations of garment construction by
              combining it with traditional crafts, cultures, and rituals. She
              often collaborates with artists from other disciplines resulting
              in interdisciplinary works which play with mainstream fashion
              codes.
            </p>
          </div>
        </motion.div>
        <motion.div className="content mt-8" variants={item} transition="easeInOut">
         
          <h3 className="font-bold">This project is funded by</h3>
          <img className="lg:w-1/5 mt-8 mb-16" src={Logo} alt="Logo Creative Industries NL"></img>
        </motion.div>
        <motion.div className="content mb-16" variants={item} transition="easeInOut">
          <h3 className="font-bold">Collaborative partners</h3>
          <p className="my-2">Femke de Vries</p>
          <p className="my-2">Frank Bloem - The Snifferoo</p>
          <p className="my-2">Milou Voorwinden and Suzanne Oude Hengel</p>
          <p className="my-2">Saskia Stöckler</p>
          <p className="my-2">The Knitwear Lab</p>
          <p className="my-2">Team Peter Stigter</p>
        </motion.div>
        <motion.div className="content" variants={item} transition="easeInOut">
          <h3 className="font-bold">Animation / Webdesign</h3>
          <p className="my-2">Sezayi Arslan</p>
        </motion.div>
      </motion.section>
    </>
  )
}

export default AboutPage
