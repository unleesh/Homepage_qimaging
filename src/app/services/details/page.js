import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBannerTitle from "../../../components/Common/PageBannerTitle";
import SingleServiceContent from "../../../components/Services/SingleServiceContent";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Security & Surveillance"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Details"
        imgClass="/images/page-title-bg1.jpg"
      />

      <SingleServiceContent />

      <Footer />
    </>
  );
}
