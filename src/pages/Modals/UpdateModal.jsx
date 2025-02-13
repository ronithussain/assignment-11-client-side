import React from 'react';

const UpdateModal = ({ isOpen, onClose, onUpdate, review }) => {

    if (!isOpen || !review) return null;



    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-xl font-semibold mb-4">Update Review</h2>
                    <form
                        onSubmit={(e) => onUpdate(e, review._id)}
                        className="mt-6 border p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold">Add a Review</h2>
                        {/* service title */}
                        <label className="block font-bold">Service Title:</label>
                        <input
                            type="text"
                            name="serviceTitle"
                            defaultValue={review.serviceTitle}
                            disabled
                            className="w-full p-2 border rounded mt-2"
                            required
                        />
                        {/* review */}
                        <textarea
                            className="w-full p-2 border rounded mt-2"
                            name="review"
                            defaultValue={review.review}
                            rows="4"
                            placeholder="Write your review..."
                            required
                        ></textarea>
                        {/* rating */}
                        <div className="mt-2">
                            <div className="mt-2">
                                <label className="block font-bold mt-2">Rating:</label>
                                <input
                                    type="number"
                                    name="rating"
                                    defaultValue={review.rating}
                                    min="1"
                                    max="5"
                                    className="w-full p-2 border rounded mt-2"
                                    required
                                />

                            </div>
                        </div>
                        <button
                            type='button'
                            onClick={onClose}
                            className="bg-blue-500 text-white px-4 py-2 mt-3 rounded">
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className="bg-blue-500 text-white px-4 py-2 mt-3 rounded">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default UpdateModal;