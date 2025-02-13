import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { format } from "date-fns";
import Rating from "react-rating";
import toast from "react-hot-toast";
import navImg from '../assets/review.jpg'

const ServiceDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user } = UseAuth();
    const [startDate, setStartDate] = useState(new Date());
    const [ratings, setRatings] = useState(3);
    const navigate = useNavigate();
    //_____________________________________
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:8000/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                setLoading(false);
            })
    }, [id]);


    // reviews er data ui te dekhonor jonno fetch kora holo;
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

    if (loading) {
        return <p className="text-center text-xl">Loading...</p>;
    }

    const { title, description, deadline, category, price, image, _id } = service || {}

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = user?.email;
        const photo = user.photoURL;
        const name = user.displayName;
        const review = form.review.value;
        const deadline = startDate;
        const rating = ratings;
        const reviewId = _id;
        const serviceTitle = title;

        // 1. check reviews permission validation
        if (service?.email === user?.email) return toast.error('Action not permission!');

        // 2. User login check
        if (!user) return toast.error('You must be logged in to submit a review!');

        // 3. Rating validation (must be between 1 and 5)
        if (rating < 1 || rating > 5) return toast.error("Rating must be between 1 to 5!");

        const formData = {
            email,
            photo,
            name,
            review,
            deadline,
            rating,
            reviewId,
            serviceTitle
        };

        try {
            await axios.post('http://localhost:8000/add-reviews', formData);
            form.reset();
            toast.success('Review added successfully!');
            navigate('/my-reviews');
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    }

    return (
        <div className="sm:p-6 lg:mt-[110px] mt-[110px]" style={{
            backgroundImage: `url(${navImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className=" w-10/12 mx-auto py-12">
                <img src={image} alt="Service Image" className="w-full h-80 object-cover rounded-lg" />
                <div className="mt-4">
                    <h1 className="text-3xl font-bold text-gray-300">{title}</h1>
                    <p className="text-gray-400 mt-2">{description}</p>
                    <p className="text-gray-400 mt-2"><strong>Category:</strong> {category}</p>
                    <p className="text-gray-400 mt-2"><strong>Price:</strong> ${price}</p>
                    <p className="text-gray-400 mt-2">Service Date: {format(new Date(deadline), 'P')}</p>
                </div>

                {/* display user reviews and name of user */}
                <div className="space-y-4 mt-4  bg-[#1E1E20]">
                    {/* Display user reviews */}
                    <div className="border p-4 rounded-lg shadow-md">
                        <div className="flex items-center gap-4">
                            <img src={user?.photoURL} alt="User Photo" className="w-12 h-12 rounded-full" />
                            <div>
                                <h3 className="font-semibold text-gray-400">{user.displayName}</h3>
                            </div>
                        </div>
                        <div className="mt-2 text-gray-600">
                            <p>{/* Review content can be displayed here */}</p>
                        </div>
                    </div>
                </div>

                {/* Add Review Form */}
                <form onSubmit={handleOnSubmit} className="mt-8 p-6 border-gray-200 rounded-lg shadow-md bg-[#1E1E20]">
                    <h2 className="text-xl font-semibold mb-3 text-gray-300">Add a Review</h2>
                    <textarea
                        className="w-full p-3 rounded-md mt-2 outline-none bordersB text-sm sm:text-base text-gray-300"
                        name="review"
                        rows="4"
                        placeholder="Write your review..."
                        required
                    ></textarea>

                    <div className="mt-4">
                        <label className="font-semibold text-gray-400">Rating: </label>
                        <Rating
                            initialRating={ratings}
                            onChange={(rate) => setRatings(rate)}
                            emptySymbol={<span className="text-gray-400">☆</span>}
                            fullSymbol={<span className="text-yellow-500">★</span>}
                        />
                    </div>

                    <div className="mt-2">
                        <label className="font-semibold text-gray-400 text-xs sm:text-base">Review Date:  </label>
                        <DatePicker
                            className=" sm:p-3 border-none  w-full text-gray-400 text-xs sm:text-base"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            scrollableYearDropdown
                        />
                    </div>

                    <button type="submit" className="mt-2 text-white sm:px-6 px-2 sm:py-3 py-1 transition duration-200 hover:bg-gray-500 border-gray-300 border-b-1 hover:text-gray-100 text-sm sm:text-base">
                        Submit Review
                    </button>
                </form>

                {/* Total Review Count */}
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">Total Reviews: {reviews.length}</h2>
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
                            <h3 className="sm:text-2xl text-xl font-bold text-gray-300">{review.serviceTitle}</h3>
                            <p className="text-gray-400 mt-2 text-lg">{review.review}</p>
                            <p className="text-gray-400 mt-2 text-lg">Rating: {review.rating}/5</p>

                            {/* Date Picker */}
                            <div className="mt-1 text-gray-400">Date: <DatePicker
                                className="w-full border-none focus:ring-2 focus:ring-indigo-500"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600 text-lg">You have no reviews yet.</p>
                )}
            </div>
        </div>
    );
};

export default ServiceDetails;
