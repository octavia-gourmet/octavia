import React from "react"

import Layout from "../../components/layout"
import ProductCard from "../../components/product-card.js"
import Anchor from "../../components/anchor"

import ron1 from "../../images/assets/ron1.jpg"
import ron2 from "../../images/assets/ron2.jpg"
import ron3 from "../../images/assets/ron3.jpg"
import ron4 from "../../images/assets/ron4.jpg"
import ron5 from "../../images/assets/ron5.jpg"
import img1 from "../../images/assets/licores.png"
import img2 from "../../images/assets/vodka.png"

const arr = [{
  name: "Ron Barceló Imperial Onyx",
  img: ron1
}, {
  name: "Ron Barceló Dorado Añejado",
  img: ron2
}, {
  name: "Ron Barceló Gran Añejo",
  img: ron3
}, {
  name: "Ron Abuelo Añejo 7 Años",
  img: ron4
}, {
  name: "Barceló Imperial Premium Blend",
  img: ron5
}, {
  name: "Ron Barceló Imperial Onyx",
  img: ron1
}, {
  name: "Ron Barceló Dorado Añejado",
  img: ron2
}, {
  name: "Ron Barceló Gran Añejo",
  img: ron3
}, {
  name: "Ron Abuelo Añejo 7 Años",
  img: ron4
}, {
  name: "Barceló Imperial Premium Blend",
  img: ron5
}]

const categories = [{
  img: img1,
  name: "TEQUILA"
}, {
  img: img2,
  name: "VODKA"
}]

const Ron = () => {
  return (
    <Layout>
      <div className="container">
        <p className="small py-10">Inicio &gt; Licores &gt; Ron </p>
        <p className="title">RON</p>
        <div className="flex justify-between items-center mt-2 mb-28">
          <p className="price">
            {arr.length}
            <span className="inline-block ml-1 currency">productos</span>
          </p>
          <div className="font-gotham-medium flex">
            <p className="px-6 flex items-center h-12 border-r border-yellow">
              FILTRAR
            </p>
            <p className="px-4 flex items-center">
              ORDENAR POR
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          {arr.map((product, index) => (
            <ProductCard
              key={index}
              img={product.img}
              alt={product.name}
              name={product.name}
              mililiters="750"
              price="12.45"
            />
          ))}
        </div>
        <button className="btn-red focus:outline-none block mx-auto">Ver más</button>
        <div className="my-14">
          <p className="title">CATEGORÍAS RELACIONADAS</p>
          <div className="flex flex-wrap mt-6 -mx-2">
            {categories.map((categorie, index) => (
              <div key={index} className="sm:w-1/2 py-4 sm:p-4">
                <img
                  src={categorie.img}
                  alt={categorie.name}
                  title={categorie.name}
                  className="w-full" />
                <Anchor text={categorie.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Ron
