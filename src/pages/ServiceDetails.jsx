import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { format } from "date-fns";
import Rating from "react-rating";
import toast from "react-hot-toast";

const ServiceDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    //________________________________________________
    const { user } = UseAuth();
    const [startDate, setStartDate] = useState(new Date());
    const [ratings, setRatings] = useState(3);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`http://localhost:8000/services/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log("Fetched Service Data:", data);
                setService(data);
                // setReviews(data.reviews || []);
                setLoading(false);
            })
    }, [id]);

    if (loading) {
        return <p className="text-center text-xl">Loading...</p>;
    }

    const { title, description, deadline, category, price, image, _id } = service || {}

    // ____________________________________________________
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = user?.email;
        const photo = user.photoURL;
        const name = user.displayName;
        const review = form.review.value;
        const deadline = startDate;
        const rating = ratings
        const reviewId = _id
        const serviceTitle = title

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
        }
        console.log(formData);
        try {
            // 1. make a post request
            await axios.post('http://localhost:8000/add-reviews', formData)
            // 2. Reset form
            form.reset();
            // 3. show toast message
            toast.success('Reviews added successfully!!')
            // 4. navigate to my-reviews page
            navigate('/my-reviews')
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    }


    return (
        <div className="p-6 lg:mt-[120px] mt-[130px]">

            <img src={image} alt="Service Image" className="w-full h-80 object-cover rounded-lg" />
            <h1 className="text-3xl font-bold mt-4"> {title}</h1>
            <p className="text-gray-600"> {description}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p>Service Date:  {format(new Date(deadline), 'P')}</p>

            {/* Total Review Count */}
            <h2 className="text-2xl font-bold mt-6">Reviews (3)</h2>
            <div className="space-y-4">

                <div className="border p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-4">
                        <img
                            src={user?.photoURL}
                            alt="User Photo"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <h3 className="font-bold">{user.displayName}</h3>

                        </div>
                    </div>
                </div>

            </div>
            {/* Add Review Form */}
            <form
                onSubmit={handleOnSubmit}
                className="mt-6 border p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold">Add a Review</h2>
                <textarea
                    className="w-full p-2 border rounded mt-2"
                    name="review"
                    rows="4"
                    placeholder="Write your review..."
                    required
                ></textarea>
                <div className="mt-2">
                    <div className="mt-2">
                        <label className="font-bold">Rating:</label>
                        <Rating
                            initialRating={ratings}
                            onChange={(rate) => setRatings(rate)} // Ensure it's updating properly
                            emptySymbol={<span className="text-gray-400">☆</span>}
                            fullSymbol={<span className="text-yellow-500">★</span>}
                        />

                    </div>
                </div>
                <div className="mt-2">
                    <label className="font-bold">Review Date: </label>
                    <DatePicker
                        className="border p-2 rounded-md"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        showYearDropdown
                        scrollableYearDropdown
                    />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded">
                    Submit Review
                </button>
            </form>
        </div>

    );
};

export default ServiceDetails;
