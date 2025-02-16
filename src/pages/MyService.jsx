import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';
import Modal from 'react-modal';
Modal.setAppElement('#root');
import toast from 'react-hot-toast';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import UseAxiosSecure from '../hooks/UseAxiosSecure';
import { motion } from "framer-motion";



const MyService = () => {
    const { user } = UseAuth();
    const [myServices, setMyServices] = useState([]);
    // search
    const [search, setSearch] = useState('');


    // delete modal work
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedServiceId, setSelectedServiceId] = useState(null);

    // update modal work
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [updatedService, setUpdatedService] = useState({ title: '', price: '', category: '', description: '' });


    // Use axios customs hook
    const axiosSecure = UseAxiosSecure()
    useEffect(() => {
        // axios.get(`https://assignment-11-server-side-ashen.vercel.app/my-service/${user?.email}?search=${search}`, {withCredentials: true})
        //     .then(response => {
        //         setMyServices(response.data);

        //     })
        axiosSecure.get(`/my-service/${user?.email}?search=${search}`)
            .then(res => setMyServices(res.data))
            .catch(error => {
                console.error('Error fetching services:', error);

            });
    }, [user?.email, search]);
    // console.log(myServices)

    // delete functionality
    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://assignment-11-server-side-ashen.vercel.app/my-service-delete/${selectedServiceId}`)

            setMyServices(myServices.filter(service => service._id !== selectedServiceId));
            toast.success('Data Deleted Successfully!')
            setShowDeleteModal(false);
        }
        catch (err) {
            // console.log(err.message);
            toast.error(err.message)
        }

    }

    // update functionality
    const handleUpdate = async () => {
        try {
            await axios.put(`https://assignment-11-server-side-ashen.vercel.app/my-service-update/${selectedServiceId}`, updatedService);
            setMyServices(myServices.map(service =>
                service._id === selectedServiceId ? { ...service, ...updatedService } : service
            ));
            toast.success('Service Updated Successfully!');
            setShowUpdateModal(false);
        } catch (err) {
            // console.log(err.message);
            toast.error(err.message);
        }
    };

    // handle update modal open and populate fields
    const handleUpdateModalOpen = (service) => {
        setSelectedServiceId(service._id);
        setUpdatedService({
            title: service.title,
            price: service.price,
            category: service.category,
            description: service.description
        });
        setShowUpdateModal(true);
    };



    return (
        <div className="lg:mt-[105px] mt-[105px] bg-gradient-to-r from-purple-200 via-blue-200 to-teal-200 min-h-screen flex flex-col items-center sm:p-8 pt-4">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl px-1 sm:px-0"
        >
            <input
                type="text"
                placeholder="Search your services..."
                onChange={e => setSearch(e.target.value)}
                className="w-full px-4 py-3 rounded-lg shadow-md text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
            />
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl bg-white shadow-xl rounded-lg mt-6 overflow-scroll"
        >
            <table className="w-full text-left border-collapse">
                <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                    <tr>
                        <th className="p-4 text-lg">User</th>
                        <th className="p-4 text-lg">Service</th>
                        <th className="p-4 text-lg">Price</th>
                        <th className="p-4 text-lg">Category</th>
                        <th className="p-4 text-lg">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {myServices.map(service => (
                        <tr key={service._id} className="border-b hover:bg-gray-100 transition-all duration-300 ease-in-out">
                            <td className="p-4">
                                <img src={user?.photoURL} alt="User" className="w-12 h-12 rounded-full border-4 border-indigo-500" />
                            </td>
                            <td className="p-4">{service.title}</td>
                            <td className="p-4">${service.price}</td>
                            <td className="p-4">{service.category}</td>
                            <td className="p-4 flex space-x-3">
                                <button onClick={() => { setSelectedServiceId(service._id); setUpdatedService(service); setShowUpdateModal(true); }} className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
                                    <FiEdit className="text-xl" />
                                </button>
                                <button onClick={() => { setSelectedServiceId(service._id); setShowDeleteModal(true); }} className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
                                    <RiDeleteBinLine className="text-xl" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>

          {/* Delete Modal */}
          <Modal
                isOpen={showDeleteModal}
                onRequestClose={() => setShowDeleteModal(false)}
                contentLabel="Delete Service"
                className="fixed inset-0 flex justify-center items-center z-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                    <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Are you sure you want to delete this service?</h2>
                    <div className="flex justify-between gap-4">
                        <button
                            onClick={handleDelete}
                            className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                        >
                            Yes, Delete
                        </button>
                        <button
                            onClick={() => setShowDeleteModal(false)}
                            className="w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>

            {/* Update Modal */}
            <Modal
                isOpen={showUpdateModal}
                onRequestClose={() => setShowUpdateModal(false)}
                contentLabel="Update Service"
                className="lg:mt-[105px] mt-[105px] fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
            >
                <div className="sm:p-8 p-4  sm:w-3xl w-96 rounded-lg shadow-lg  bordersB text-white">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-white">Update Service</h2>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium">Service Name</label>
                        <input
                            id="title"
                            type="text"
                            value={updatedService.title}
                            onChange={e => setUpdatedService({ ...updatedService, title: e.target.value })}
                            placeholder="Enter service name"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="price" className="block text-sm font-medium ">Price</label>
                        <input
                            id="price"
                            type="text"
                            value={updatedService.price}
                            onChange={e => setUpdatedService({ ...updatedService, price: e.target.value })}
                            placeholder="Enter price"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="category" className="block text-sm font-medium">Category</label>
                        <input
                            id="category"
                            type="text"
                            value={updatedService.category}
                            onChange={e => setUpdatedService({ ...updatedService, category: e.target.value })}
                            placeholder="Enter category"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="description" className="block text-sm font-medium">Description</label>
                        <textarea
                            id="description"
                            value={updatedService.description}
                            onChange={e => setUpdatedService({ ...updatedService, description: e.target.value })}
                            placeholder="Enter description"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            onClick={handleUpdate}
                            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200"
                        >
                            Update
                        </button>
                        <button
                            onClick={() => setShowUpdateModal(false)}
                            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>
    </div>
    );
};

export default MyService;