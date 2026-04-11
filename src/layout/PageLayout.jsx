import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const PageLayout = ({ children, cart }) => {
  return (
    <div className="page">
      <Header cart={cart}/>
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
