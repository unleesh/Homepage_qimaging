import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import MainContent from "../../components/About/MainContent";
import Services from "../../components/Home/Services";
import Webinar from "../../components/Home/Webinar";
import Partner from "../../components/Home/Partner";
import Feedback from "../../components/Home/Feedback";
import PricingTable from "../../components/Home/PricingTable";
import SubscribeForm from "../../components/Home/SubscribeForm";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        imgClass="/images/page-title-bg1.jpg"
      />

      <MainContent />

      <Services />

      <Webinar />

      <Partner />

      <Feedback />

      <PricingTable />

      <SubscribeForm />

      <Footer />
    </>
  );
}
