import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();  // To dynamically get the current year

  return (
    <footer className="bg-zinc-800 text-white py-4 mt-8">
      <div className="text-center">
        <p>&copy; {currentYear} Rathin-Web. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
