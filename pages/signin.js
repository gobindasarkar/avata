import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import SignInForm from "@/components/SignInForm";
import React from "react";

const SignIn = () => {
  return (
    <>
      <Breadcrumb pageTitle="Log In" />
      <div className="py-[60px] md:py-[100px] lg:py-[120px] bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <SignInForm />
        </div>
      </div>
    </>
  );
};

export default SignIn;
SignIn.Layout = Layout;
