import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import BlogPost from "../../components/Blog/BlogPost";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
        imgClass="/images/page-title-bg2.jpg"
      />

      <BlogPost />

      <Footer />
    </>
  );
}
