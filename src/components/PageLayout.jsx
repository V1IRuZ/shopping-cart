import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
