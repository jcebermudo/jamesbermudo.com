import Head from "next/head";
import Nav from "./Nav";
import Footy from "./Footy";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="p-10 sm:pt-20 mx-auto max-w-lg">
        <Nav />
        <main>{children}</main>
        <Footy />
      </div>
    </div>
  );
};

export default Layout;
