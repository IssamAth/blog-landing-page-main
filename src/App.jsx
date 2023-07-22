import React from 'react'
import LOGO from '../src/images/logo.svg'
// import {IoIosArrowDown} from 'react-icons/io'

const App = () => {
  return (
    <div className=' mx-0'>

      {/* SHOWCASE PART */}

      <div className=' flex-col bg-pOneBackground h-90v rounded-es-7xl text-white'>
        {/* CONTAINER */}
        <div className=' container mx-auto h-full'>
          {/* FLEX ITEM 1 */}
          <div className=' flex flex-row justify-between pt-6'>
            <div className=' flex flex-row space-x-12'>
              {/* LOGO */}
              <div className=''><img src={LOGO} className=" h-9 " alt="" /></div>
              {/* NAV BAR */}
              <nav className=' flex pt-2 space-x-8'>
                <div >Product</div>
                <div>Company</div>
                <div>Connect</div>
              </nav>
            </div>

            <div className=' flex space-x-5 pt-2'>
              <div>Login</div>
              <div className=' bg-white text-pink-900 flex py-2 -mt-2 px-5 rounded-3xl'>
                <div className=' '>Sign Up</div>
              </div>
            </div>
          </div>
          {/* FLEX ITEM 2 */}
          <div className=' text-center mt-60'>
            <div><h1>A modern publishing platform</h1></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App