import React, { useEffect } from "react";
import SEO from "../components/seo";
import Particles from "../components/fur"

const IndexPage = () => {

  useEffect(() => {
    Particles.draw()

    return () => {
      Particles.clear()
    }
  });

  return (
    <>
      <SEO title="Home" />
      <div className=" w-full my-56 flex flex-col justify-center items-center absolute z-50">
        <h1 className="font-normal text-gray-700 text-center sm:text-6xl" style={{fontSize: 120}} >SILVER FUR</h1>
        <p className="font-medium text-gray-700 text-3xl">PARIS - 12 MAY - 2020</p>     
      </div>
    </>
  )
}

export default IndexPage  