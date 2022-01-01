import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1 className="title">React Movie App</h1>
      <Outlet/>
    </div>
  );
};

export default Layout;
