import Link from "next/link";
import React from "react";

const SignInForm = () => {
  return (
    <div className="bg-white p-6 lg:p-10 rounded-[10px] lg:w-6/12 mx-auto">
      <h2 className="text-center text-3xl font-semibold text-Tcolor capitalize mb-10">
      HI, THERE
      </h2>
      <form action="#">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <input
              className="w-full h-[56px] border border-Bcolor/20 rounded-md px-5 py-4 font-Jost text-sm text-Bcolor focus:ring-0 focus:ring-transparent focus:outline-none focus:border-Pcolor"
              type="text"
              name="yourName"
              id="yourName"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              className="w-full h-[56px] border border-Bcolor/20 rounded-md px-5 py-4 font-Jost text-sm text-Bcolor focus:ring-0 focus:ring-transparent focus:outline-none focus:border-Pcolor"
              type="email"
              name="yourEmail"
              id="yourEmail"
              placeholder="Enter Your Email ID"
            />
          </div>
          <div>
            <p className="font-OpenSans text-sm font-medium text-Bcolor">
              I forgot my password?
              <Link
                href="/forgotpassword"
                className="text-Pcolor capitalize transition-all hover:text-Hcolor underline ml-1"
              >
                Reset Password
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-10 mb-5">
          <button
            type="submit"
            className="inline-flex h-11 min-w-[162px] bg-Pcolor text-white rounded-[30px] text-base font-medium capitalize justify-center items-center text-center transition-all hover:text-white hover:bg-Hcolor"
          >
            Login
          </button>
        </div>
      </form>
      <p className="font-OpenSans text-sm font-medium text-Bcolor">
        I don’t have an account?
        <Link
          href="/signup"
          className="text-Pcolor capitalize transition-all hover:text-Hcolor underline ml-1"
        >
          Register here
        </Link>
      </p>
    </div>
  );
};

export default SignInForm;
