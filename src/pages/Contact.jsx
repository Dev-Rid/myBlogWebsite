import React from 'react';
import { Link } from 'react-router-dom';

// const ContactPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800">
//       {/* Header */}
//       <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
//         <div className="text-2xl font-bold text-blue-600">MyBlog</div>
//         <nav className="space-x-4">
//           <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
//           <a href="/posts" className="text-gray-700 hover:text-blue-500">Posts</a>
//           <a href="/contact" className="text-blue-600 font-semibold">Contact</a>
//           <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Login</button>
//           <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-50">Sign Up</button>
//         </nav>
//       </header>

//       {/* Contact Form */}
//       <main className="flex flex-col md:flex-row p-6 md:p-12 gap-10 flex-grow">
//         {/* Form Section */}
//         <form className="bg-white shadow-md rounded p-6 w-full md:w-1/2">
//           <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact Us</h2>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Name</label>
//             <input type="text" placeholder="Your Name" className="w-full border rounded px-3 py-2 focus:outline-blue-500" />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Email</label>
//             <input type="email" placeholder="Your Email" className="w-full border rounded px-3 py-2 focus:outline-blue-500" />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Subject</label>
//             <input type="text" placeholder="Subject" className="w-full border rounded px-3 py-2 focus:outline-blue-500" />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Message</label>
//             <textarea rows="4" placeholder="Your message..." className="w-full border rounded px-3 py-2 focus:outline-blue-500"></textarea>
//           </div>

//           <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
//             Send Message
//           </button>
//         </form>

//         {/* Optional: Map or Contact Info Section */}
//         <div className="w-full md:w-1/2 bg-blue-50 rounded p-6">
          // <h3 className="text-xl font-semibold mb-4">Our Office</h3>
          // <p className="mb-2">📍 123 Blog Street, Lagos, Nigeria</p>
          // <p className="mb-2">📞 +234 801 234 5678</p>
          // <p className="mb-2">✉️ contact@myblog.com</p>

          // <div className="mt-6">
          //   <iframe
          //     className="w-full h-64 rounded"
          //     src="https://maps.google.com/maps?q=Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
          //     loading="lazy"
          //     title="Google Map"
          //   ></iframe>
          // </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white py-4 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} MyBlog. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default ContactPage;




// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"

const ContactPage = () => {
  return (
    <div className="primary min-h-screen bg-gray-50 p-6">
      <div className="primary max-w-6xl mx-auto bg-white rounded-lg border border-gray-300 shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button variant="secondary" className="bg-gray-400 rounded-lg px-8 py-4 text-gray-700 font-medium text-lg">
            LOGO
          </button>
          <input placeholder="Search" 
          // className="w-64 bg-gray-200 border-gray-300 placeholder:text-gray-600" 
            className="px-4 py-4 border-2 border-gray-300 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg"
            
          />
        </div>

        <div className="flex gap-8 p-6">
          {/* Contact Form Section */}
          <div className="flex-1">
            {/* Page Header */}
            <div className="text-center mb-8">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 text-5xl font-bold text-gray-300 text-center mb-4">Contact Us</h1>
              <p className="text-gray-400">Get in touch with our team</p>
            </div>

            {/* Contact Form */}
            <div className="primary bg-gray-100 border border-gray-300 rounded-lg p-8 mb-8">
              <form className="space-y-6">
                <div>
                  {/* <label className="block text-gray-300 font-medium mb-2">Name</label> */}
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg"
                  />
                </div>

                <div>
                  {/* <label className="block text-gray-300 font-medium mb-2">Email</label> */}
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg"
                  />
                </div>

                <div>
                  {/* <label className="block text-gray-300 font-medium mb-2">Subject</label> */}
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg"
                  />
                </div>

                <div>
                  {/* <label className="block text-gray-300 font-medium mb-2">Message</label> */}
                  <textarea
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg"
                  />
                </div>

                <div>
                   <Link
                      to="/dashboard"
                    className="block w-full text-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl text-lg shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"  
                    >
                    Login
                    </Link>
                </div>
                {/* <button type="submit" className="bg-gray-400 hover:bg-gray-500 text-white px-8 py-2">
                  Send Message
                </button> */}
              </form>
            </div>

          </div>

          {/* Sidebar */}
          <div className="w-64 space-y-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-400">Contact Info</h3>
              <p className="mb-2 text-gray-400">📍 Ologun-eru, Ibadan, Nigeria</p>
              <p className="mb-2 text-gray-400">📞 +234 808 524 1939</p>
              <p className="mb-2 text-gray-400">✉️ ridwanabiola2000@gmail.com</p>
            </div>

            {/* Map Placeholder */}
            <div>
              <h3 className="text-2xl font-bold text-gray-400 mb-4">Location</h3>
              <div className="mt-6">
                <iframe
                  className="w-full h-64 rounded"
                  src="https://maps.google.com/maps?q=Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
