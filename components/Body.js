import Image from 'next/image';
import Newsletter from './Newsletter';
import { motion } from "framer-motion";
import { commerce } from "../lib/commerce";
import ProductList from "./ProductList";
import ProductGrid from "./ProductGrid";

export async function getStaticProps() {
  const { data } = await commerce.products.list();

  const products = data.filter(({ active }) => active);

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}

function Body({ products }) {
  return (
    <>


      <div className="home-page">


        {/*TOP IMAGE SECTION*/}
        <div className="container top-section wrapper" style={{backgroundImage: `url("./home-page/bored-ape.png")`}}>
          <div className="row text-overlay">
            <div className="col-lg-12 header">
              {/*<img className="landing-page-img" id="logo" src={"./home-page/bored-ape.png"}/>*/}
              <h1 className="welcome-text">Welcome to wallstreet don</h1>
              <button className="home-btn btn ">Explore</button>
            </div>
          </div>
        </div>

        {/*SECTION SECTION(PLAIN TEXT)*/}

        <div className="container home-page-intro">
          <div className="row">
            <div className="col-lg-12">
              <p>
                If you want to skip calling the AJAX method from the 
                backend and only call it from the frontend, you can 
                test if the method calling from the frontend or the backend, 
                If you want to skip calling the AJAX method from the 
                backend and only call it from the frontend, you can 
                test if the method calling from the frontend or the backend like so
              </p>
            </div>
          </div>
        </div>



        {/*HR LINE*/}
        <div className="container hr-line">
          <div className="row">
            <div className="col-lg-12">

            </div>
          </div>
        </div>



        {/*OUR JOURNEY*/}
        <div className="container our-journey">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <h1>our journey</h1>

              <p>
                If you want to skip calling the AJAX method from the 
                  backend and only call it from the frontend, you can 
                  test if the method calling from the frontend or the backend, 
                  If you want to skip calling the AJAX method from the 
                  backend and only call it from the frontend, you can 
                  test if the method calling from the frontend or the backe
                  If you want to skip calling the AJAX method from the 
                  backend and only call it from the frontend, you can 
                  test if the method calling from the frontend or the backend, 
                  If you want to skip calling the AJAX method from the 
                  backend and only call it from the frontend, you can 
                  test if the method calling from the frontend or the backe
                  If you want to skip calling the AJAX method from the 
                  backend and only call it from the frontend, you can 
                  test if the method calling from the frontend or the backend, 
                  If you want to skip calling the AJAX method from the 
                  backend and only call it from the frontend, you can 
                  test if the method calling from the frontend or the backe
              </p>
            </div>
          </div>
        </div>


        {/*PRODUCTS*/}
          <div>
            <div>
              {/*<div>

              <motion.div
                className="md:py-12 hidden md:block md:sticky md:top-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.25,
                  },
                }}
                exit={{ opacity: 0, y: -50 }}
              >
                <h1 className="font-serif italic text-xl md:text-3xl">Shop:</h1>

                <div className="pt-3">
                  <ProductList products={products} />
                </div>
              </motion.div>
            </div>*/}

            <motion.div
              className="md:min-h-screen py-6 md:py-12 flex items-center md:w-1/2 md:z-40"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <ProductGrid
                products={products}
                className="h-112 md:h-96 xl:h-112"
              />
            </motion.div>
          </div>
        </div>





        {/*LITTLE TEXT BELOW PRDUCTS*/}
        <div className="container below-products">
          <div className="row">
            <div className="col-lg-12">
              <p>If you want to skip calling the AJAX method from the 
              backend and only call it from the frontend, you can 
              test if the method calling from the frontend or the backend, 
              If you want to skip calling the AJAX method from the </p>
            </div>
          </div>
        </div>


        <Newsletter />



      </div>
    </>
  );
}

export default Body;
