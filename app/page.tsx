import './globals.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Marko Djurdjevic</h1>
      <h2 className="text-2xl text-center mb-8 text-gray-600">Full-Stack Engineer</h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-4 text-gray-700">
          Welcome to my portfolio! This is a test to see if the basic rendering is working.
        </p>
        <p className="text-lg mb-4 text-gray-700">
          If you can see this text, the basic rendering is working correctly.
        </p>
        <div className="bg-blue-100 p-4 rounded-lg mb-4">
          <p className="text-blue-800">
            This blue box confirms that Tailwind CSS is working properly.
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg mb-4">
          <p className="text-green-800">
            ✅ Static content is working! No JavaScript required.
          </p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <p className="text-red-800">
            🔴 If you can see this red box, everything is working perfectly!
          </p>
        </div>
      </div>
    </div>
  )
}