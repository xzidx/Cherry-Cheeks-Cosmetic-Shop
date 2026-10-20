function Dashboard() {
  return (
    <div>
      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome back! Here's an overview of your cosmetic shop.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
      </div>

      {/* Recent Activity */}
      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Activity
        </h2>

        <p className="mt-3 text-sm text-gray-500">
          No recent activity to display.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;