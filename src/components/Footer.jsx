import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-center py-6 bg-gray-800 space-y-2">

            {/* Phone */}
            <p className="text-gray-400 flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-gray-300" />
                +91 8861498424
            </p>

            {/* Mail */}
            <a href="mailto:gowdarajesh15@gmail.com">
                <p className="cursor-pointer text-gray-400 hover:text-white flex items-center justify-center gap-2">
                    <FaEnvelope className="text-gray-300" />
                    gowdarajesh15@gmail.com
                </p>
            </a>
        </footer>
    );
};

export default Footer;
