import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Layout = ({ children, title = "", description = "" }) => {
  function webTitle() {
    if (title === "") {
      return "Smashack";
    } else {
      return `${title} - Smashack`;
    }
  }

  const [isAbsolute, setIsAbsolute] = useState(false);
  const location = useRouter();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/about") {
      setIsAbsolute(true);
    } else {
      setIsAbsolute(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Head>
        <title>{webTitle()}</title>
        <meta name="description" content={description} />
      </Head>

      <Header isAbsolute={isAbsolute} />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
