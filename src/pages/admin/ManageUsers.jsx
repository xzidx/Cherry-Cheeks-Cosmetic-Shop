import React from "react";
import UserTable from "../../components/admin/UserTable";




function Users() {
  return (
     <div>
      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          User Management
        </h1>

        <p className="mt-2 text-gray-500">
          View and manage your cosmetic shop customers.
        </p>
      </div>


      {/* Recent Activity */}
      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
       
           <UserTable />
      
      </div>
    </div>
  );
}

export default Users;























// function Users() {
//   return (
//     <main className="min-h-screen bg-slate-50 py-4">
//       <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">

//         {/* Page Heading */}
//         <div className="mb-8">
//           <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
//             User Management
//           </h1>

//           <p className="mt-2 text-gray-500">
//             View and manage your cosmetic shop customers.
//           </p>
//         </div>

//         <UserTable />
//       </div>
//     </main>
//   );
// }

// export default Users;