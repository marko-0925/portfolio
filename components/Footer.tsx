const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2024 David Crystal. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/david-crystal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/david-star-0210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:david05220210@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 