import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white to-gray-100">
      <Outlet />
    </div>
  );
}
