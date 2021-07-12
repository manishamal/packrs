import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, hideHeader }) => (
  <div className="">
    {!hideHeader && <Header />}
    {children}
    <Footer />
  </div>
);

export default Layout;
