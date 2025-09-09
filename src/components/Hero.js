import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
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
  )
}
