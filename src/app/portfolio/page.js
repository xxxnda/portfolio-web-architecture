'use client'

import { useState } from 'react'
import PortfolioGrid from '@/components/PortfolioGrid'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['All', 'Residential', 'Commercial', 'Public', 'Educational', 'Mixed-Use']

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore our diverse collection of architectural projects that showcase innovation, 
                sustainability, and exceptional design.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PortfolioGrid />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your architectural vision to life with innovative design and sustainable solutions.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}