import React from 'react'

const Navbar = () => {
  return (
    <nav>
    <h1>Redux Counter</h1>
        <ul>
            <li>MyRecord</li>
            <li>Profile</li>
            <button>
                <li>
                    Logout
                </li>
            </button>
        </ul>
    </nav>
  )
}

export default Navbar