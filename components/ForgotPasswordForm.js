import Link from "next/link";
import React from "react";

const ForgotPasswordForm = () => {
  return (
    <div className="bg-white p-6 lg:p-10 rounded-[10px] lg:w-6/12 mx-auto">
      <p className="text-center text-base text-Tcolor mb-10">
      Enter your email address and we will send you an email with instructions to reset your password.
      </p>
      <form action="#">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <input
              className="w-full h-[56px] border border-Bcolor/20 rounded-md px-5 py-4 font-Jost text-sm text-Bcolor focus:ring-0 focus:ring-transparent focus:outline-none focus:border-Pcolor"
              type="email"
              name="yourEmail"
              id="yourEmail"
              placeholder="Enter Your Email ID"
            />
          </div>
        </div>
        <div className="mt-10 mb-5">
          <button
            type="submit"
            className="inline-flex h-11 min-w-[162px] bg-Pcolor text-white rounded-[30px] text-base font-medium capitalize justify-center items-center text-center transition-all hover:text-white hover:bg-Hcolor"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
