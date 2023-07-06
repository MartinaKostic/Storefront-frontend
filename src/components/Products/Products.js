import { useProducts } from "medusa-react";

const Products = () => {
  const { products, isLoading } = useProducts();
  //console.log(products);
  return (
    <div>
      {isLoading && <span>Loading...</span>}
      {products && !products.length && <span>No available Products</span>}
      {products && products.length > 0 && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
