import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const AppLayout = () => {
  return (
    <div>
      <main>

        <Header />
        <Outlet />
        {/* body */}

      </main>

        {/* Footer */}
        <div className='p-10 text-center bg-gray-800 mt-10'>
            Made With ❤️
        </div>
    </div>
  )
}

export default AppLayout ;
