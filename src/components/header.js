import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from 'framer-motion'
import Nav from '../components/nav'

const Header = ({ siteTitle }) => (
  <header className="lg:py-8">
    
    <div className="py-4 container">
      <div className="flex flex-wrap items-center mb-4">
        {/* <motion.button
          className="w-5 h-5 mr-3 block bg-gray-700 rounded"
          animate={{ rotate: 180 }}
          transition={{
            loop: Infinity,
            duration: 2,
            ease: "anticipate"
          }}
        />

        <Link className="font-bold block text-lg md:text-xl inline-block z-10" to="/">
          {siteTitle}
        </Link> */}
        <div className="ml-auto">
        <Nav />
        </div>
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `PASSAMA / LANGENDIJK`,
}

export default Header
