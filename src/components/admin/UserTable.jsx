import React, { useMemo, useState } from "react";
import {
  FiSearch,
  FiDownload,
  FiEye,
  FiMoreHorizontal,
} from "react-icons/fi";
import users from "../../data/users";

function UserTable() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(null);

  const usersPerPage = 6;

  const filteredUsers = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return users.filter((user) =>
      [user.name, user.email, user.phone].some((value) =>
        value.toLowerCase().includes(keyword)
      )
    );
  }, [search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredUsers.length / usersPerPage)
  );

  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * usersPerPage;

  const visibleUsers = filteredUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  function handleSearch(event) {
    setSearch(event.target.value);
    setCurrentPage(1);
  }

  function handleExport() {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Account Status",
      "Buy History",
    ];

    const rows = filteredUsers.map((user) => [
      user.name,
      user.email,
      user.phone,
      user.status,
      user.buyHistory,
    ]);

    const escapeCSV = (value) =>
      `"${String(value).replace(/"/g, '""')}"`;

    const csvContent = [
      headers,
      ...rows,
    ]
      .map((row) => row.map(escapeCSV).join(","))
      .join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "cherry-cheeks-customers.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  function handleViewUser(user) {
    // Replace this with navigation to a customer details page later.
    alert(
      `Customer: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone}`
    );
  }

  function handleMenuAction(user) {
    setOpenMenu(openMenu === user.id ? null : user.id);
  }

  return (
    <section className="w-full">
      <div className="overflow-visible rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-6">

        {/* Toolbar */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm transition focus-within:border-[#F66B87] focus-within:ring-1 focus-within:ring-[#F66B87] lg:w-80">
            <FiSearch className="shrink-0 text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search by name, email, or phone"
              aria-label="Search customers"
              className="w-full min-w-0 bg-transparent text-sm text-gray-700 outline-none placeholder:text-slate-400"
            />

            {search && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCurrentPage(1);
                }}
                className="shrink-0 text-xs text-slate-400 hover:text-[#F66B87]"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={handleExport}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <FiDownload className="h-4 w-4" />
            Export
          </button>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  User
                </th>

                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </th>

                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Phone
                </th>

                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Account Status
                </th>

                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Buy History
                </th>

                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {visibleUsers.map((user) => {
                const initials = user.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();

                const isActive = user.status === "Active";

                return (
                  <tr
                    key={user.id}
                    className="transition hover:bg-rose-50/30"
                  >
                    {/* User */}
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-50 text-xs font-semibold text-rose-500">
                          {initials}
                        </div>

                        <span className="text-sm font-semibold text-gray-800">
                          {user.name}
                        </span>
                      </div>
                    </td>

                    {/* Email */}
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">
                      {user.email}
                    </td>

                    {/* Phone */}
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">
                      {user.phone}
                    </td>

                    {/* Account Status */}
                    <td className="whitespace-nowrap px-4 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                          isActive
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isActive ? "bg-emerald-500" : "bg-white"
                          }`}
                        />
                        {isActive ? "Active" : "Offline"}
                      </span>
                    </td>

                    {/* Buy History */}
                    <td className="px-4 py-4 text-center text-sm font-medium text-slate-700">
                      {user.buyHistory}
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-4">
                      <div className="relative flex items-center justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleViewUser(user)}
                          title="View customer details"
                          aria-label={`View ${user.name}`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-rose-50 hover:text-[#F66B87]"
                        >
                          <FiEye className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleMenuAction(user)}
                          title="More options"
                          aria-label={`More options for ${user.name}`}
                          aria-expanded={openMenu === user.id}
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-gray-800"
                        >
                          <FiMoreHorizontal className="h-5 w-5" />
                        </button>

                        {openMenu === user.id && (
                          <div className="absolute right-0 top-9 z-20 w-40 rounded-xl border border-slate-100 bg-white p-1 shadow-lg">
                            <button
                              type="button"
                              onClick={() => handleViewUser(user)}
                              className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-rose-50 hover:text-[#F66B87]"
                            >
                              View details
                            </button>

                            <button
                              type="button"
                              onClick={() => setOpenMenu(null)}
                              className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                            >
                              Close menu
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}

              {visibleUsers.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-12 text-center text-sm text-slate-500"
                  >
                    No customers found. Try another search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer and Pagination */}
        <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            Showing{" "}
            {filteredUsers.length === 0 ? 0 : startIndex + 1}
            {"–"}
            {Math.min(startIndex + usersPerPage, filteredUsers.length)}
            {" of "}
            {filteredUsers.length} users
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={safePage === 1}
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1)
              .filter((page) => page <= 3 || page === safePage)
              .filter((page, index, array) => array.indexOf(page) === index)
              .map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  aria-current={safePage === page ? "page" : undefined}
                  className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm font-medium transition ${
                    safePage === page
                      ? "bg-rose-500 text-white"
                      : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {page}
                </button>
              ))}

            <button
              type="button"
              disabled={safePage === totalPages}
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserTable;