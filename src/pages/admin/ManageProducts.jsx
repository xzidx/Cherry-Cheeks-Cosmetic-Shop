import RecentOrders from "../../components/admin/RecentProducts";
import SearchBar from "../../components/shared/SearchBar";
import CategoryFilter from "../../components/user/CategoryFilter";
import AllProducts from "../../components/admin/AllProducts";
import { FiPackage } from "react-icons/fi";
function Dashboard() {
  return (
    <div>
      {/* Page Heading */}
     
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Dashboard Title */}
        <div className="min-w-0">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Product Management
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
            Manage your cosmetic products, inventory, and orders.
          </p>
        </div>

        {/* Add Product Button */}
        <button
          type="button"
          className="inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-blue-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 sm:w-auto sm:py-2"
        >
          Add Product
        </button>
      </div>

          {/* find and category */}
        <div>
          <SearchBar />
          <CategoryFilter />
        </div>


      {/* Statistics Cards */}
      {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Total Products</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800">0</h2>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Total Categories</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800">0</h2>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Total Orders</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800">0</h2>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Total Customers</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800">0</h2>
        </div>
      </div> */}

      {/* Recent Activity */}
      <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Activity
        </h2>
          <RecentOrders />
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Activity
        </h2>
         <AllProducts />
      </div>
    </div>
  );
}

export default Dashboard;