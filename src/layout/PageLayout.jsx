import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const PageLayout = ({ children, cart, data, showNotification, currentProductId }) => {
  return (
    <div className="page">
      <Header
        data={data}
        cart={cart}
        showNotification={showNotification}
        currentProductId={currentProductId}
      />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
