import { useProducts } from "medusa-react";
import { useCollections } from "medusa-react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const { products, isLoadingProducts } = useProducts();
  const { collections, isLoadingCollections } = useCollections();
  const [id, setId] = useState(0);
  const [s, setS] = useState("");

  useEffect(() => {
    setId(0);
  }, []);

  async function handleFilter(collection_id) {
    if (collection_id === id) {
      setId(0);
    } else setId(collection_id);
  }

  return (
    <div>
      {isLoadingProducts && <span>Loading Products...</span>}
      {products && !products.length && <span>No available Products</span>}
      {isLoadingCollections && <span>Loading Collections...</span>}
      {collections && !collections.length && (
        <span>No collections to filter through</span>
      )}
      {collections && collections.length > 0 && (
        <div>
          {collections.map((collection) => (
            <button
              className="hover:bg-gradient-to-r from-primary to-primary_varient px-3 py-2 hover:rounded-4xl"
              onClick={() => handleFilter(collection.id)}
            >
              {collection.title}
            </button>
          ))}
        </div>
      )}
      <label className="p-3">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="p-2"
          placeholder="Search for..."
          value={s}
          onChange={(e) => setS(e.target.value)}
        />
      </label>

      {products && products.length > 0 && (
        <div className="flex flex-wrap">
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(s.toLowerCase())
            )
            .map((product) => (
              <>
                {id === 0 && (
                  <div className="basis-2/6" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                )}
                {id === product.collection_id && (
                  <div className="basis-2/6" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                )}
              </>
            ))}
        </div>
      )}
    </div>
  );
};

export default Products;
