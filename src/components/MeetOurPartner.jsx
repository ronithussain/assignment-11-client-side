import { motion } from "framer-motion";

const partners = [
    {
      id: 1,
      name: "Tech Innovators",
      logo: "https://i.ibb.co.com/HpLZ4xfS/8540089.jpg",
      about: "Leading software solutions provider.",
      website: "https://techinnovators.com",
      testimonial: "Empowering businesses with cutting-edge technology."
    },
    {
      id: 2,
      name: "Green Solutions",
      logo: "https://i.ibb.co.com/Txdcd4Px/businesspeople-office-meeting.jpg",
      about: "Sustainable and eco-friendly business solutions.",
      website: "https://greensolutions.com",
      testimonial: "Committed to a greener and better future."
    },
    {
      id: 3,
      name: "EduGrowth",
      logo: "https://i.ibb.co.com/rBLWSLk/front-view-business-male-with-laptop.jpg",
      about: "Revolutionizing education with digital tools.",
      website: "https://edugrowth.com",
      testimonial: "Bringing learning closer to everyone."
    },
    {
      id: 4,
      name: "HealthFirst",
      logo: "https://i.ibb.co.com/3mJwRXJC/portrait-smiley-business-man.jpg",
      about: "Innovating healthcare for a better tomorrow.",
      website: "https://healthfirst.com",
      testimonial: "Your health, our priority."
    },
    {
      id: 5,
      name: "AutoTech",
      logo: "https://i.ibb.co.com/dJm8WrQX/woman-man-wearing-white-clothes.jpg",
      about: "Pioneering the future of transportation.",
      website: "https://autotech.com",
      testimonial: "Driving innovation, one step at a time."
    },
    {
      id: 6,
      name: "FinServe",
      logo: "https://i.ibb.co.com/K5Hscd3/j.jpg",
      about: "Simplifying financial solutions for all.",
      website: "https://finserve.com",
      testimonial: "Your trusted financial partner."
    }
  ];

const MeetOurPartner = () => {
    return (
        <section className="py-12 bg-[#1A1B1E] text-white">
      <div className="w-11/12 mx-auto text-center">
      <h2 className='lg:text-5xl text-2xl  md:text-3xl font-bold bg-gradient-to-r from-white via-white/70 to-[#1E3E62] text-transparent bg-clip-text text-center mb-6'>Meet Our Partners"</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-1">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="bg-white/10 text-white/90 rounded-2xl shadow-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="mx-auto mb-4 w-24 h-24 object-cover rounded-full bg-blue-500 p-1"
              />
              <h3 className="text-2xl font-semibold">{partner.name}</h3>
              <p className="text-gray-200 mb-4">{partner.about}</p>
              <blockquote className="italic text-gray-300 mb-4">“{partner.testimonial}”</blockquote>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Visit Website
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default MeetOurPartner;