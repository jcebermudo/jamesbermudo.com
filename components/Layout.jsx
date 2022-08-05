import Head from "next/head";
import Nav from "./Nav";
import Footy from "./Footy";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="py-10 px-5 sm:py-24 sm:px-0 mx-auto max-w-xl">
        <Nav />
        <main>{children}</main>
        <Footy />
      </div>
    </div>
  );
};

export default Layout;
