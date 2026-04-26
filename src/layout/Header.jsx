import Navigation from "./Navigation.jsx";

const Header = ({ cart, data, showNotification, currentProductId }) => {
  return (
    <header>
      <div className="header-content">
        <Navigation
          data={data}
          cart={cart}
          showNotification={showNotification}
          currentProductId={currentProductId}
        />
      </div>
    </header>
  );
};

export default Header;
