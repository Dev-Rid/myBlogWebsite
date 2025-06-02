import React from 'react';

const CreatePostPage = () => {
  return (
    <div className="primary min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg border border-gray-300 shadow-sm">
        {/* Header */}
        <div className="primary flex items-center justify-between p-6 border-b border-gray-200">
          <button
            className='bg-gray-400 rounded-lg px-8 py-4 text-gray-700 font-medium text-lg '
            // className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded"
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
          {/* Main Content - Create Post Form */}
          <div className="flex-1">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-300 mb-2">Create New Post</h1>
              <p className="text-gray-400">Write and publish your blog post</p>
            </div>

            {/* Post Form */}
            <form className="space-y-6">
              {/* Post Title */}
              <div>
                <label className="block text-gray-300 font-medium mb-2">Post Title</label>
                <input
                  type="text"
                  placeholder="Enter your post title..."
                  className="primary w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
              </div>

              {/* Featured Image Upload */}
              <div>
                <label className="block text-gray-300 font-medium mb-2">Featured Image</label>
                <div className="primary w-full h-48 bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300">
                  <div className="text-center">
                    <div className="text-gray-500 text-lg mb-2">📷</div>
                    <span className="text-gray-500">Click to upload image</span>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className=''>
                <label className=" block text-gray-300 font-medium mb-2">Content</label>
                <textarea
                  rows={12}
                  placeholder="Write your post content here..."
                  className="primary w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-gray-300 font-medium mb-2">Tags</label>
                <input
                  type="text"
                  placeholder="Enter tags separated by commas..."
                  className="primary w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded font-medium"
                >
                  Publish Post
                </button>
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400  bg-gradient-to-r from-indigo-500 to-purple-600 text-gray-300 px-6 py-2 rounded font-medium"
                >
                  Save Draft
                </button>
                <button
                  type="button"
                  className="bg-gray-200 hover:bg-gray-300  bg-gradient-to-r from-indigo-500 to-purple-600 text-gray-300 px-6 py-2 rounded font-medium"
                >
                  Preview
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="w-64 space-y-6">
            {/* Post Settings */}
            <div>
              <h3 className="text-xl font-bold text-gray-300 mb-4">Post Settings</h3>
              <div className="space-y-4">
                {/* Status */}
                <div>
                  <label className=" block text-gray-300 font-medium mb-2">Status</label>
                  <select className="primary w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded text-gray-300">
                    <option>Draft</option>
                    <option>Published</option>
                    <option>Private</option>
                  </select>
                </div>

                {/* Publish Date */}
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Publish Date</label>
                  <input
                    type="datetime-local"
                    className="primary w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded text-gray-300"
                  />
                </div>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xl font-bold text-gray-300 mb-4">Categories</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-300">Technology</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-300">Lifestyle</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-300">Travel</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-300">Food</span>
                </label>
              </div>
              <button className="mt-3 text-blue-600 text-sm hover:underline">
                + Add New Category
              </button>
            </div>

            {/* SEO Settings */}
            {/* <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SEO</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-gray-700 text-sm mb-1">Meta Description</label>
                  <textarea
                    rows={3}
                    placeholder="Brief description for search engines..."
                    className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded text-sm placeholder:text-gray-500"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-1">Focus Keyword</label>
                  <input
                    type="text"
                    placeholder="Main keyword..."
                    className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded text-sm placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div> */}

            {/* Post Stats Placeholder */}
            <div className='mt-14'>
              <h3 className="text-xl font-bold text-gray-300 mb-4">Statistics</h3>
              <div className="space-y-2">
                <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;