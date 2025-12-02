import Contact from "../../assets/Contact.webp";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-20 min-h-screen flex items-center justify-center bg-white px-2"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-2/4">
          <img
            src={Contact}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
            Contact us
          </h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-5 border rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-5 border rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-5 border rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


