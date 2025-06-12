import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // IMPORTANT: For NavLink, 'href' becomes 'to'
  // Also, for hash links like '#home', react-router-dom generally works with actual routes
  // For a pure SPA, you'd typically use paths like '/home', '/about', etc.
  // If you *must* use hash links AND react-router, you might need a different strategy
  // but for typical routing, use actual paths.
  // I'll adjust these to typical routes for demonstration.
  const navLinks = [
    { name: 'Home', to: '/' }, // Root path for home
    { name: 'About Us', to: '/about' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Contact', to: '/contact' }
  ];

  // Define active and inactive link styles
  const getNavLinkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-100 ` +
    (isActive
      ? 'text-white bg-indigo-600' // Active link style
      : 'text-gray-700 hover:text-indigo-600'); // Inactive link style

  const getMobileNavLinkClasses = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ` +
    (isActive
      ? 'text-white bg-indigo-600' // Active mobile link style
      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'); // Inactive mobile link style

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Still use <a> for external or root navigation not tied to NavLink active state */}
          <div className="flex-shrink-0">
            <NavLink
              to="/" // Use NavLink for the logo if it points to a route
              className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              SinglePageApplication
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to} // Use 'to' instead of 'href'
                  className={getNavLinkClasses} // Use the function to apply classes
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
              aria-expanded={isOpen ? 'true' : 'false'} // Set aria-expanded dynamically
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to} // Use 'to'
              onClick={() => setIsOpen(false)} // Close menu on link click
              className={getMobileNavLinkClasses} // Use the function to apply classes
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}