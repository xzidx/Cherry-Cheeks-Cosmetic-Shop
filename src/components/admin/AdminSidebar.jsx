import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiPackage,
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiSettings,
  FiX,
  FiLogOut,
} from "react-icons/fi";

function AdminSidebar({ isOpen = false, onClose }) {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: FiHome,
    },
    {
      name: "Product Management",
      path: "/admin/manage-products",
      icon: FiPackage,
    },
    {
      name: "Order Management",
      path: "/admin/manage-orders",
      icon: FiShoppingBag,
    },
    {
      name: "User Management",
      path: "/admin/manage-users",
      icon: FiUsers,
    },
    {
      name: "Settings",
      path: "/admin/admin-settings",
      icon: FiSettings,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand */}
        <div className="flex h-19 items-center justify-between  px-5">
          <div>
            <h2 className="text-xl font-bold text-[#F66B87]">
              Cherry Cheeks
            </h2>
            <p className="text-xs text-gray-500">Admin Panel</p>
          </div>

          {/* Close Button on Mobile */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Main Menu
          </p>

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-[#FFF5F6] text-[#F66B87]"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#F66B87]"
                    }`
                  }
              >
                {({ isActive }) => (
                  <>
                    <Icon className="shrink-0 text-xl" />

                    <span>{item.name}</span>

                    {isActive && (
                      <span className="ml-auto h-2 w-2 rounded-full bg-pink-500" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-gray-200 p-4">
          <div className="mb-3 rounded-lg bg-[#FFF5F6] p-3">
            <p className="text-sm font-semibold text-gray-800">
              Cherry Cheeks
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Cosmetic Shop Management
            </p>
          </div>

          <NavLink
            to="/"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-pink-600"
          >
            <FiLogOut className="text-xl" />
            Back to Shop
          </NavLink>
        </div>
      </aside>
    </>
  );
}

export default AdminSidebar;