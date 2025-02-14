import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';
import toast from 'react-hot-toast';
import axios from 'axios';
import DeleteModal from './Modals/DeleteModal';
import UpdateModal from './Modals/updateModal';
import DatePicker from 'react-datepicker';
import formBgImg from '../assets/form.jpg'

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
        <div className="lg:mt-[120px] mt-[130px]" style={{
            backgroundImage: `url(${formBgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className="min-h-screen  py-12 px-6">
                <div className="max-w-6xl  space-y-6 mx-auto">
                    <h2 className='lg:text-5xl text-2xl  md:text-3xl font-bold bg-gradient-to-r from-white via-white/70 to-[#1E3E62] text-transparent bg-clip-text text-center mb-6'>Your Reviews"</h2>

                    {/* Display reviews dynamically */}
                    {reviews.length > 0 ? (
                        reviews.map((review) => (
                            <div key={review._id} className="rounded-xl p-6 mb-6 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 bordersB">
                                <div className="avatar avatar-online" >
                                    <div className="w-12 mb-2">
                                        <img
                                            className=" sm:w-[60px] w-[50px] mr-2 cursor-pointer transition duration-300 hover:scale-105"
                                            referrerPolicy="no-referrer"
                                            src={user?.photoURL}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-300">{review.serviceTitle}</h3>
                                <p className="text-gray-400 mt-2 text-lg">{review.review}</p>
                                <p className="text-gray-400 mt-2 text-lg">Rating: {review.rating}/5</p>

                                {/* Date Picker */}
                                <div className="mt-1 text-gray-400">Date: <DatePicker
                                    className="w-full border-none focus:ring-2 focus:ring-indigo-500"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                />
                                </div>

                                {/* Buttons */}
                                <div className="mt-3 flex space-x-6">
                                    <button
                                        onClick={() => openUpdateModal(review)}
                                        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-6 rounded-md transform hover:scale-105 hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => openDeleteModal(review)}
                                        className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 px-6 rounded-md transform hover:scale-105 hover:from-red-600 hover:to-orange-600 transition duration-300 ease-in-out"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600 text-lg">You have no reviews yet.</p>
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
