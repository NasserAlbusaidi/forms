import React from 'react';
import { useNavigate } from 'react-router-dom';


const SuccessPage = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/'); // Redirect to the home page
    }
  return (
    <div className="container max-w-md mx-auto mt-8 p-4 text-[#715ac5] bg-white rounded shadow-md" style={{ maxWidth: '24rem' }}>
      <h1 className="block text-sm text-center font-medium">Form Submitted Successfully!</h1>
      <p className="mt-1 p-2  text-center rounded-md w-full">Thank you for your submission.</p>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="mt-4 p-2 bg-[#715ac5] text-white rounded-md w-full"
        >
          Go Back
        </button>
        </form>
    </div>
  );
};

export default SuccessPage;