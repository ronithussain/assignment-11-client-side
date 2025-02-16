import { Link } from 'react-router-dom'

const Slider = ({ image, text }) => {

  return (
    <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>

          {/* Buttons */}
          <div className="sm:mt-4 mt-24 px-2 sm:px-0 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <Link to="/add-service" className="w-full sm:w-auto">
              <button className="btn-xs bg-red-600 w-full sm:w-auto px-6 py-3 rounded-lg text-lg font-bold hover:bg-red-700">
                <span className="text-yellow-500">- </span> Add <span className="font-bold text-yellow-500">Service</span> Now
              </button>
            </Link>
            <Link to="/about-page" className="w-full sm:w-auto">
              <button className="btn-xs bg-white text-black w-full sm:w-auto px-6 py-3 rounded-lg text-lg font-bold hover:bg-gray-300">
                More Details
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Slider
