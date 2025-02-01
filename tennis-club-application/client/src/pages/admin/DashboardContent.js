// import { DollarSign, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie } from 'recharts';

// const DashboardContent = () => {
//   const revenueData = [
//     { name: 'Jan', value: 35, clicks: 10 },
//     { name: 'Feb', value: 65, clicks: 15 },
//     { name: 'Mar', value: 65, clicks: 20 },
//     { name: 'Apr', value: 50, clicks: 25 },
//     { name: 'May', value: 60, clicks: 15 },
//     { name: 'Jun', value: 40, clicks: 10 },
//     { name: 'Jul', value: 45, clicks: 20 },
//     { name: 'Aug', value: 75, clicks: 30 },
//     { name: 'Sep', value: 50, clicks: 25 },
//     { name: 'Oct', value: 65, clicks: 20 },
//     { name: 'Nov', value: 70, clicks: 25 },
//     { name: 'Dec', value: 60, clicks: 15 },
//   ];

//   return (
//     <div className="grid grid-cols-3 gap-6">
//       {/* Stats Cards */}
//       <div className="col-span-1 bg-[#242731] rounded-lg p-6">
//         <div className="flex justify-between items-start">
//           <div>
//             <h3 className="text-gray-400 text-sm">Total Income</h3>
//             <p className="text-2xl font-semibold text-white mt-2">$78.8k</p>
//           </div>
//           <div className="p-2 bg-indigo-500/20 rounded-lg">
//             {/* <DollarSign size={20} className="text-indigo-400" /> */}
//           </div>
//         </div>
//         <div className="mt-4 h-16">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={revenueData}>
//               <Line 
//                 type="monotone" 
//                 dataKey="value" 
//                 stroke="#8884d8" 
//                 strokeWidth={2} 
//                 dot={false} 
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Revenue Chart */}
//       <div className="col-span-2 bg-[#242731] rounded-lg p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-white text-lg font-medium">Revenue</h3>
//           <div className="flex gap-2">
//             <button className="px-3 py-1 text-xs bg-indigo-500/20 text-indigo-400 rounded-full">ALL</button>
//             <button className="px-3 py-1 text-xs text-gray-400 hover:bg-gray-700/50 rounded-full">1M</button>
//             <button className="px-3 py-1 text-xs text-gray-400 hover:bg-gray-700/50 rounded-full">6M</button>
//             <button className="px-3 py-1 text-xs text-gray-400 hover:bg-gray-700/50 rounded-full">1Y</button>
//           </div>
//         </div>
//         <div className="h-64">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={revenueData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#333" />
//               <XAxis dataKey="name" stroke="#666" />
//               <YAxis stroke="#666" />
//               <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
//               <Line 
//                 type="monotone" 
//                 dataKey="clicks" 
//                 stroke="#4ade80" 
//                 strokeWidth={2} 
//                 dot={false} 
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardContent;

import { 
    Users, DollarSign
  } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie } from 'recharts';

const DashboardContent = () => {
  const revenueData = [
    { name: 'Jan', value: 35, clicks: 10 },
    { name: 'Feb', value: 65, clicks: 15 },
    { name: 'Mar', value: 65, clicks: 20 },
    { name: 'Apr', value: 50, clicks: 25 },
    { name: 'May', value: 60, clicks: 15 },
    { name: 'Jun', value: 40, clicks: 10 },
    { name: 'Jul', value: 45, clicks: 20 },
    { name: 'Aug', value: 75, clicks: 30 },
    { name: 'Sep', value: 50, clicks: 25 },
    { name: 'Oct', value: 65, clicks: 20 },
    { name: 'Nov', value: 70, clicks: 25 },
    { name: 'Dec', value: 60, clicks: 15 },
  ];

  return (
    <div className="dashboard-grid">
      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <h3>Total Income</h3>
              <p className="stat-value">$78.8k</p>
            </div>
            <div className="stat-icon">
              <DollarSign size={20} />
            </div>
          </div>
          <div className="stat-chart">
            <ResponsiveContainer width="100%" height={60}>
              <LineChart data={revenueData}>
                <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div>
              <h3>New Users</h3>
              <p className="stat-value">2,150</p>
            </div>
            <div className="stat-icon">
              <Users size={20} />
            </div>
          </div>
          <div className="stat-chart">
            <ResponsiveContainer width="100%" height={60}>
              <LineChart data={revenueData}>
                <Line type="monotone" dataKey="clicks" stroke="#6366f1" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-grid">
        <div className="chart-container">
          <div className="chart-header">
            <h3>Revenue</h3>
            <div className="time-filter">
              <button className="active">ALL</button>
              <button>1M</button>
              <button>6M</button>
              <button>1Y</button>
            </div>
          </div>
          <div className="chart-body">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2f3341" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="clicks" stroke="#4ade80" strokeWidth={2} dot={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header">
            <h3>Sales by Category</h3>
          </div>
          <div className="sales-table">
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Orders</th>
                  <th>Perc.</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Private Lessons</td>
                  <td>187,232</td>
                  <td>48.63%</td>
                  <td className="status-up">2.5% up</td>
                </tr>
                <tr>
                  <td>Group Classes</td>
                  <td>126,874</td>
                  <td>36.08%</td>
                  <td className="status-up">8.5% up</td>
                </tr>
                <tr>
                  <td>Tournaments</td>
                  <td>90,127</td>
                  <td>23.41%</td>
                  <td className="status-down">10.98% down</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;