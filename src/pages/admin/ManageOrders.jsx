import RecentOrders from "../../components/admin/RecentOrders";
import SearchBar from "../../components/shared/SearchBar";
function Dashboard() {
  return (
    <div>
      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Order Management
        </h1>

        <p className="mt-2 text-gray-500">
          Review, fulfill, and track customer purchases
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-base text-gray-500">Total Orders</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800">0</h2>
           <p className="text-sm text-gray-500 mt-2">All purchases in this list</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-base text-gray-500">Completed payments</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800">0</h2>
          <p className="text-sm text-gray-500 mt-2">3 of 4 records 3 of 4 records</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-base text-gray-500">Cash on delivery</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800">0</h2>
          <p className="text-sm text-gray-500 mt-2">Payment on delivery</p>
        </div>
      </div>
     
      <div className="mt-7">
        <SearchBar />
      </div>

      {/* Recent Activity */}
      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Activity
        </h2>
          <RecentOrders />
        <p className="mt-3 text-sm text-gray-500">
          No recent activity to display.
        </p>
      </div>

     
    </div>
  );
}

export default Dashboard;