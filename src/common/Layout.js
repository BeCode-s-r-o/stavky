import HeaderOne from './header/HeaderOne';

const Layout = ({ children }) => {
  return (
    <>
      <main className="page-wrapper">{children}</main>
    </>
  );
};
export default Layout;
