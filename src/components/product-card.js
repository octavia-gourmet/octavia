import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { StoreContext } from '../context/StoreContext';

import Shop from '../images/svg/btn-shop.svg';
import { ToastContainer, toast } from 'react-toastify';
import notavailable from '../images/assets/not-available.png';
const ProductCard = ({
  image,
  name,
  handle,
  mililiters,
  price,
  className,
  btnClassName,
  variantId,
}) => {
  const { addProductToCart } = useContext(StoreContext);

  //cambia imagenes a undefined mienmtras carga
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { absolutePath: { regex: "/images/assets/product-3.jpg/" } }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                originalImg
              }
            }
          }
        }
      }
    }
  `);

  return (
    <article className={className}>
      <div className="bg-white mb-12">
        <div
          className="p-9 border border-beige relative"
          style={{ minHeight: '503px' }}
        >
          {image === null || image === undefined ? (
            <img
              src={notavailable}
              className="w-96  h-full"
              alt="name"
              style={{ paddingTop: '115.5px', paddingBottom: '104.5px' }}
            />
          ) : (
            <Img
              fluid={image.localFile.childImageSharp.fluid}
              alt={name}
              title={name}
            />
          )}
          <button
            className={btnClassName}
            onClick={() => {
              addProductToCart(variantId).then((res) => {
                toast.dark('Item agregado', {
                  position: 'top-right',
                  autoClose: 1000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              });
            }}
          >
            <Shop />
          </button>
        </div>
        <div className="flex flex-col items-start">
          <Link
            to={`/${handle}`}
            className="name text-lg sm:text-base md:text-sm lg:text-base xl:text-lg mt-4 "
          >
            {name}
          </Link>
          <p className="mililiters my-1">{mililiters} oz</p>
          <p className="price">
            {price}
            <span className="inline-block ml-1 currency">USD</span>
          </p>
        </div>
      </div>
      {/*  <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      /> */}
    </article>
  );
};

export default ProductCard;
