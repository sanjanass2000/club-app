// import React, { useState } from 'react';
// import { Search, Bell, MessageSquare, Sun, Users, Calendar, TrendingUp, Settings, BookOpen, DollarSign } from 'lucide-react';

// const AdminLayout = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const mainCategories = [
//     {
//       title: 'Dashboard',
//       icon: TrendingUp,
//       active: true
//     },
//     {
//       title: 'Players & Teams',
//       icon: Users,
//       subItems: ['Roster Management', 'Performance Analytics', 'Training Plans']
//     },
//     {
//       title: 'Schedule',
//       icon: Calendar,
//       subItems: ['Court Bookings', 'Lessons', 'Events']
//     },
//     {
//       title: 'Programs',
//       icon: BookOpen,
//       subItems: ['Training Sessions', 'Tournaments', 'Clinics']
//     },
//     {
//       title: 'Financial',
//       icon: DollarSign,
//       subItems: ['Revenue', 'Payments', 'Reports']
//     },
//     {
//       title: 'Settings',
//       icon: Settings,
//       subItems: ['Profile', 'Preferences', 'Notifications']
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
//       {/* Background image */}
//       <div 
//         className="fixed inset-0 z-0 opacity-10"
//         style={{
//           backgroundImage: 'url(/barton-hills.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       />

//       <div className="relative z-10 flex">
//         {/* Sidebar */}
//         <div className="w-64 min-h-screen bg-white/80 backdrop-blur-lg border-r border-gray-200/50">
//           <div className="p-6">
//             <h1 className="text-2xl font-bold text-blue-900">Barton Creek</h1>
//             <p className="text-sm text-blue-600">Tennis Admin</p>
//           </div>

//           <nav className="mt-6">
//             {mainCategories.map((category, index) => (
//               <div key={index} className="px-4 py-2">
//                 <button 
//                   className={`flex items-center w-full px-4 py-2 text-left rounded-lg 
//                     ${category.active ? 'bg-blue-100/50 text-blue-900' : 'text-gray-700 hover:bg-blue-50/50'}`}
//                 >
//                   <category.icon className="w-5 h-5 mr-3" />
//                   <span>{category.title}</span>
//                 </button>
//                 {category.subItems && (
//                   <div className="ml-12 mt-2 space-y-1">
//                     {category.subItems.map((item, idx) => (
//                       <button 
//                         key={idx}
//                         className="text-sm text-gray-600 hover:text-blue-900 block py-1"
//                       >
//                         {item}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>
//         </div>

//         {/* Main content area */}
//         <div className="flex-1">
//           {/* Top bar */}
//           <div className="h-16 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 flex items-center justify-between px-6">
//             <div className="flex items-center flex-1">
//               <div className="relative w-96">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100/50 border-0 focus:ring-2 focus:ring-blue-500"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <button className="p-2 rounded-lg hover:bg-gray-100">
//                 <Sun className="w-5 h-5 text-gray-600" />
//               </button>
//               <button className="p-2 rounded-lg hover:bg-gray-100 relative">
//                 <MessageSquare className="w-5 h-5 text-gray-600" />
//                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
//               </button>
//               <button className="p-2 rounded-lg hover:bg-gray-100 relative">
//                 <Bell className="w-5 h-5 text-gray-600" />
//                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
//               </button>
//               <button className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
//                 BC
//               </button>
//             </div>
//           </div>

//           {/* Main content - you'll render your specific page content here */}
//           <div className="p-6">
//             {/* Content will be rendered here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;



// import React, { useState } from 'react';
// import { Search, Bell, MessageSquare, Sun, Users, Calendar, TrendingUp, Settings, BookOpen, DollarSign } from 'lucide-react';

// const AdminLayout = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const mainCategories = [
//     {
//       title: 'Dashboard',
//       icon: TrendingUp,
//       active: true
//     },
//     {
//       title: 'Players & Teams',
//       icon: Users,
//       subItems: ['Roster Management', 'Performance Analytics', 'Training Plans']
//     },
//     {
//       title: 'Schedule',
//       icon: Calendar,
//       subItems: ['Court Bookings', 'Lessons', 'Events']
//     },
//     {
//       title: 'Programs',
//       icon: BookOpen,
//       subItems: ['Training Sessions', 'Tournaments', 'Clinics']
//     },
//     {
//       title: 'Financial',
//       icon: DollarSign,
//       subItems: ['Revenue', 'Payments', 'Reports']
//     },
//     {
//       title: 'Settings',
//       icon: Settings,
//       subItems: ['Profile', 'Preferences', 'Notifications']
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-64 min-h-screen bg-gray-50 border-r border-gray-200">
//           <div className="p-6">
//             <h1 className="text-2xl font-bold text-gray-900">Barton Creek</h1>
//             <p className="text-sm text-gray-600">Tennis Admin</p>
//           </div>

//           <nav className="mt-6">
//             {mainCategories.map((category, index) => (
//               <div key={index} className="px-4 py-2">
//                 <button 
//                   className={`flex items-center w-full px-4 py-2 text-left rounded-lg transition-colors duration-200
//                     ${category.active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
//                 >
//                   <category.icon className="w-5 h-5 mr-3" />
//                   <span>{category.title}</span>
//                 </button>
//                 {category.subItems && (
//                   <div className="ml-12 mt-2 space-y-1">
//                     {category.subItems.map((item, idx) => (
//                       <button 
//                         key={idx}
//                         className="w-full text-left text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors duration-200"
//                       >
//                         {item}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <div className="flex-1">
//           {/* Top Navigation */}
//           <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
//             <div className="flex items-center flex-1">
//               <div className="relative w-96">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <button className="p-2 rounded-lg hover:bg-gray-100">
//                 <Sun className="w-5 h-5 text-gray-600" />
//               </button>
//               <button className="p-2 rounded-lg hover:bg-gray-100 relative">
//                 <MessageSquare className="w-5 h-5 text-gray-600" />
//                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
//               </button>
//               <button className="p-2 rounded-lg hover:bg-gray-100 relative">
//                 <Bell className="w-5 h-5 text-gray-600" />
//                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
//               </button>
//               <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
//                 BC
//               </div>
//             </div>
//           </header>

//           {/* Main Content Area */}
//           <main className="p-6 bg-gray-50 min-h-[calc(100vh-4rem)]">
//             {/* Page content will be rendered here */}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;


import React, { useState } from 'react';
import { Search, Bell, MessageSquare, Sun, Users, Calendar, TrendingUp, Settings, BookOpen, DollarSign } from 'lucide-react';

const AdminLayout = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const mainCategories = [
    {
      title: 'Dashboard',
      icon: TrendingUp,
      active: true
    },
    {
      title: 'Players & Teams',
      icon: Users,
      subItems: ['Roster Management', 'Performance Analytics', 'Training Plans']
    },
    {
      title: 'Schedule',
      icon: Calendar,
      subItems: ['Court Bookings', 'Lessons', 'Events']
    },
    {
      title: 'Programs',
      icon: BookOpen,
      subItems: ['Training Sessions', 'Tournaments', 'Clinics']
    },
    {
      title: 'Financial',
      icon: DollarSign,
      subItems: ['Revenue', 'Payments', 'Reports']
    },
    {
      title: 'Settings',
      icon: Settings,
      subItems: ['Profile', 'Preferences', 'Notifications']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-white border-r border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-2xl font-bold text-tennis-green">Barton Creek</h1>
            <p className="text-sm text-gray-600 mt-1">Tennis Admin</p>
          </div>

          <nav className="mt-6">
            {mainCategories.map((category, index) => (
              <div key={index} className="px-3 py-2">
                <button 
                  className={`flex items-center w-full px-4 py-2.5 text-left rounded-lg transition-all duration-200 
                    ${category.active 
                      ? 'bg-tennis-green bg-opacity-10 text-tennis-green font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <category.icon className={`w-5 h-5 mr-3 ${category.active ? 'text-tennis-green' : 'text-gray-500'}`} />
                  <span>{category.title}</span>
                </button>
                {category.subItems && (
                  <div className="ml-12 mt-2 space-y-1">
                    {category.subItems.map((item, idx) => (
                      <button 
                        key={idx}
                        className="w-full text-left text-sm text-gray-600 hover:text-tennis-green hover:bg-green-50 py-1.5 px-2 rounded-md transition-colors duration-200"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
            <div className="flex items-center flex-1">
              <div className="relative w-96">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tennis-green focus:border-transparent transition-all duration-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Sun className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 relative">
                <MessageSquare className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-warm-clay rounded-full ring-2 ring-white" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-warm-clay rounded-full ring-2 ring-white" />
              </button>
              <div className="w-9 h-9 rounded-full bg-court-blue text-white flex items-center justify-center font-medium shadow-sm">
                BC
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 p-6 bg-gray-50 overflow-auto">
            {/* Page content will be rendered here */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;