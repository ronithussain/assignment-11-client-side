import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';
import toast from 'react-hot-toast';
import axios from 'axios';
import DeleteModal from './Modals/DeleteModal';
import UpdateModal from './Modals/updateModal';
import DatePicker from 'react-datepicker';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = UseAuth();

    // modal work start here:
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        // Fetch reviews based on the logged-in user's email
        fetch(`http://localhost:8000/my-reviews/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data, startDate);
                // setStartDate(new Date(reviews.deadline))
                console.log(data);
            });
    }, [user?.email]);

    // click the delete button show the modal.
    const openDeleteModal = (review) => {
        setSelectedReview(review);
        setIsDeleteOpen(true);
    };
    // click the update button show the modal.
    const openUpdateModal = (review) => {
        setSelectedReview(review);
        setIsUpdateOpen(true);
    };

    // delete functionality
    const handleDelete = async (id) => {
        if (!id) {
            setIsDeleteOpen(false);
            return;
        }
        try {
            const { data } = await axios.delete(`http://localhost:8000/delete-review/${id}`);
            console.log(data)
            toast.success('Reviews Delete is Successfully')

            // Update UI
            setReviews(reviews.filter(review => review._id !== id));
        }
        catch (error) {
            console.log('Failed', error.message)
            toast.error('Review Delete is Failed')
        }
        setIsDeleteOpen(false);
    }
    // Update functionality
    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceTitle = form.serviceTitle.value;
        const review = form.review.value;
        const rating = form.rating.value;


        const reviewData = {
            serviceTitle,
            review,
            rating,
        }

        try {
            const { data } = await axios.put(`http://localhost:8000/update-review/${selectedReview._id}`, reviewData)
            if (data.modifiedCount > 0) {
                toast.success('Review Updated Successfully');

                setReviews(prevReviews => prevReviews.map(review =>
                    review._id === selectedReview._id ? { ...review, ...reviewData } : review
                ));
            } else {
                toast.error('No changes detected');
            }
        }
        catch (error) {
            toast.error('Review Update Failed');
        }
        setIsUpdateOpen(false);
    }

    return (
        <div className='lg:mt-[120px] mt-[130px]'>
            <div className="min-h-screen bg-gray-100 py-12 px-6">
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Reviews</h2>

                    {/* Display reviews dynamically */}
                    {reviews.length > 0 ? (
                        reviews.map((review) => (
                            <div key={review._id} className="bg-white shadow-md rounded-lg p-4 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">{review.serviceTitle}</h3>
                                <p className="text-gray-600 mt-2">{review.review}</p>
                                <p className="text-gray-600 mt-2">Rating: {review.rating}/5</p>
                                <DatePicker
                                    className='border p-2 rounded-md'
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                />

                                {/* Buttons */}
                                <div className="mt-4 flex space-x-4">
                                    <button
                                        onClick={() => openUpdateModal(review)}
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                                        Update
                                    </button>
                                    <button
                                        onClick={() => openDeleteModal(review)}
                                        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">You have no reviews yet.</p>
                    )}
                </div>
            </div>
            {/* 🛠 Delete Confirmation Modal */}
            <DeleteModal
                isOpen={isDeleteOpen}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() => handleDelete(selectedReview?._id)}
                reviewTitle={selectedReview?.serviceTitle}
            />
            {/* Update Review Modal */}
            <UpdateModal
                isOpen={isUpdateOpen}
                onClose={() => setIsUpdateOpen(false)}
                onUpdate={handleUpdate}
                review={selectedReview}
            />

        </div>
    );
};

export default MyReviews;
