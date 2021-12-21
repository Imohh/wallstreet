import { useCartState } from "../context/cart";
import { useModalDispatch } from "../context/modal";
import shoppingBag from "../svg/shopping-bag.png";

function CartSummary() {
  const { total_unique_items } = useCartState();
  const { openModal } = useModalDispatch();

  return (
    <button className="appearance-none focus:outline-none" onClick={openModal}>
      <img src={shoppingBag} alt="shopping bag" /> ({total_unique_items})
    </button>
  );
}

export default CartSummary;
