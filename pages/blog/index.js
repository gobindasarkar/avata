import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import React from "react";

import postThumb1 from "../../public/post-image-1.jpg";
import postThumb2 from "../../public/post-image-2.jpg";
import postThumb3 from "../../public/post-image-3.jpg";
import SectionTitle from "@/components/SectionTitle";
import CardBlog from "@/components/CardBlog";
import Pagination from "@/components/Pagination";
const CardBlogDataApi = [
  {
    id: 1,
    PostThumb: postThumb1,
    PostTitle: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    PosttDate: "May 31, 2023",
    PosttAdmin: "Admin",
    PostUrl: '/blog/single-blog',
  },
  {
    id: 2,
    PostThumb: postThumb2,
    PostTitle: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    PosttDate: "May 31, 2023",
    PosttAdmin: "Admin",
    PostUrl: '/blog/single-blog',
  },
  {
    id: 3,
    PostThumb: postThumb3,
    PostTitle: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    PosttDate: "May 31, 2023",
    PosttAdmin: "Admin",
    PostUrl: '/blog/single-blog',
  },
  {
    id: 4,
    PostThumb: postThumb1,
    PostTitle: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    PosttDate: "May 31, 2023",
    PosttAdmin: "Admin",
    PostUrl: '/blog/single-blog',
  },
  {
    id: 5,
    PostThumb: postThumb2,
    PostTitle: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    PosttDate: "May 31, 2023",
    PosttAdmin: "Admin",
    PostUrl: '/blog/single-blog',
  },
  {
    id: 6,
    PostThumb: postThumb3,
    PostTitle: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    PosttDate: "May 31, 2023",
    PosttAdmin: "Admin",
    PostUrl: '/blog/single-blog',
  },
];
const Blog = () => {
  return (
    <>
      <Breadcrumb pageTitle="blog" />
      <div className="py-[60px] md:py-[100px] lg:py-[120px] bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <SectionTitle titleText="Latest News" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CardBlogDataApi.map((curElm) => {
              return <CardBlog key={curElm.id} CardBlogData={curElm} />;
            })}
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Blog;
Blog.Layout = Layout;
