"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogPost = () => {
  return (
    <>
      <div className="blog-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Recent Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/1.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <a href="#">Admin</a>
                      </li>
                      <li>August 15, 2020</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/details">
                      Making Peace With The Feast Or Famine Of Freelancing
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/blog/details" className="learn-more-btn">
                    Read Story <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/2.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <a href="#">Admin</a>
                      </li>
                      <li>August 18, 2020</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/details">
                      I Used The Web For A Day On A 50 MB Budget
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/blog/details" className="learn-more-btn">
                    Read Story <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/3.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <a href="#">Admin</a>
                      </li>
                      <li>August 15, 2020</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/details">
                      Here are the 5 most telling signs of micromanagement
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/blog/details" className="learn-more-btn">
                    Read Story <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* shape images */}
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
        <div className="shape-img7">
          <Image
            src="/images/shape/3.png"
            alt="image"
            width={200}
            height={200}
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
        <div className="dot-shape4">
          <Image
            src="/images/shape/dot4.png"
            alt="image"
            width={12}
            height={11}
          />
        </div>
        <div className="dot-shape5">
          <Image
            src="/images/shape/dot5.png"
            alt="image"
            width={9}
            height={9}
          />
        </div>
        <div className="dot-shape6">
          <Image
            src="/images/shape/dot6.png"
            alt="image"
            width={11}
            height={11}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
