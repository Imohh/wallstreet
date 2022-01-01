import Image from 'next/image'
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

function Products({ products }) {
	return (
		<div>
            <div>
            <div>

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
          </div>

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
	)
}

export default Products