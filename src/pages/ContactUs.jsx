import { motion } from "framer-motion";

const ContactUs = () => {
 

  return (
    <motion.div 
      className="container mx-auto p-8 lg:mt-[105px] mt-[105px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1 
        className="lg:text-4xl md:text-3xl text-xl font-bold text-center mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Contact Us
      </motion.h1>
      
      <motion.form 
        className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-4">
          <label className="block text-lg font-semibold" htmlFor="name">Your Name</label>
          <motion.input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            required
            whileFocus={{ scale: 1.05, borderColor: "#3b82f6" }}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-lg font-semibold" htmlFor="email">Your Email</label>
          <motion.input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            required
            whileFocus={{ scale: 1.05, borderColor: "#3b82f6" }}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-lg font-semibold" htmlFor="message">Your Message</label>
          <motion.textarea
            id="message"
            name="message"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            rows="4"
            required
            whileFocus={{ scale: 1.05, borderColor: "#3b82f6" }}
          />
        </div>
        
        <motion.button 
          type="submit" 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default ContactUs;
