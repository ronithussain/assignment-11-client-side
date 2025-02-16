import { motion } from "framer-motion";

const UpdateModal = ({ isOpen, onClose, onUpdate, review }) => {

    if (!isOpen || !review) return null;



    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 50 }}
            className="sm:p-8 p-4 sm:w-3xl w-96 rounded-lg shadow-lg bg-white border border-gray-300"
        >
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Update Your Review</h2>
            <form onSubmit={(e) => onUpdate(e, review._id)} className="space-y-4">
                
                {/* Service Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Service Title:</label>
                    <input
                        type="text"
                        name="serviceTitle"
                        defaultValue={review.serviceTitle}
                        disabled
                        className="w-full p-3 mt-2 bg-gray-100 text-gray-600 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Review */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Your Review:</label>
                    <textarea
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        name="review"
                        defaultValue={review.review}
                        rows="4"
                        placeholder="Write your review..."
                        required
                    ></textarea>
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Rating (1-5):</label>
                    <input
                        type="number"
                        name="rating"
                        defaultValue={review.rating}
                        min="1"
                        max="5"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200"
                    >
                        Update
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </motion.div>
    </div>
    );
};

export default UpdateModal;