import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div>
      <title>About</title>
      <div>
        {/* about */}
        <section className="-my-5">
          <div
            data-aos="fade-down"
            className="bg-gray-700 px-4 py-10 md:px-8 lg:px-16"
          >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Left  */}
              <div className="flex-1">
                <img
                  src="https://i.ibb.co.com/7JxFwhCv/download-5.jpg"
                  alt="MovieMaster Platform"
                  className="w-full rounded-lg shadow-2xl object-cover"
                />
              </div>

              {/* Right  */}
              <div className="flex-1">
                <h1 className="text-3xl sm:text-3xl font-bold  mb-4 text-center text-white lg:text-left">
                  About <span className="text-red-500">MovieMaster</span>
                </h1>
                <p className="py-2 text-gray-300 text-base sm:text-lg text-center lg:text-left">
                  <strong>MovieMaster Pro</strong> is a modern movie and web
                  series management platform where users can explore the latest
                  releases, trending titles, and detailed reviews with ease.
                  This app is built using React React Router ,Tailwind CSS , and
                  DaisyUI — making it fast, elegant, and mobile-friendly.
                </p>
                <p className="py-2 text-gray-400 text-base sm:text-lg text-center lg:text-left">
                  Our goal is to provide movie lovers with a smart and engaging
                  experience — helping them easily discover movies, check
                  ratings, watch trailers, and get all the details in one place.
                </p>

                <div className="mt-4 flex justify-center lg:justify-start">
                  <Link to='/' className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm">
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
