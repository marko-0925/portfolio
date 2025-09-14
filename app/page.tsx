import './globals.css'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">Marko Djurdjevic</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Marko Djurdjevic</h1>
        <h2 className="text-2xl text-center mb-8 text-gray-600">Full-Stack Engineer</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-4 text-gray-700">
            Testing simple header. If you can see this, the basic setup is working.
          </p>
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-green-800">
              ✅ Simple header test - if you see this, everything is working!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}