import {
  ShoppingCart,
  ClipboardList,
  PackageCheck,
  Van,
  MoveRight,
} from "lucide-react";

const DeliverySection = () => {
  const iconSize = 52;

  return (
    <section className="delivery">
      <p>FAST AND RELIABLE DELIVERY</p>
      <div className="order-process">
        <ShoppingCart size={iconSize} />
        <MoveRight size={iconSize} />
        <ClipboardList size={iconSize} />
        <MoveRight size={iconSize} />
        <PackageCheck size={iconSize} />
        <MoveRight size={iconSize} />
        <Van size={iconSize} />
      </div>
    </section>
  );
};

export default DeliverySection;
