import Backgroound from "../Components/Background";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Check if URL contains success parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true);
      // Remove the success parameter from URL without page reload
      window.history.replaceState({}, '', '/contact-us');
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center flex-col py-20 md:px-20 px-4">
      <h2 className="mb-8 text-4xl tracking-tight font-bold text-center">
        Contact Us
      </h2>
      
      {/* Success Message */}
      {showSuccess && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center max-w-md">
          <p className="font-semibold">✅ Thank you!</p>
          <p className="text-sm">Your message has been sent successfully. We'll get back to you soon!</p>
        </div>
      )}
      
      {/* WhatsApp Group Section */}
      <div className="mb-8 text-center">
        <h3 className="mb-4 text-xl font-semibold">Join Our WhatsApp Group</h3>
        <a
          href="https://chat.whatsapp.com/JgF4BHzzcv3Jj3pX0aTeil"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
        >
          📱 Join WhatsApp Group
        </a>
        <p className="mt-2 text-sm text-gray-600">
          Connect with fellow participants and get real-time updates
        </p>
      </div>

      <div className="w-full max-w-md border-t border-gray-300 my-6"></div>

      <h3 className="mb-4 text-xl font-semibold text-center">
        Or Send us an Email
      </h3>
      <form
        action="https://submit-form.com/nuQvZNIfB"
        method="POST"
        className="space-y-8 md:w-1/2 w-full"
      >
        <input type="hidden" name="_redirect" value="http://localhost:3000/contact-us?success=true" />
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm border border-gray-300 bg-gray-100 text-sm text-black rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="shadow-sm border border-gray-300 bg-gray-100 text-sm text-black rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            name="message"
            className="shadow-sm border border-gray-300 bg-gray-100 text-sm text-black rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button type="submit" className="about-btn">
          Send email
        </button>
      </form>

      <Backgroound/>    
    </div>
  );
}
