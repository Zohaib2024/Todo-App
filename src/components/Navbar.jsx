import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white py-2'>
        <div className='logo'>
            <span className='font-bold text-xl mx-9'>My Task</span>
        </div>
        <ul className="flex gap-9 mx-9">
            <li className='cursor-pointer hover:font-bold'>Home</li>
            <li className='cursor-pointer hover:font-bold'>Your Task</li>
        </ul>
    </nav>
  )
}

export default Navbar