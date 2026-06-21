import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthHeader from '../components/auth/AuthHeader';
import axios from 'axios';
import { toast } from 'sonner';

const ScheduleCallPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Reusing your existing form submission logic
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/forms/submit`, {
        ...formData,
        message: "Request for Scheduled Call"
      });
      setSubmitted(true);
      toast.success("Request sent successfully!");
    } catch (err) {
      toast.error("Failed to send request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center py-12 px-4">
      <div className="max-w-[480px] w-full">
        <AuthHeader />
        <div className="bg-white border border-[#E6E0DA] rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="font-syne font-bold text-3xl text-[#221410] mb-2">Schedule a Call</h1>
            <p className="font-manrope font-extralight text-sm text-[#4B5563]">
              Enter your details and our experts will call you back.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-3xl">check_circle</span>
              </div>
              <p className="font-syne font-bold text-xl text-[#221410] mb-2">Request Received!</p>
              <p className="font-manrope text-[#4B5563]">Executives will shortly reach out to you, please be patient.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4755B] outline-none"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4755B] outline-none"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4755B] outline-none"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <button
                disabled={loading}
                className="w-full bg-[#D4755B] text-white font-bold py-3 rounded-lg hover:bg-[#B86851] transition-all disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Request Call'}
              </button>
            </form>
          )}
        </div>
        <div className="text-center mt-6">
          <Link to="/" className="inline-flex items-center gap-2 font-manrope font-medium text-sm text-[#64748B] hover:text-[#D4755B]">
            <span className="material-icons text-base">arrow_back</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCallPage;