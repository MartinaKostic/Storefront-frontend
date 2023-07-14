import { useCart, useGetCart } from "medusa-react";

const Cart = () => {
  const handleClick = () => {
    createCart.mutate(
      {},
      {
        onSuccess: ({ cart }) => {
          localStorage.setItem("cart_id", cart.id);
        },
      }
    );
  };
  const { cart, createCart } = useCart();
  const { getCart, isLoadingCart } = useGetCart(cart.id);

  return (
    <div>
      {createCart.isLoading && <div>Loading...</div>}
      {!cart?.id && <button onClick={handleClick}>Create cart!</button>}
      {cart?.id && <div>Cart ID: {cart.id}</div>}
    </div>
  );
};

export default Cart;
