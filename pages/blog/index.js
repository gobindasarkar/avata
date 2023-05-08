import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import React from "react";

const Blog = () => {
  return (
    <div>
      <Breadcrumb pageTitle="blog" />
    </div>
  );
};

export default Blog;
Blog.Layout = Layout;
