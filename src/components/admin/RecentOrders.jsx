
import React, { useState } from "react";
import { FiFilter, FiEye } from "react-icons/fi";

function RecentOrders() {
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  const orders = [
    {
      id: "#ORD-001",
      user: "Sokha",
      volume: "30ml",
      category: "Hydrating Serum",
      branch: "Phnom Penh",
      quantity: 2,
      payment: "Pay on Cash on Delivery",
      status: "Completed",
    },
    {
      id: "#ORD-002",
      user: "Dara",
      volume: "50ml",
      category: "Cleansing Foam",
      branch: "Siem Reap",
      quantity: 1,
      payment: "Pay on Cash on Delivery",
      status: "Completed",
    },
    {
      id: "#ORD-003",
      user: "Sophea",
      volume: "100ml",
      category: "Sunscreen",
      branch: "Phnom Penh",
      quantity: 3,
      payment: "Pay on Cash on Delivery",
      status: "Pending",
    },
    {
      id: "#ORD-004",
      user: "Vanna",
      volume: "30ml",
      category: "Hydrating Serum",
      branch: "Battambang",
      quantity: 1,
      payment: "Pay on Cash on Delivery",
      status: "Completed",
    },
    {
      id: "#ORD-005",
      user: "Malis",
      volume: "50ml",
      category: "Cleansing Foam",
      branch: "Phnom Penh",
      quantity: 2,
      payment: "Pay on Cash on Delivery",
      status: "Pending",
    },
  ];

  const filteredOrders =
    statusFilter === "All Statuses"
      ? orders
      : orders.filter((order) => order.status === statusFilter);

  function handleViewDetails(order) {
    alert(
      `Order: ${order.id}\nCustomer: ${order.user}\nProduct: ${order.category}\nQuantity: ${order.quantity}\nStatus: ${order.status}`
    );
  }

  return (
    <section className="w-full py-4">
      <div className="mx-auto w-full max-w-[1350px]">

     

        {/* Orders Card */}
        <div className="overflow-hidden rounded-2xl bg-white">

          {/* Table Header */}
          <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
             
              <p className="mt-1 text-sm text-gray-500">
                {filteredOrders.length} orders found
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-600 outline-none transition focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87]"
                aria-label="Filter orders by status"
              >
                <option>All Statuses</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>

              <button
                type="button"
                onClick={() => setStatusFilter("All Statuses")}
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-[#F66B87] hover:text-[#F66B87]"
              >
                <FiFilter className="text-base" />
                Reset Filter
              </button>
            </div>
          </div>

          {/* Responsive Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[1100px] border-collapse text-left">
              <thead>
                <tr className="bg-[#FFF5F6]">
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Order ID
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    User
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Volume
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Category Type
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Store Branch
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Quantity
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Payment Method
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Status
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="transition hover:bg-[#FFF9FA]"
                  >
                    <td className="whitespace-nowrap px-5 py-5 text-sm font-bold text-gray-800">
                      {order.id}
                    </td>

                    <td className="whitespace-nowrap px-5 py-5 text-sm text-gray-600">
                      {order.user}
                    </td>

                    <td className="whitespace-nowrap px-5 py-5 text-sm text-gray-600">
                      {order.volume}
                    </td>

                    <td className="whitespace-nowrap px-5 py-5 text-sm text-gray-600">
                      {order.category}
                    </td>

                    <td className="whitespace-nowrap px-5 py-5 text-sm text-gray-600">
                      {order.branch}
                    </td>

                    <td className="whitespace-nowrap px-5 py-5 text-sm font-bold text-gray-800">
                      {order.quantity}
                    </td>

                    <td className="whitespace-nowrap px-5 py-5">
                      <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600">
                        {order.payment}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-5 py-5">
                      <span
                        className={`inline-flex rounded-full px-3 py-1.5 text-xs font-medium ${
                          order.status === "Completed"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-amber-50 text-amber-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-5 py-5">
                      <button
                        type="button"
                        onClick={() => handleViewDetails(order)}
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 transition hover:border-[#F66B87] hover:text-[#F66B87]"
                      >
                        <FiEye className="text-sm" />
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredOrders.length === 0 && (
                  <tr>
                    <td
                      colSpan={9}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      No orders found for this status.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="flex flex-col gap-2 border-t border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-sm text-gray-500">
              Showing {filteredOrders.length} of {orders.length} orders
            </p>

            <p className="text-xs text-gray-400">
              Cherry Cheeks · Order Management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentOrders;
