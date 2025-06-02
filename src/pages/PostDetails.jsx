import React from 'react';

const BlogLayout = () => {
  return (
    <div className="primary min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg border border-gray-300 shadow-sm">
        {/* Header */}
        <div className="primary flex items-center justify-between p-6 border-b border-gray-200">
          <button 
            // className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded"
            className='bg-gray-400 rounded-lg px-8 py-4 text-gray-700 font-medium text-lg '
          >
            LOGO
          </button>
          <input 
            type="text" 
            placeholder="Search" 
            // className="w-64 px-4 py-2 bg-gray-200 border border-gray-300 rounded placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            className="px-4 py-4 border-2 border-gray-300 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg"

          />
        </div>

        <div className="primary flex gap-8 p-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Post Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-300 mb-2">Post Title</h1>
              <p className="text-gray-400">Author Name • Date</p>
            </div>

            {/* Featured Image Placeholder */}
            <div className="primary w-full h-64 bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center mb-8">
              <span className="text-gray-500 text-lg">Image</span>
            </div>

            {/* Content Placeholder Lines */}
            <div className="space-y-4 mb-8">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>

            <div className="space-y-4 mb-12">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
            </div>

            {/* Comments Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Comments</h2>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-64 space-y-8">
            {/* Categories */}
            <div>
              <h3 className="text-2xl font-bold text-gray-300 mb-4">Categories</h3>
              <div className="space-y-3">
                <button className="w-full bg-gray-500 hover:bg-gray-400 text-gray-300 py-2 px-4 rounded text-left">
                  Category 1
                </button>
                <button className="w-full bg-gray-500 hover:bg-gray-400 text-gray-300 py-2 px-4 rounded text-left">
                  Category 2
                </button>
                <button className="w-full bg-gray-500 hover:bg-gray-400 text-gray-300 py-2 px-4 rounded text-left">
                  Category 3
                </button>
                <button className="w-full bg-gray-500 hover:bg-gray-400 text-gray-300 py-2 px-4 rounded text-left">
                  Category 4
                </button>
              </div>
            </div>

            {/* Comments Sidebar */}
            <div>
              <h3 className="text-2xl font-bold text-gray-300 mb-4">Comments</h3>
              <div className="h-16 bg-gray-400 border border-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;