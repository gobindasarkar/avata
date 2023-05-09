import Breadcrumb from "@/components/Breadcrumb";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";
import Layout from "@/components/Layout";
import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <Breadcrumb pageTitle="Forgot Password" />
      <div className="py-[60px] md:py-[100px] lg:py-[120px] bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <ForgotPasswordForm />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
ForgotPassword.Layout = Layout;
