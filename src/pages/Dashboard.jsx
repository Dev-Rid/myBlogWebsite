import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Simple icon components (you can replace with your preferred icon library)
const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MoreHorizontalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01" />
  </svg>
);

const NetworkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
);

// Dropdown Menu Component
const DropdownMenu = ({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
          <div className="py-1" onClick={() => setIsOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownMenuItem = ({ children, onClick }) => (
  <div 
    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
    onClick={onClick}
  >
    {children}
  </div>
);

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 primary border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 text-gray-300 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <NetworkIcon />
            </div>
            <span className="textColor  text-xl font-semibold ">Dashboard</span>
          </div>

          <nav className="space-y-2">
            <div className="text-gray-300 py-2 px-3 text-lg cursor-pointer hover:bg-gray-500 rounded"> <Link to="/logo">Logo</Link></div>
            <div className="text-gray-300 py-2 px-3 text-lg cursor-pointer hover:bg-gray-500 rounded">
              <Link to="/create">Create New Post</Link>
            </div>
            <div className="text-gray-300 py-2 px-3 text-lg cursor-pointer hover:bg-gray-500 rounded"> <Link to="/lmerlimger">Manage Posts</Link></div>
            <div className="text-gray-300 py-2 px-3 text-lg cursor-pointer hover:bg-gray-500 rounded"><Link to="/lmerlimgersdf">Categories</Link></div>
            <div className="text-gray-300 py-2 px-3 text-lg cursor-pointer hover:bg-gray-500 rounded"><Link to="/lmerlimgerdfg">Comments</Link></div>
            <div className="text-gray-300 py-2 px-3 text-lg cursor-pointer hover:bg-gray-500 rounded"><Link to="/lmerlimgerfgg">Analytics</Link></div>
            <div className="text-gray-300 py-2 px-3 text-lg cursor-pointer hover:bg-gray-500 rounded"><Link to="/lmerlimgersfgg">Settings</Link></div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 primaryTwo overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <SearchIcon />
                </div>
                <input 
                  type="text"
                  placeholder="Search" 
                  className="inputBackground w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="w-12 h-12 ml-4 bg-gray-200 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-8">
            <h1 className="textColor text-2xl font-semibold mb-6">Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="inputBackground border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-300">Total Posts</h3>
              </div>
              <div className="inputBackground border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-300">Total Comments</h3>
              </div>
              <div className="inputBackground border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-300">Drafts</h3>
              </div>
              <div className="inputBackground border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-300">Views</h3>
              </div>
            </div>
          </div>

          {/* Recent Posts Section */}
          <div className="mb-8">
            <h2 className="textColor text-2xl font-semibold mb-4">Recent Posts</h2>
            <div className="inputBackground border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="inputBackground border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-3 px-6 text-gray-300 font-medium">Title</th>
                    <th className="text-left py-3 px-6 text-gray-300 font-medium">Status</th>
                    <th className="text-left py-3 px-6 text-gray-300 font-medium">Date</th>
                    <th className="text-left py-3 px-6 text-gray-300 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-48"></div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                    </td>
                    <td className="py-4 px-6">
                      <DropdownMenu
                        trigger={
                          <button className="p-2 hover:bg-gray-100 rounded">
                            <MoreHorizontalIcon />
                          </button>
                        }
                      >
                        <DropdownMenuItem onClick={() => console.log('Edit')}>
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log('Delete')}>
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenu>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-56"></div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                    </td>
                    <td className="py-4 px-6">
                      <DropdownMenu
                        trigger={
                          <button className="p-2 hover:bg-gray-100 rounded">
                            <MoreHorizontalIcon />
                          </button>
                        }
                      >
                        <DropdownMenuItem onClick={() => console.log('Edit')}>
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log('Delete')}>
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenu>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-64"></div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                    </td>
                    <td className="py-4 px-6">
                      <DropdownMenu
                        trigger={
                          <button className="p-2 hover:bg-gray-100 rounded">
                            <MoreHorizontalIcon />
                          </button>
                        }
                      >
                        <DropdownMenuItem onClick={() => console.log('Edit')}>
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log('Delete')}>
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenu>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Comments Section */}
          <div className=''>
            <h2 className="textColor text-2xl font-semibold text-gray-900 mb-4">Recent Comments</h2>
            <div className="inputBackground border border-gray-200 rounded-lg p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-1/3"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-2/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}