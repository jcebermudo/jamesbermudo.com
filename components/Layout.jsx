const Layout = ({ children }) => {
  return (
    <div>
      <div className="py-10 px-5 sm:py-20 sm:px-0 mx-auto max-w-2xl">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
