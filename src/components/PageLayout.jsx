import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const PageLayout = ({ children, cart }) => {
  return (
    <>
      <Header cart={cart}/>
      <main className="content">{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
