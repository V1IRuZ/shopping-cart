import Navigation from "./Navigation.jsx";

const Header = ({ cart }) => {
  return (
    <header>
      <div className="header-content">
        <Navigation cart={cart} />
      </div>
    </header>
  );
};

export default Header;
