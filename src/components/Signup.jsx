import React from "react";
import logo from "../../public/static/assets/mentorheal-logo.png";
import { Link } from "react-router-dom";
import microsoftlogo from "../../public/static/assets/microsoft-logo.png";
import googleLogo from "../../public/static/assets/googleLogo.png";
import gradient from "../../public/static/assets/background.jpg";

const Signup = () => {
  return (
    <div className="md:w-screen md:h-screen md:bg-gray-100 md:flex md:justify-center md:items-center w-screen h-screen bg-gray-100 flex justify-center items-center">
      <img
        className="md:absolute md:w-screen md:h-screen md:opacity-80 absolute w-screen h-screen opacity-80"
        src={gradient}
        alt="#"
      />
      {/* Signup form */}
      <div className="md:w-[700px] w-screen h-screen md:h-[531px] pt-5 absolute md:absolute md:rounded-3xl md:shadow-2xl md:bg-white bg-white md:flex flex md:flex-col flex-col md:items-center items-center md:px-8 md:pt-8">
        <Link to="/">
          <img className="md:w-80 md:h-12 w-80 h-12" src={logo} alt="" />
        </Link>

        <div className="md:flex md:gap-8 md:my-10 md:h-80 h-80 flex flex-col-reverse md:flex-row md:static absolute top-[450px]">
          {/* left section */}
          <div className="md:w-[300px] md:h-96 md:p-4 md:flex md:flex-col md:gap-5 w-auto h-auto p-4 flex flex-col gap-5">
            <p className="md:text-gray-500 md:w-[301px] md:h-9 md:text-sm text-gray-500 w-auto h-auto text-sm text-center">
              By continuing you indicate that you agree to Mentorheal's Terms of
              Service and Privacy Policy.
            </p>
            <div className="md:flex md:flex-col md:gap-5 md:my-10 flex flex-col gap-5 my-10">
              <div className="md:w-72 w-auto h-auto md:h-12 p-2 md:rounded-sm flex md:flex justify-start md:justify-start gap-3 md:gap-2 items-center md:items-center border md:border border-gray-300 md:border-gray-300 md:px-3 px-4 hover:cursor-pointer md:hover:cursor-pointer hover:bg-slate-100 md:hover:bg-slate-100">
                <img
                  className="md:w-10 w-6 md:h-10 h-6"
                  src={microsoftlogo}
                  alt=""
                />
                Continue with Microsoft
              </div>
              <div className="md:w-72 w-auto md:h-12 h-auto p-2 md:rounded-sm flex md:flex justify-start md:justify-start gap-3 md:gap-3 px-4 md:px-4 items-center md:items-center border md:border border-gray-300 md:border-gray-300 hover:cursor-pointer md:hover:cursor-pointer hover:bg-slate-100 md:hover:bg-slate-100">
                <img
                  className="md:w-8 w-6 md:h-8 h-6"
                  src={googleLogo}
                  alt=""
                />
                Continue with Google
              </div>
            </div>
          </div>
          {/* left section */}

          <div className="md:bg-slate-200 md:w-px"></div>

          {/* right section */}
          <div className="md:w-[300px] w-auto md:-ml-2 mx-5 md:-mt-4">
            <p className="md:text-lg text-lg md:font-semibold font-semibold">
              SignUp
            </p>
            <div className="md:bg-slate-200 bg-slate-200 md:h-px h-px md:my-2 my-2"></div>

            {/* Fullname, Email & Password field */}
            <div className="md:w-[300px] w-auto md:mt-2">
              <form action="">
                <div className="md:flex flex md:flex-col flex-col md:my-0 my-5 md:gap-2 gap-2">
                  <label
                    className="md:text-sm text-sm md:font-bold font-bold"
                    htmlFor="fullname"
                  >
                    Fullname
                  </label>
                  <input
                    className="md:border border md:border-gray-300 border-gray-300 md:focus:outline-none focus:outline-none md:focus:border-blue-500 focus:border-blue-500 md:rounded-sm md:p-2 p-3 md:hover:border-blue-500 hover:border-blue-500"
                    type="text"
                    placeholder="Your fullname"
                    required
                  />
                </div>

                <div className="md:flex flex md:flex-col flex-col md:my-5 my-5 md:gap-2 gap-2">
                  <label
                    className="md:text-sm text-sm md:font-bold font-bold"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="md:border border border-gray-300 md:border-gray-300 focus:outline-none md:focus:outline-none md:rounded-sm focus:border-blue-500 md:focus:border-blue-500 md:p-2 p-3 md:hover:border-blue-500 hover:border-blue-500"
                    type="text"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div className="md:flex flex md:flex-col flex-col md:my-5 my-5 md:gap-2 gap-2">
                  <label
                    className="md:text-sm text-sm md:font-bold font-bold"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="md:border border border-gray-300 md:border-gray-300 focus:outline-none md:focus:outline-none md:rounded-sm focus:border-blue-500 md:focus:border-blue-500 md:p-2 p-3 md:hover:border-blue-500 hover:border-blue-500"
                    type="text"
                    placeholder="Your password"
                    required
                  />
                </div>
              </form>
            </div>

            <div className="md:flex flex md:justify-between justify-between md:items-center items-center md:my-7 my-7">
              <button className="md:px-5 px-5 md:py-2 py-2 md:rounded-full rounded-full md:bg-blue-400 bg-blue-400 md:text-white text-white md:font-bold font-bold md:hover:bg-blue-600 hover:bg-blue-600 md:hover:drop-shadow-xl hover:drop-shadow-xl">
                SignUp
              </button>
            </div>
          </div>
        </div>

        <div className="md:bg-gray-50 bg-gray-50 md:w-[700px] w-screen h-auto md:h-20 md:rounded-br-3xl md:rounded-bl-3xl flex md:flex justify-center md:justify-center p-2 items-center md:items-center md:gap-3 gap-3 absolute bottom-1 md:static md:bottom-0">
          <Link to="/about">
            <span className="md:text-gray-500 text-gray-500 md:hover:underline hover:underline md:text-sm text-sm">
              About
            </span>
          </Link>
          <span className="md:hover:cursor-pointer hover:cursor-pointer">
            •
          </span>
          <Link to="/services">
            <span className="md:text-gray-500 text-gray-500 md:hover:underline hover:underline md:text-sm text-sm">
              Services
            </span>
          </Link>
          <span className="md:hover:cursor-pointer hover:cursor-pointer">
            •
          </span>
          <Link to="#">
            <span className="md:text-gray-500 text-gray-500 md:hover:underline hover:underline md:text-sm text-sm">
              Privacy
            </span>
          </Link>
          <span className="md:hover:cursor-pointer hover:cursor-pointer">
            •
          </span>
          <Link to="#">
            <span className="md:text-gray-500 text-gray-500 md:hover:underline hover:underline md:text-sm text-sm">
              &copy;Mentorheal 2024
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
