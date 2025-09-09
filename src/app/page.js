import Image from 'next/image'
import Link from 'next/link'
import NavbarNew from '@/components/NavbarNew'
import FooterNew from '@/components/FooterNew'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNew />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="MOUL VISION"
                width={120}
                height={120}
                className="mx-auto mb-8 w-32 h-32 object-contain"
                priority
              />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                MOUL VISION
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Creating innovative architectural solutions that blend modern design with sustainable practices
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/portfolio" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200"
                >
                  View Our Work
                </Link>
                <Link 
                  href="/contact" 
                  className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Brief About Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Design That Inspires
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At MOUL VISION, we believe architecture is more than just buildings. 
                  It's about creating spaces that enhance human experiences and connect communities.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team combines decades of experience with cutting-edge design principles 
                  to deliver exceptional architectural solutions.
                </p>
                <Link 
                  href="/about" 
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                >
                  Learn more about us
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="lg:pl-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                    <div className="text-gray-600">Awards Won</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterNew />
    </div>
  )
}
