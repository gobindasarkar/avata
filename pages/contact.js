import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const Contact = () => {
  return (
    <>
      <Breadcrumb pageTitle="Contact" />
      <div className="py-[60px] md:py-[100px] lg:py-[120px] bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <SectionTitle titleText="Contact Us" />
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
Contact.Layout = Layout;
