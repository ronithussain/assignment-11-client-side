import { motion } from "framer-motion";

const AboutPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      review: "This platform helped me find the best services. Highly recommended!",
      rating: "4/5",
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "User-friendly and efficient. I always check reviews before hiring!",
      rating: "3/5",
    },
    {
      id: 3,
      name: "Michael Brown",
      review: "Great system for genuine service feedback!",
      rating: "3/5",
    },
    {
      id: 4,
      name: "Jhoni Since",
      review: "Great system for genuine service feedback!",
      rating: "5/5",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section 1: Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-blue-600">Trusted Reviews</h3>
              <p className="text-gray-600 mt-2">
                Verified and authentic user reviews to help you make the right choice.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-blue-600">Secure Platform</h3>
              <p className="text-gray-600 mt-2">
                Your data is safe with end-to-end encryption and secure authentication.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-blue-600">User-Friendly</h3>
              <p className="text-gray-600 mt-2">
                A clean and modern UI designed for effortless navigation and usage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: */}
        <section >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">What Our Users Say</h2>
          <div className="flex overflow-x-auto sm:space-x-6 space-x-3 p-4">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-3 sm:p-6 rounded-lg shadow-lg w-72"
              >
                <p className="text-gray-600">"{testimonial.review}"</p>
                <h4 className="font-bold mt-4 text-gray-800">{testimonial.name}</h4>
                <p className="text-yellow-500">Rating: {testimonial.rating}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
