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
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>

          {/* Buttons */}
          <div className="mt-6 flex sm:space-x-4 space-y-2 sm:flex-row flex-col">
            <Link to='/add-service'>
              <button className="btn-xs bg-red-600 px-6 py-3 rounded-lg text-lg font-bold hover:bg-red-700">
                <span className='text-yellow-500'>- </span> Add <span className='font-bold text-yellow-500'>Job</span> Now
              </button>
            </Link>
            <Link to='/add-service'>
              <button className="btn-xs bg-white text-black px-6 py-3 rounded-lg text-lg font-bold hover:bg-gray-300">
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
