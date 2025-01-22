import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBannerTitle from "../../../components/Common/PageBannerTitle";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Here are the 5 most telling signs of micromanagement"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        imgClass="/images/page-title-bg2.jpg"
      />

      <BlogDetailsContent />

      <Footer />
    </>
  );
}
