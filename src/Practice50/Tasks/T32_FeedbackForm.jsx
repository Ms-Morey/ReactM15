import React, { useState } from 'react';

const T32_FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback:', feedback);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        className="bg-white p-6 rounded-md shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Feedback Form</h2>

        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          required
        />

        <button
        onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-md">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default T32_FeedbackForm;
