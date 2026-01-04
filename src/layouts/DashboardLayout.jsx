import React from "react";
import { NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <nav className="space-y-3">
          <NavLink to="/dashboard" className="block">
            Overview
          </NavLink>
          <NavLink to="/dashboard/profile" className="block">
            Profile
          </NavLink>
          <NavLink to="/dashboard/my-movies" className="block">
            My Movies
          </NavLink>
          <NavLink to="/dashboard/add-movie" className="block">
            Add Movie
          </NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-800">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
