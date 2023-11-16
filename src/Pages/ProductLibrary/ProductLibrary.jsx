import React from "react";
import Slider from "react-slick";
import "../../Assets/Styles/ProductLibrary.css";
import LibraryListComp from "../../Components/LibraryListComp/LibraryListComp";
import ProductLibrarySlider from "../../Components/ProductLibrarySlider/ProductLibrarySlider";
import herbs from "../../assets/Images/herbs.png";
import minerals from "../../assets/Images/minerals.png";
import mineralExplore from "../../assets/Images/mineralsExplore.png";
import probiotics from "../../assets/Images/probiotics.png";
import specialty from "../../assets/Images/specialty.png";
import vitamins from "../../assets/Images/vitamins.png";
// import minerals from '../../Assets/Images/minerals.png'

const ProductLibrary = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div>
      <div className="row mt-5 mb-3">
        <div
          className="col-md-6 productFirstCardPage p-3"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="row">
            <div className="col-md-6">
              <span style={{ fontSize: "35px" }}>
                Product <br /> Library
              </span>
              <i
                className="fa-solid fa-circle-arrow-right mx-3"
                style={{ fontSize: "30px" }}
              ></i>
            </div>
            <div
              className="col-md-6 d-flex flex-column justify-content-center"
              style={{ fontSize: "18px" }}
            >
              Build your own <br />
              <span className="fw-bold">personalized monthly pack!</span>
            </div>
          </div>
          <div className="my-5"></div>
          <p>/Library</p>
          <hr />
          <LibraryListComp
            name="Minerals"
            imgSrc={minerals}
            titleValidate="minerals"
          />
          <hr />
          <LibraryListComp
            name="Vitamins"
            imgSrc={vitamins}
            titleValidate="vitamins"
          />
          <hr />
          <LibraryListComp
            name="Probiotics"
            imgSrc={probiotics}
            titleValidate="probiotics"
          />
          <hr />
          <LibraryListComp name="Herbs" imgSrc={herbs} titleValidate="herbs" />
          <hr />
          <LibraryListComp
            name="Specialty"
            imgSrc={specialty}
            titleValidate="specialty"
          />
          <hr />
        </div>
        <div className="col-md-6 colorProductShow p-4">
          <div className="d-flex justify-content-between">
            <div>
              <h3 className="mineralsHead">
                Minerals <img src={mineralExplore} className="mb-2" alt="" />
              </h3>
              <h1 className="productLibHead">
                Product <br /> Library
              </h1>
            </div>
            <div>
              <p
                className="exploreBtnLibrary mt-3"
                style={{ backgroundColor: "#ffffff" }}
              >
                <i className="fa-solid fa-right-long fw-bold"></i> Explore
                Library
              </p>
            </div>
          </div>

          <div className="my-2 responsiveLib">
            <Slider {...settings2}>
              <div className="d-flex">
                <p className="fw-bold paraHead mx-2">Minerals</p>
                <img src={minerals} alt="" />
              </div>
              <div>
                <div className="d-flex">
                  <p className="fw-bold paraHead mx-2">Vitamins</p>
                  <img src={vitamins} alt="" />
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <p className="fw-bold paraHead mx-2">Probiotics</p>
                  <img src={probiotics} alt="" />
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <p className="fw-bold paraHead mx-2">Herbs</p>
                  <img src={herbs} alt="" />
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <p className="fw-bold paraHead mx-2">Specialty</p>
                  <img src={specialty} alt="" />
                </div>
              </div>
            </Slider>
          </div>

          <div>
            <div className="sliderSettings">
              <Slider {...settings}>
                <div>
                  <ProductLibrarySlider />
                </div>
                <div>
                  <ProductLibrarySlider />
                </div>
                <div>
                  <ProductLibrarySlider />
                </div>
                <div>
                  <ProductLibrarySlider />
                </div>
                <div>
                  <ProductLibrarySlider />
                </div>
                <div>
                  <ProductLibrarySlider />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="unlock mb-3">
        <div className="d-flex justify-content-between">
          <p className="">
            Buy Your Own <span className="fw-bold">Monthly Pack</span>
          </p>
          <i className="fa-solid fa-right-long rightIconCol"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductLibrary;
