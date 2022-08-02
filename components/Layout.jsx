import Head from "next/head";
import Nav from "./Nav";
import Footy from "./Footy";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="p-8 mx-auto max-w-xl sm:px-6 sm:py-24">
        <Nav />
        <main>{children}</main>
        <Footy />
      </div>
    </div>
  );
};

export default Layout;
