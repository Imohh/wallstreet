import Image from "next/image";
import Link from "next/link";
import cc from "classcat";

function Product({ media, name, permalink, price, className }) {
  const imageClass = cc([
    "relative rounded-lg hover:rounded-none overflow-hidden w-full transition-all",
    className,
  ]);

  return (
    <div className="container product-detail-container">
      <div className="row">
        <Link href={`/products/${permalink}`}>
          <a className="group relative">
            {media?.source && (
              <div className={imageClass}>
                <Image
                  src={media.source}
                  alt={Product.name}
                  layout="fill"
                  sizes="616px, (min-width: 768px): 352px, (min-width: 1024px): 232px, (min-width: 1280px): 288px"
                  className="object-cover"
                  priority={true}
                />
              </div>
            )}

            
                <div className="text-container">
                  <span className="product-detail-name">{name}</span>
                  <span className="product-detail-price">
                    {price.formatted_with_symbol}
                  </span>
                </div>
              
            
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Product;
