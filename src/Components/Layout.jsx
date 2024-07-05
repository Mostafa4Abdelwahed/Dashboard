import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className="mr-0 pt-16 lg:pr-[220px] bg-gray-100 min-h-[100vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
