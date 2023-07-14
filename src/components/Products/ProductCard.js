const ProductCard = ({ product }) => {
  return (
    <div className="m-20 p-5 border-2 rounded-4xl">
      <a href={`http://localhost:3000/productdetails/${product.id}`}>
        {product.title}
        <img className=" rounded-4xl" src={product.thumbnail} alt="product" />
      </a>
    </div>
  );
};
export default ProductCard;
