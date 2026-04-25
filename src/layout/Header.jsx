import Navigation from "./Navigation.jsx";

const Header = ({ cart, showNotification, currentProductId }) => {
  return (
    <header>
      <div className="header-content">
        <Navigation
          cart={cart}
          showNotification={showNotification}
          currentProductId={currentProductId}
        />
      </div>
    </header>
  );
};

export default Header;
