import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import SubscribeForm from "../../components/Home/SubscribeForm";
import PricingTable from "../../components/Home/PricingTable";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Partner"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Partner"
        imgClass="/images/page-title-bg2.jpg"
      />

      <PricingTable />

      <SubscribeForm />

      <Footer />
    </>
  );
}
