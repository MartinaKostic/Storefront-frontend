import { useParams } from "react-router";
import Medusa from "@medusajs/medusa-js";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;
  const [productDet, setProductDet] = useState(null);
  const [currency, setCurrency] = useState("");
  const [clicked, setClicked] = useState("null");
  const medusa = new Medusa({
    baseUrl: "http://localhost:9000",
    maxRetries: 3,
  });

  useEffect(() => {
    if (medusa) {
      medusa.products
        .retrieve(id)
        .then(({ product }) => {
          console.log({ product });
          setProductDet(product);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  function handleCurrency(curr) {
    setCurrency(curr);
  }

  function handleClick(size) {
    setClicked(size);
  }

  return (
    <div>
      {productDet && (
        <div className="grid grid-cols-2">
          <img
            src={productDet.thumbnail}
            alt="product_img"
            className="m-7 rounded-4xl"
          />
          <div className="p-10">
            <p className="text-4xl">{productDet.title}</p>
            <p className="text-md">{productDet.description}</p>
            <div className="flex">
              {productDet.variants.map((variant) => (
                <button
                  className="flex m-5"
                  onClick={() => handleClick(variant.title)}
                >
                  <p
                    className={`hover:bg-gradient-to-r from-primary to-primary_varient px-5 py-3 hover:rounded-4xl ${
                      variant.title === clicked && "bg-primary rounded-4xl"
                    }`}
                  >
                    {variant.title}
                  </p>
                </button>
              ))}{" "}
            </div>

            <div>
              <button
                className="hover:bg-gradient-to-r from-primary to-primary_varient px-5 py-3 hover:rounded-4xl"
                onClick={() => handleCurrency("eur")}
              >
                EUR
              </button>
              <button
                className="hover:bg-gradient-to-r from-primary to-primary_varient px-5 py-3 hover:rounded-4xl"
                onClick={() => handleCurrency("usd")}
              >
                USD
              </button>
              {productDet.variants[0].prices.map((price) =>
                price.currency_code === currency ? (
                  [price.amount, price.currency_code]
                ) : (
                  <></>
                )
              )}
            </div>
            <button className="hover:bg-gradient-to-r from-primary to-primary_varient hover:rounded-4xl text-lg px-3 py-2 my-10">
              Add to cart!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetails;
//medusa client i retrivas details ovisno o id koji imas u url
