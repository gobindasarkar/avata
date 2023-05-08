import React from "react";
import SectionTitle from "./SectionTitle";
import CardBlog from "./CardBlog";
import postThumb1 from "../public/post-image-1.jpg";
import postThumb2 from "../public/post-image-2.jpg";
import postThumb3 from "../public/post-image-3.jpg";
const CardBlogDataApi = [
    {
      id: 1,
      PostThumb: postThumb1,
      PostTitle: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
      PosttDate: "May 31, 2023",
      PosttAdmin: "Admin",
      PostUrl: "/",
    },
    {
      id: 2,
      PostThumb: postThumb2,
      PostTitle: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
      PosttDate: "May 31, 2023",
      PosttAdmin: "Admin",
      PostUrl: "/",
    },
    {
      id: 3,
      PostThumb: postThumb3,
      PostTitle: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
      PosttDate: "May 31, 2023",
      PosttAdmin: "Admin",
      PostUrl: "/",
    },
  ];
const BlogArea = () => {
  return (
    <div className="py-[60px] md:py-[100px] lg:py-[120px] bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <SectionTitle titleText="Latest News" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CardBlogDataApi.slice(0, 3).map((curElm) => {
            return <CardBlog key={curElm.id} CardBlogData={curElm} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
