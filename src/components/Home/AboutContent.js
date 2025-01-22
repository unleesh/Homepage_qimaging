"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutContent = () => {
  return (
    <>
      <div className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="about-content">
                <h2>Engaging New Audiences through Smart Approach</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which do look
                  even slightly believable. If you are going to use a passage.
                </p>

                <Link href="/about" className="btn btn-primary">
                  Discover More
                </Link>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="about-image">
                <Image
                  src="/images/about/1.jpg"
                  alt="image"
                  width={360}
                  height={300}
                />
                <Image
                  src="/images/about/2.jpg"
                  alt="image"
                  width={360}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <Image
            src="/images/shape/1.png"
            alt="image"
            width={523}
            height={586}
          />
        </div>
        <div className="shape-img2">
          <Image src="/images/shape/2.svg" alt="image" width={20} height={20} />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/3.png"
            alt="image"
            width={200}
            height={200}
          />
        </div>
        <div className="shape-img4">
          <Image src="/images/shape/4.svg" alt="image" width={20} height={20} />
        </div>
        <div className="shape-img5">
          <Image src="/images/shape/5.svg" alt="image" width={20} height={20} />
        </div>
        <div className="shape-img6">
          <Image
            src="/images/shape/6.png"
            alt="image"
            width={182}
            height={146}
          />
        </div>
        <div className="dot-shape1">
          <Image
            src="/images/shape/dot1.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="dot-shape2">
          <Image
            src="/images/shape/dot3.png"
            alt="image"
            width={18}
            height={18}
          />
        </div>
      </div>
    </>
  );
};

export default AboutContent;
