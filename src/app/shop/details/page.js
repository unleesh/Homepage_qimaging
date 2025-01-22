import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBannerTitle from "../../../components/Common/PageBannerTitle";
import RelatedProducts from "../../../components/SingleProduct/RelatedProducts";
import MainContent from "../../../components/SingleProduct/MainContent";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Shop"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Shop"
        imgClass="/images/page-title-bg1.jpg"
      />

      <div className="product-details-area ptb-110">
        {/* MainContent */}
        <MainContent />

        {/* RelatedProducts */}
        <RelatedProducts />
      </div>

      <Footer />
    </>
  );
}
