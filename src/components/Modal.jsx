import React from "react";

const Modal = ({ open, setOpen }) => {
 
  if (!open) return null;


  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleCloseModal}>
      <div className="bg-white p-4 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-lg font-bold mb-4">Modal Title</h2>
        <p className="mb-4">This is a modal content.</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;