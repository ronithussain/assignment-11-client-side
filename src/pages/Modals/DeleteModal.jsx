import React from 'react';

const DeleteModal = ({isOpen, onClose, onConfirm, reviewTitle}) => {
    if(!isOpen) return null;


    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Delete Review: {reviewTitle}
                    </h2>
                    <p className="text-gray-600 my-4">Are you sure? This action cannot be undone.</p>

                    {/* Modal-এর Cancel ও Delete বাটন */}
                    <div className="flex justify-end space-x-4">
                        <button
                          onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                        onClick={onConfirm}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;