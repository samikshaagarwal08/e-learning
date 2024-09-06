"use client";
import React,{useState} from 'react';

const Pancard = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim() === '') {
      alert('Please enter your feedback before submitting.');
      return;
    }
    setSubmittedFeedback(true);
  };

  const handleStarClick = (starValue: number) => {
    setRating(starValue);
  };
  return (
    <div className="container mx-auto p-6 md:px-20">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center mb-6">Pan-Card Update</h1>

      {/* Video Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Watch the Introduction Video</h2>
        <p className="mb-4">This short video explains the steps for updating your Pan-Card.</p>
        <div className="flex video-container w-full items-center justify-center">
          <iframe
            width="md:40%"
            height="md:400"
            src="https://www.youtube.com/embed/bRwUAOL-lNs?si=E5X9UMDj0hXShNIl" // Replace with actual video ID
            title="Pan-Card Update Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* About Course Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About This Course</h2>
        <p>
          This course provides a step-by-step guide on how to update your Pan-Card. Whether you are changing your
          address, updating your name, or correcting errors, we will walk you through the process with ease. 
          The course is designed for the general public to understand how to manage their Pan-Card details online.
        </p>
      </div>

      {/* Review Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What Our Learners Say</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="italic">"This course made the Pan-Card update process so simple! I was able to complete the update in no time."</p>
          <p className="font-semibold mt-2">- Raj, Mumbai</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
          <p className="italic">"I was always confused about the procedure, but this course clarified everything!"</p>
          <p className="font-semibold mt-2">- Priya, Delhi</p>
        </div>
      </div>

      {/* Certificate Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Certificate of Completion</h2>
        <p>
          Once you complete the course, you will receive a certificate of completion to verify that you have
          successfully learned the process of updating your Pan-Card. The certificate can be downloaded from your profile.
        </p>
        <div className="mt-4">
          <img
            src="\certificate.png" // Replace with actual certificate image URL
            alt="Certificate"
            className="w-full max-w-xs mx-auto"
          />
        </div>
      </div>
    {/* Feedback and Rating Section */}
    <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Feedback</h2>
        <form onSubmit={handleFeedbackSubmit}>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            placeholder="Write your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>

          {/* Star Rating */}
          <div className="mb-4">
            <p className="text-lg font-medium mb-2">Rate the Course:</p>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
                  onClick={() => handleStarClick(star)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#aa43f1] text-white py-2 px-6 rounded-md hover:bg-[#932bd1]"
          >
            Submit Feedback
          </button>
        </form>

        {/* Display submitted feedback */}
        {submittedFeedback && (
          <div className="mt-6 bg-green-100 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Thank you for your feedback!</h3>
            <p className="mb-2">Your Rating: {rating} stars</p>
            <p className="italic">"{feedback}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pancard;
