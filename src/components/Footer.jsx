import React from "react";
import { Link } from "react-router";
//import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer sm:footer-horizontal bg-black text-white px-5 py-10 ">
          <aside className="w-[400px]">
            {/* <img className="w-[40px]" src={logo} alt="" /> */}
            <h2 className=" text-[25px] md:text-[30px]  lg:text-[37px] font-bold ">
              Movie
              <span className=" text-red-400 bg-clip-text  "> Master</span>{" "}
            </h2>
            <p className="md:text-[16px] font-normal text-[rgb(98,115,130)] mt-2 p-2 w-[300px]  md:w-[300px] lg:w-[400px]">
              Movie Master is a modern web application where users can explore
              information about various movies. It features popular, newly
              released, and top-rated films with options to filter by genre,
              view detailed information, and search easily. The app is fully
              responsive and built using React, TailwindCSS, and Express.js,
              providing a smooth and dynamic movie discovery experience.
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <Link to="/about" className="link link-hover">
              About Us
            </Link>
            <Link to="/" className="link link-hover">
              Contact Us
            </Link>
            <Link to="dashboard/profile" className="link link-hover">
              Profile
            </Link>
            <Link to="/" className="link link-hover">
              All Movies
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://www.linkedin.com/in/mahmudanasrin/"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm8 0h4.8v2.2h.07c.67-1.27 2.31-2.6 4.76-2.6 5.09 0 6.03 3.35 6.03 7.7V24h-5v-7.6c0-1.81-.03-4.14-2.52-4.14-2.53 0-2.92 1.97-2.92 4v7.74H8V8z" />
                </svg>
              </a>

              <a
                href="https://github.com/mahmudanasrin078"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.16v3.2c0 .3.21.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61567836807864"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
        <footer className="footer sm:footer-horizontal footer-center bg-black text-white p-4">
          <aside className="">
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Movie Master
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
