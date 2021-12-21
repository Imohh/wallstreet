import { useCartState } from "../context/cart";
import { useModalDispatch } from "../context/modal";
import shoppingCart from "../images/shopping.png";

function CartSummary() {
  const { total_unique_items } = useCartState();
  const { openModal } = useModalDispatch();

  return (
    <button className="appearance-none focus:outline-none" onClick={openModal}>
      <img src="https://img.icons8.com/ios/34/000000/shopping-bag.png"/>({total_unique_items})
    </button>
  );
}

export default CartSummary;
