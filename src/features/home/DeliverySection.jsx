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
        <ShoppingCart size={iconSize} data-testid="icon" />
        <MoveRight size={iconSize} data-testid="icon" />
        <ClipboardList size={iconSize} data-testid="icon" />
        <MoveRight size={iconSize} data-testid="icon" />
        <PackageCheck size={iconSize} data-testid="icon" />
        <MoveRight size={iconSize} data-testid="icon" />
        <Van size={iconSize} data-testid="icon" />
      </div>
    </section>
  );
};

export default DeliverySection;
