import { Van } from "lucide-react";

const ShippingInformation = ({ shipping }) => {
  return (
    <div className="shipping">
      <Van data-testid="van" />
      <p>{shipping}</p>
    </div>
  );
};

export default ShippingInformation;
