// import React from 'react'
// import { Link } from 'react-router-dom'

// const NotFound = () => {
//   return (
//     <div className='primary min-h-screen flex justify-center items-center border-2 pt-2'>
//       <div className='flex flex-col justify-center items-center gap-2'>
//         <h1 className='text-6xl text-gray-800'>404</h1>
//         <h2 className='text-4xl text-gray-700'>Page Not Found</h2>
//         <p className='text-gray-500'>The page you are looking for could not be found.</p>
//         <Link to="/homepage" className='px-10 py-[0.5rem] bg-gray-500 rounded-3xl text-white text-xl'>Go back to Homepage</Link>
//         {/* <p>Or check out our <a href="/contact">Contact</a> page for assistance.</p> */}
//       </div>
//     </div>
//   )
// }

// export default NotFound





















import React, { useState, useEffect } from 'react';

// Icon Components
const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

export default function Advanced404Page() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);
  const [suggestions] = useState([
    'Home',
    'About Us',
    'Contact',
    'Services',
    'Blog',
    'Support'
  ]);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const handleGoHome = () => {
    console.log('Navigate to homepage');
  };

  const handleGoBack = () => {
    console.log('Go back');
    // window.history.back();
  };

  const handleRefresh = () => {
    console.log('Refresh page');
    // window.location.reload();
  };

  const handleSuggestionClick = (suggestion) => {
    console.log('Navigate to:', suggestion);
  };

  return (
    <div className="primar min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="primary max-w-6xl mx-auto primary rounded-2xl border-2 border-gray-300 min-h-screen shadow-lg">
        {/* Header */}
        <header className="primary flex items-center justify-between p-6 border-b border-gray-200 bggradient-to-r from-white to-gray-50">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-6 py-3 text-white font-bold text-lg shadow-md">
            LOGO
          </div>

          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bggray-100 text-gray-300 border-2 border-gray-200 rounded-full py-3 pl-10 pr-4 w-64 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focusbg-white transition-all duration-200"
              />
            </div>
          </form>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center px-6 py-16 text-center">
          {/* Animated 404 */}
          <div className={`text-8xl md:text-9xl font-bold bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent mb-8 transform transition-all duration-1000 ${isAnimated ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            404
          </div>

          {/* Animated Heading */}
          <h1 className={`text-3xl md:text-4xl font-bold text-gray-400 mb-6 transform transition-all duration-1000 delay-300 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Oops! Page Not Found
          </h1>

          {/* Description */}
          <p className={`text-lg md:text-xl text-gray-500 mb-8 max-w-lg transform transition-all duration-1000 delay-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            The page you're looking for seems to have wandered off into the digital void. Don't worry, it happens to the best of us!
          </p>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-12 transform transition-all duration-1000 delay-700 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <button
              onClick={handleGoHome}
              className="flex bg-gradient-to-r from-indigo-500 to-purple-600 items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105"
            >
              <HomeIcon />
              Go to Homepage
            </button>
            
            {/* <button
              onClick={handleGoBack}
              className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-full text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transform hover:scale-105"
            >
              <ArrowLeftIcon />
              Go Back
            </button> */}

            {/* <button
              onClick={handleRefresh}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105"
            >
              <RefreshIcon />
              Refresh
            </button> */}
          </div>

          {/* Suggestions */}
          <div className={`transform transition-all duration-1000 delay-900 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">
              Or try visiting one of these pages:
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm transition-all duration-200 hover:shadow-md transform hover:scale-105"
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Fun Element */}
          <div className={`mt-16 text-6xl transform transition-all duration-1000 delay-1200 ${isAnimated ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`}>
            🤖
          </div>
          <p className={`mt-4 textgray-500 text-red-400 text-sm transform transition-all duration-1000 delay-1400 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Even our robot is confused!
          </p>
        </main>
      </div>
    </div>
  );
}