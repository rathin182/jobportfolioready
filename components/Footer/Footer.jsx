import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();  // To dynamically get the current year

  return (
    <footer className="bg-zinc-800 text-white py-4 mt-8">
      <div className="text-center">
        <p>&copy; {currentYear} YourWebsiteName. All rights reserved.</p>
        <p className="text-sm">This website was made in 2023.</p>
      </div>
    </footer>
  )
}

export default Footer
