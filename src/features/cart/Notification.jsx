import { X } from "lucide-react";

const Notification = ({ cart, currentProductId }) => {
  const currentCartProduct = cart?.find((item) => item.id === currentProductId);

  if (!currentCartProduct) return null;

  return (
    <div className="notification">
        <img src={currentCartProduct.image} alt="" />
        <span>{currentCartProduct.title}</span>
        <X />
        <span className="amount">{currentCartProduct.quantity}</span>
    </div>
  );
};

export default Notification;
