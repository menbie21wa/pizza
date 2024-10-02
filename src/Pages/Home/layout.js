import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../navigation/footer";
import Header from "../../navigation/header";
import { Helmet } from "react-helmet";
const Layout = ({ children, title, description, keywords, author }) => {
  const location = useLocation();
  const protectedHeader = () => {
    switch (location.pathname) {
      case "/sign-in":
      default:
        return <Header />;
    }
  };
  const protectedFooter = () => {
    switch (location.pathname) {
      case "/sign-in":
        return null;
      default:
        return <Footer />;
    }
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      {protectedHeader()}
      <main>{children}</main>
      {protectedFooter()}
    </div>
  );
};

Layout.defaultProps = {
  title: "Pizza",
  description: "TWO F Capital",
  keywords: "TWO F Capital,Website,Addis Ababa,Ethiopia",
  author: "TWO F Capital",
};

export default Layout;
