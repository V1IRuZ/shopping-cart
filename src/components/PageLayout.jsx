import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
