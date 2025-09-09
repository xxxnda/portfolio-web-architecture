import Image from 'next/image'

export default function PortfolioGrid() {
  const projects = [
    {
      id: 1,
      title: "Modern Residential Complex",
      category: "Residential",
      description: "A sustainable housing development featuring contemporary design and energy-efficient systems.",
      image: "/placeholder-project-1.jpg",
      year: "2023"
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "Commercial",
      description: "Innovative office space designed to foster collaboration and productivity.",
      image: "/placeholder-project-2.jpg",
      year: "2023"
    },
    {
      id: 3,
      title: "Cultural Center",
      category: "Public",
      description: "A community gathering space that celebrates local culture and arts.",
      image: "/placeholder-project-3.jpg",
      year: "2022"
    },
    {
      id: 4,
      title: "Luxury Villa",
      category: "Residential",
      description: "Private residence combining modern luxury with natural landscape integration.",
      image: "/placeholder-project-4.jpg",
      year: "2022"
    },
    {
      id: 5,
      title: "Educational Campus",
      category: "Educational",
      description: "State-of-the-art learning facilities designed for the future of education.",
      image: "/placeholder-project-5.jpg",
      year: "2021"
    },
    {
      id: 6,
      title: "Mixed-Use Development",
      category: "Mixed-Use",
      description: "Urban development combining retail, office, and residential spaces.",
      image: "/placeholder-project-6.jpg",
      year: "2021"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div key={project.id} className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-[4/3] mb-4">
            {/* Placeholder for project images */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
              {project.category}
            </div>
            <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
              {project.year}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
