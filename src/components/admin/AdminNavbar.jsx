import { FiBell, FiUser, FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";

function AdminNavbar({ onMenuClick }) {
  const location = useLocation();

  // Get the current page title from the URL
  const getPageTitle = () => {
    const path = location.pathname;

    if (path.includes("dashboard")) return "Dashboard";
    if (path.includes("products")) return "Products";
    if (path.includes("categories")) return "Categories";
    if (path.includes("orders")) return "Orders";
    if (path.includes("users")) return "Users";
    if (path.includes("settings")) return "Settings";

    return "Admin Panel";
  };

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="flex min-h-16 items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">

        {/* Left: Menu and Page Title */}
        <div className="flex min-w-0 items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open admin menu"
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-pink-50 hover:text-pink-600 lg:hidden"
          >
            <FiMenu className="text-xl" />
          </button>

          {/* Brand and Page Title */}
          <div className="min-w-0">
            <p className="truncate text-xs font-medium text-pink-500 sm:text-sm">
              Cherry Cheeks
            </p>

            <h1 className="truncate text-lg font-bold text-gray-800 sm:text-xl">
              {getPageTitle()}
            </h1>
          </div>
        </div>

        {/* Right: Notifications and Admin Profile */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">

          {/* Notification Button */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative rounded-lg p-2 text-gray-600 transition-colors hover:bg-pink-50 hover:text-pink-600"
          >
            <FiBell className="text-xl" />

            {/* Notification Indicator */}
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-pink-500" />
          </button>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-gray-200 sm:block" />

          {/* Admin Profile */}
          <button
            type="button"
            aria-label="Admin profile"
            className="flex items-center gap-2 rounded-lg p-1.5 transition-colors hover:bg-gray-50 sm:px-3 sm:py-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-pink-600">
              <FiUser className="text-xl" />
            </div>

            <div className="hidden text-left md:block">
              <p className="text-sm font-semibold text-gray-800">
                Admin
              </p>
              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>
          </button>

        </div>
      </div>
    </header>
  );
}

export default AdminNavbar;