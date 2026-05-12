import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const PageLayout = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
