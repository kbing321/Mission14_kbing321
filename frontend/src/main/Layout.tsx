import { Outlet, Link } from 'react-router-dom';
import TopBanner from './Banner';

//layout for each page
const Layout = () => {
  return (
    <>
      <TopBanner title="The Joel Hilton Movie Collection" />
      <Outlet />
    </>
  );
};

export default Layout;
