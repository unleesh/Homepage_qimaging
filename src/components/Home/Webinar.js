"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const Webinar = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="webinar-area">
        <div className="row m-0">
          <div className="col-lg-6 p-0">
            <div
              className="webinar-video-image"
              style={{ backgroundImage: `url(/images/woman.jpg)` }}
            >
              <Image
                src="/images/woman.jpg"
                alt="image"
                width={945}
                height={555}
              />

              <div className="video-btn" onClick={() => setToggler(!toggler)}>
                <i className="flaticon-play-button"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-6 p-0">
            <div className="webinar-content">
              <h2>Check out our latest webinar</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which do not look even
                slightly believable. If you are going to use a passage.
              </p>

              <Link href="#" className="btn btn-primary">
                Watch More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinar;
