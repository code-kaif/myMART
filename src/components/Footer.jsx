import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">myMART</h2>
          <p className="text-gray-200 font-medium">
            We are selling most cheapest product so that anyone can buy from us
            and start our own business.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-200 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-200 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-200 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-200 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-700 hover:text-white transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-700 hover:text-white transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-700 hover:text-white transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-700 hover:text-white transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center border-t border-gray-100 pt-4 text-gray-200">
        &copy; {new Date().getFullYear()} myMART. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
