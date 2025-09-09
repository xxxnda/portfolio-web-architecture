import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">MOUL VISION</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Modern architecture studio creating innovative and sustainable designs that transform spaces and communities.
            </p>
          </div>

          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Email: hello@moulvision.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Design Street, Creative City</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2024 MOUL VISION. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.897 3.708 13.746 3.708 12.449s.49-2.448 1.418-3.323C6.001 8.25 7.152 7.76 8.449 7.76s2.448.49 3.323 1.366c.875.875 1.366 2.026 1.366 3.323s-.491 2.448-1.366 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-2.326c-.875.875-2.026 1.366-3.323 1.366s-2.448-.491-3.323-1.366c-.875-.875-1.366-2.026-1.366-3.323s.491-2.448 1.366-3.323C10.508 7.441 11.659 6.95 12.956 6.95s2.448.491 3.323 1.366c.875.875 1.366 2.026 1.366 3.323s-.491 2.448-1.366 3.323z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
