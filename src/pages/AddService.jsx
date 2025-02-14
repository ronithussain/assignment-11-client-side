import { useState } from "react";
import UseAuth from "../hooks/UseAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import footerBg from '../assets/footer-bg.jpg'


const AddService = () => {
    const { user } = UseAuth();
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();




    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const company = form.company.value;
        const website = form.website.value;
        const description = form.description.value;
        const category = form.category.value;
        const price = parseFloat(form.price.value);
        const email = user?.email;
        const deadline = startDate;


        const formData = {
            image,
            title,
            company,
            website,
            description,
            category,
            price,
            email,
            deadline,
            review_count: 0,
        };
        console.table({ formData });
        try {
            await axios.post("http://localhost:8000/add-service", formData)
            // form.reset()
            toast.success('Data Added Successfully!')
            navigate('/my-service')
        } catch (err) {
            console.log(err.message)
            toast.error(err.message)
        }
    };

    return (
        <div className="lg:mt-[120px] mt-[130px] flex justify-center items-center sm:min-h-screen h-full sm:p-6 py-6 " style={{
            backgroundImage: `url(${footerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className=" text-white sm:p-8 p-2 rounded-xl w-full max-w-4xl borders" style={{
            backgroundImage: `url(${footerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
                <h2 className='lg:text-5xl text-2xl  md:text-3xl font-bold bg-gradient-to-r from-white via-white/70 to-[#1E3E62] text-transparent bg-clip-text text-center mb-6'>Add New Service</h2>
                <form onSubmit={handleOnSubmit} className="sm:space-y-6 space-y-3">
                    {/* Service Image */}
                    <div>
                        <label className="block font-semibold">Service Image URL</label>
                        <input
                            type="text"
                            name="image"
                            placeholder="Enter image URL..."
                            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Service Title & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-semibold">Service Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter title..."
                                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-semibold">Company Name</label>
                            <input
                                type="text"
                                name="company"
                                placeholder="Enter company name..."
                                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Company Website */}
                    <div>
                        <label className="block font-semibold">Company Website</label>
                        <input
                            type="url"
                            name="website"
                            placeholder="Enter website URL..."
                            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Service Description */}
                    <div>
                        <label className="block font-semibold">Description</label>
                        <textarea
                            name="description"
                            placeholder="Write details..."
                            className="w-full p-3 h-28 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
                            required
                        ></textarea>
                    </div>

                    {/* Category & Price */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-semibold">Category</label>
                            <input
                                type="text"
                                name="category"
                                placeholder="Enter category..."
                                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-semibold">Price ($)</label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Enter price..."
                                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Email (Auto-filled) */}
                    <div>
                        <label className="block font-semibold">Your Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            value={user?.email || ""}
                            readOnly
                            className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none cursor-not-allowed"
                        />
                    </div>

                    {/* Date Picker */}
                    <div>
                        <label className="block font-semibold">Added Date</label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="P"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg transition duration-300"
                    >
                        Add Service
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddService;
