import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='primary min-h-screen flex justify-start items-center border-2 pt-2 '>
      <div className='flex flex-row '>
        {/* sidebar */}
        <div className='m8 border-r-2 border-gray-400 w-38 h-90 ml-2 '>
          <div > 
            <h1>Dashboard</h1>
          </div>
          <div className='mt-8 border-t-2 border-b-2 bg-gray-50 py-2 px-10'>Logo</div>
          <div className='flex flex-col gap-5 mt-5'>
            <Link>Create New Post</Link>
            <Link>Manage Posts</Link>  
            <Link>Categories</Link>  
            <Link>Comments</Link>  
            <Link>Analytics</Link>  
            <Link>Settings</Link>  
          </div>  
        </div>

        {/* main body */}
        <div className="dashboard-container">
          <div className="dashboard-card">
            
            <div>
              <div>
                <input type="text" />
              </div>
              <div>
                <button></button>
              </div>
            </div>

            {/* overview */}
            <div>
              <div>
                <h2>Overview</h2>
              </div>
              <div>
                <div>
                  <Link>Total Posts</Link>
                </div>
                <div>
                  <Link>Total Comments</Link>
                </div>
                <div>
                  <Link>Drafts</Link>
                </div>
                <div>
                  <Link>Views</Link>
                </div>
              </div>
            </div>
            
          </div>
       
        </div>

        <div>
          <div>
            <h2>Recent Posts</h2>
          </div>

          <div>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Post 1</td>
                  <td>Author 1</td>
                  <td>Date 1</td>
                  <td>Status 1</td>
                </tr>
              
                <tr>
                  <td>Post 2</td>
                  <td>Author 2</td>
                  <td>Date 2</td>
                  <td>Status 2</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <div>
              <h2>Recent Comments</h2>
            </div>

            <div>
              <table>
                
              </table>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard