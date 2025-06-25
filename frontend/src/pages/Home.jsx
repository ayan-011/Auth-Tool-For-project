import React from 'react'   
import Navbar from '../nav/Navbar'
const Home = () => {
  return (
    <>    
    
    <div className="w-full bg-zinc-900 h-screen  ">
 
     <div className="bg-red-900 w-full h-24 flex justify-center items-center">
      <Navbar/>
     </div>
     <a href="/signup" className='bg-blue-900 p-4'>Signup</a>
     <a href="/login" className='bg-blue-900 p-4 m-5'>login</a>
      
   
    </div>
    </>
  )
}

export default Home