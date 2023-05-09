import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white p-6 lg:p-10 rounded-[10px] lg:w-8/12 mx-auto">
      <h2 className="text-center text-3xl font-semibold text-Tcolor capitalize mb-10">
        Get in Touch
      </h2>
      <form action="#">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <input className="w-full h-[56px] border border-Bcolor/20 rounded-md px-5 py-4 font-Jost text-sm text-Bcolor focus:ring-0 focus:ring-transparent focus:outline-none focus:border-Pcolor" type="text" name="yourName" id="yourName" placeholder="Your Name" />
          </div>
          <div>
            <input className="w-full h-[56px] border border-Bcolor/20 rounded-md px-5 py-4 font-Jost text-sm text-Bcolor focus:ring-0 focus:ring-transparent focus:outline-none focus:border-Pcolor" type="email" name="yourEmail" id="yourEmail" placeholder="Enter Your Email ID" />
          </div>
          <div className="col-span-full">
            <textarea className="w-full h-[200px] border border-Bcolor/20 rounded-md px-5 py-4 font-Jost text-sm text-Bcolor focus:ring-0 focus:ring-transparent focus:outline-none focus:border-Pcolor" name="Messages" id="Messages" cols="30" rows="10" placeholder="Type Your Messages"></textarea>
          </div>
        </div>
        <div className="text-center mt-10">
        <button type="submit" className='inline-flex h-11 min-w-[162px] bg-Pcolor text-white rounded-[30px] text-base font-medium capitalize justify-center items-center text-center transition-all hover:text-white hover:bg-Hcolor'>Send Messages</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
