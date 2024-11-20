import { Link } from "@remix-run/react";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 p-8">
      <div>
        <div className="flex flex-col md:flex-row py-3 gap-20">
          <div className="flex flex-col basis-1/3">
            <img
              alt="Company name"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&amp;shade=500"
              className="size-12"
            />
            <p className="aej axq azb text-slate-300">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex flex-row gap-4 mt-8">
              <Link
                to="/"
                className="text-slate-500 hover:text-slate-300 text-2xl"
              >
                <FaFacebook className="text-inherit" />
              </Link>
              <Link
                to="/"
                className="text-slate-500 hover:text-slate-300 text-2xl"
              >
                <FaInstagram className="text-inherit" />
              </Link>
              <Link
                to="/"
                className="text-slate-500 hover:text-slate-300 text-2xl"
              >
                <FaYoutube className="text-inherit" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row flex-1">
            <div className="footer-row">
              <div className="footer-col">
                <h3 className="text-left text-md text-indigo-500 font-medium mb-1">
                  Solutions
                </h3>
                <ul className="footer-list">
                  <li>
                    <Link
                      to="/services/web-development"
                      className="text-slate-400 hover:text-slate-300"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/analytics"
                      className="text-slate-400 hover:text-slate-300"
                    >
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/automation"
                      className="text-slate-400 hover:text-slate-300"
                    >
                      Automation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/commerce"
                      className="text-slate-400 hover:text-slate-300"
                    >
                      Commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/mobile-apps"
                      className="text-slate-400 hover:text-slate-300"
                    >
                      Mobile Apps
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h3 className="text-left text-md text-indigo-500 font-medium mb-1">
                  Support
                </h3>
                <ul className="footer-list">
                  <li>
                    <Link
                      to="/contact"
                      className="text-slate-400 hover:text-slate-300"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-row">
              <div className="footer-col">
                <h3 className="text-left text-md text-indigo-500 font-medium mb-1">
                  Company
                </h3>
                <ul className="footer-list">
                  <li>
                    <Link
                      to="/about"
                      className="text-slate-400 hover:text-slate-300"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="text-slate-400 hover:text-slate-300"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/careers"
                      className="text-slate-400 hover:text-slate-300"
                    >
                      Jobs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h3 className="text-left text-md text-indigo-500 font-medium mb-1">
                  Legal
                </h3>
                <ul className="footer-list">
                  <li>
                    <Link
                      to="/terms-of-service"
                      className="text-slate-400 hover:text-slate-300"
                    >
                      Terms of service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy-policy"
                      className="text-slate-400 hover:text-slate-300"
                    >
                      Privacy policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-slate-600 pt-3">
          <p className="text-slate-400">
            © 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
