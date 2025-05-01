import React from 'react'

const PostDetails = () => {
  return (
    <div className='primary border-1 min-h-screen] '>
        <div>
            <div>
                <div className='flex justify-between items-center p-4'>
                  <h3>LOGO</h3>

                  <input type="search" />
                </div>

                <div>
                  <div>
                    <h2>POST TITLE</h2>
                  </div>
                  <div>
                    <span>Author Name</span>
                  </div>
                  <div>
                    <span>Date</span>
                  </div>

                  <div>
                    <img src="img" alt="img" />
                  </div>

                  <div>
                    <p>Post content goes here...</p>
                  </div>
                  <div>
                    <p>Post content goes here...</p>
                  </div>
                  <div>
                    <p>Post content goes here...</p>
                  </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default PostDetails