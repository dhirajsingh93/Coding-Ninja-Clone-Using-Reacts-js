// link
import React from "react";

import visa from "../assets/visa.webp";
import paypal from "../assets/paypal.webp";
import upi from "../assets/upi.webp";
import emi from "../assets/nocost.webp";
import footerend from "../assets/footerend.webp";
import razorpay from "../assets/razorpay.webp";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg font-semibold mb-8 mt-12">Important Links</h3>

        <div className="space-y-6 text-sm">
          {/* Job Bootcamp */}
          <div>
            <p className="font-medium text-white">Job Bootcamp for professionals:</p>
            <div className="space-x-3">
              <a
                href="#"
                className="ml-5 text-gray-300 hover:text-gray-700 underline"
              >
                Web Development Bootcamp (MERN & Springboot)
              </a>
              <span className="text-gray-500">|</span>
              <a
                href="#"
                className="ml-5 text-gray-300 hover:text-gray-700 underline"
              >
                Data Analytics Job Bootcamp
              </a>
            </div>
          </div>

          {/* IIT Certifications for Professionals */}
          <div>
            <p className="font-medium text-white">IIT Certifications for Professionals:</p>
            <div className="space-x-3 flex flex-wrap">
              <a
                href="#"
                className="ml-5 text-gray-300 hover:text-gray-700 underline"
              >
                PG Certification in Data Analytics by E&ICT Academy, IIT Guwahati
              </a>
              <span className="text-gray-500">|</span>
              <a
                href="#"
                className="ml-5 text-gray-300 hover:text-gray-700 underline"
              >
                PG Certification in Data Science by E&ICT Academy, IIT Guwahati
              </a>
              <span className="text-gray-500">|</span>
              <a
                href="#"
                className="ml-5 text-gray-300 hover:text-gray-700 underline"
              >
                Generative AI for Non-Tech Professionals by IITM Pravartak, TIH IIT Madras
              </a>
            </div>
          </div>

          {/* IIT Certifications for Students */}
          <div>
            <p className="font-medium text-white">IIT Certifications for Students:</p>
            <div className="space-x-3 flex flex-wrap">
              <a
                href="#"
                className="ml-5 text-gray-300 hover:text-gray-700 underline"
              >
                Training and Internship Certification in Data Analytics by E&ICT Academy, IIT Guwahati
              </a>
              <span className="text-gray-500">| </span>
              <a
                href="#"
                className="ml-5 text-gray-300 hover:text-gray-700 underline"
              >
                Training and Internship Certification in Advanced DSA by IITM Pravartak, TIH IIT Madras
              </a>
              <span className="text-gray-500">|</span>
              <a
                href="#"
                className="ml-5 text-gray-300 hover:text-gray-700 underline"
              >
                Training and Internship Certification in Full Stack Web Development with Generative AI + DSA by IITM Pravartak, TIH IIT Madras
              </a>
            </div>
          </div>

          {/* Our New Launches */}
          <div>
            <p className="font-medium text-white">Our New Launches:</p>
            <a
              href="#"
              className="ml-5 text-gray-300 hover:text-gray-700 underline"
            >
              Advanced Certification in GenAI & Multi Agent Systems
            </a>
          </div>

          {/* Payment Section */}
          <div>
            <p className="font-medium mb-2 text-white">We accept payments using:</p>
            <div className="flex items-center flex-wrap gap-5">
              <img src={visa} alt="Visa" className="h-8" />
              <img src={paypal} alt="Paypal" className="h-8" />
              <img src={upi} alt="UPI" className="h-8" />
              <img src={emi} alt="No Cost EMI" className="h-8" />
              <img src={footerend} alt="Footer" className="h-8 ml-90" />
              <img src={razorpay} alt="Razorpay" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
