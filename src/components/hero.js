import React from "react"

import Anchor from "./anchor"

const Hero = () => {
  return (
    <section className="bg-hero">
      <div className="container md:pt-24 lg:pt-56 flex flex-col items-center sm:items-start md:flex-row">
        <div className="mt-24 sm:mt-12 md:mt-0 flex flex-col items-center sm:block">
          <p className="header text-center sm:text-left">
            Línea de oro <br /> de calidad <br /> excepcional
          </p>
          <button className="btn-red mt-8 focus:outline-none">
            Agregar a la bolsa
          </button>
        </div>
        <div className="main-card">
          <div className="absolute w-80 h-64 border-4 border-beige mt-3 ml-3 py-7 px-5">
            <p className="name text-lg mb-4">
              BELUGA GOLD LINE
            </p>
            <div className="small">
              <p>Transparente y límpido.</p>
              <p className="leading-5 my-2">
                Mezcla de notas de malta y recuerdos florales.
                Es denso, sabroso, pero suave, con un final
                larguísimo y refrescante, persistente.
              </p>
              <p>Un vodka para degustar sólo.</p>
            </div>
            <Anchor text="Descubrir" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
