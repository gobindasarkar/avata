import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import SignUpForm from "@/components/SignUpForm";
import React from "react";

const SignUp = () => {
  return (
    <>
      <Breadcrumb pageTitle="Register" />
      <div className="py-[60px] md:py-[100px] lg:py-[120px] bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUp;
SignUp.Layout = Layout;
