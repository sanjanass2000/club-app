// import React, { useState } from 'react';
// import { 
//   LayoutGrid, Users, Calendar, DollarSign, 
//   Trophy, MessageCircle, Settings, LogOut 
// } from 'lucide-react';
// import DashboardContent from './DashboardContent';
// import '../../styles/admin/Dashboard.css';

// const Dashboard = () => {
//   const [activeItem, setActiveItem] = useState('dashboard');

//   const menuItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: <LayoutGrid size={18} /> },
//     { id: 'members', label: 'Members', icon: <Users size={18} /> },
//     { id: 'schedule', label: 'Schedule', icon: <Calendar size={18} /> },
//     { id: 'billing', label: 'Billing', icon: <DollarSign size={18} /> },
//     { id: 'tournaments', label: 'Tournaments', icon: <Trophy size={18} /> },
//     { id: 'chat', label: 'Chat', icon: <MessageCircle size={18} /> },
//     { id: 'settings', label: 'Settings', icon: <Settings size={18} /> }
//   ];

//   return (
//     <div className="flex min-h-screen bg-[#1a1d24]">
//       {/* Sidebar */}
//       <div className="w-64 bg-[#1a1d24] border-r border-gray-800">
//         <div className="p-6 flex items-center gap-3">
//           <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full"/>
//           <h1 className="text-xl font-semibold text-white">Tennis Admin</h1>
//         </div>
        
//         <div className="px-4 py-2 text-xs font-medium text-gray-400 uppercase">
//           Menu
//         </div>

//         <nav className="mt-2">
//           {menuItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => setActiveItem(item.id)}
//               className={`w-full flex items-center px-4 py-3 text-sm ${
//                 activeItem === item.id 
//                   ? 'bg-indigo-500/10 text-indigo-400' 
//                   : 'text-gray-400 hover:bg-gray-800/50'
//               }`}
//             >
//               <span className={`mr-3 ${activeItem === item.id ? 'text-indigo-400' : ''}`}>
//                 {item.icon}
//               </span>
//               {item.label}
//             </button>
//           ))}
//         </nav>

//         <div className="absolute bottom-0 w-64 p-4 border-t border-gray-800">
//           <button className="w-full flex items-center px-4 py-2 text-sm text-gray-400 hover:bg-gray-800/50 rounded">
//             <LogOut size={18} className="mr-3" />
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1">
//         <header className="bg-[#1a1d24] border-b border-gray-800">
//           <div className="px-6 py-4 flex items-center justify-between">
//             <h2 className="text-xl font-semibold text-white">
//               {menuItems.find(item => item.id === activeItem)?.label}
//             </h2>
//             <div className="relative">
//               <input 
//                 type="text"
//                 placeholder="Search..."
//                 className="bg-gray-800 text-gray-300 text-sm rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//           </div>
//         </header>

//         <main className="p-6">
//             {activeItem === 'dashboard' && <DashboardContent />}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState } from 'react';
// import { 
//   LayoutGrid, Users, Calendar, DollarSign, 
//   Trophy, MessageCircle, Settings, LogOut 
// } from 'lucide-react';
// import DashboardContent from './DashboardContent';
// import '../../styles/admin/Dashboard.css';

// const Dashboard = () => {
//   const [activeItem, setActiveItem] = useState('dashboard');

//   const menuItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: <LayoutGrid size={18} /> },
//     { id: 'members', label: 'Members', icon: <Users size={18} /> },
//     { id: 'schedule', label: 'Schedule', icon: <Calendar size={18} /> },
//     { id: 'billing', label: 'Billing', icon: <DollarSign size={18} /> },
//     { id: 'tournaments', label: 'Tournaments', icon: <Trophy size={18} /> },
//     { id: 'chat', label: 'Chat', icon: <MessageCircle size={18} /> },
//     { id: 'settings', label: 'Settings', icon: <Settings size={18} /> }
//   ];

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="logo-section">
//           <div className="logo" />
//           <h1>Tennis Admin</h1>
//         </div>
        
//         <div className="nav-section">
//           {menuItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => setActiveItem(item.id)}
//               className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
//             >
//               <span className="nav-icon">{item.icon}</span>
//               {item.label}
//             </button>
//           ))}
//         </div>

//         <div className="absolute bottom-0 w-64 p-4 border-t border-gray-800">
//           <button className="nav-item">
//             <LogOut size={18} className="nav-icon" />
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <header className="header">
//           <h2>
//             {menuItems.find(item => item.id === activeItem)?.label}
//           </h2>
//           <div>
//             <input 
//               type="text"
//               placeholder="Search..."
//               className="search-bar"
//             />
//           </div>
//         </header>

//         <main>
//           {activeItem === 'dashboard' && <DashboardContent />}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Tennis Club Dashboard
            </h1>
            {/* Add your dashboard content here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;