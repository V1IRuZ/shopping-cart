import Button from "../../components/ui/Button.jsx";

const OrderItem = ({ product }) => {
  return (
    <li>
      <h2>{product.title}</h2>
      <p>{product.quantity}</p>
    </li>
  );
};

const OrderModal = ({ cart, ref }) => {
  return (
    <dialog ref={ref} className="modal">
      <ul>
        {cart.map((item) => (
          <OrderItem product={item} />
        ))}
      </ul>
      <div className="modal-btns">
        <Button className="confirm-btn" label="CONFIRM" />
        <Button className="cancel-btn" label="CANCEL" />
      </div>
    </dialog>
  );
};

export default OrderModal;
