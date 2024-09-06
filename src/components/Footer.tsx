import React from 'react'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} E-Learning Platform. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
