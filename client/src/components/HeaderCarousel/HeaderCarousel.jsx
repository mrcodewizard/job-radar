import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideOne from "../../assets/img/carousel-1.jpg";
import SlideTwo from "../../assets/img/carousel-2.jpg";

function HeaderCarousel() {
  return (
    <div className="hero-carousel container-fluid p-0">
      <Carousel className="header-carousel owl-carousel">
        <Carousel.Item className='owl-carousel-item position-relative'>
          <img
            className="d-block w-100 img-fluid"
            src={SlideOne}
            alt="First slide"
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: 'rgba(43, 57, 64, .5)' }}
          >
            <div className="container mx-4">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-3 text-white animated slideInDown mb-4">
                    Find The Perfect Job That You Deserved
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                  </p>
                  <a href="" className="btn btn-primary btn-cprimary py-md-3 px-md-5 me-3 animated slideInLeft">
                    Search A Job
                  </a>
                  <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">
                    Find A Talent
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item className='owl-carousel-item position-relative'>
          <img
            className="d-block w-100 img-fluid"
            src={SlideTwo}
            alt="Second slide"
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: 'rgba(43, 57, 64, .5)' }}
          >
            <div className="container mx-4">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-3 text-white animated slideInDown mb-4">
                    Find The Best Startup Job That Fit You
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                  </p>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                    Search A Job
                  </a>
                  <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">
                    Find A Talent
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeaderCarousel;
