import React from "react";
import minerals from "../../Assets/Images/minerals.png";
import probiotics from "../../Assets/Images/probiotics.png";
import vitamins from "../../Assets/Images/vitamins.png";
import "../../Assets/Styles/CardBody.css";

const CardBody = () => {
  return (
    <div>
      <div className="row my-3">
        <div className="col-md-3 d-flex flex-column justify-content-end hideFirstCard">
          <div>
            <div className="d-flex fw-bold startQuizBorder">
              <i className="fa-solid fa-arrow-right mx-2 mt-1"></i>
              <p>Start the quiz!</p>
            </div>
            <div className="completedQuiz p-2">
              <div className="d-flex">
                <span style={{ fontSize: "50px" }}>1151</span>
                <span className="pt-3 mx-1">
                  People completed the quiz today
                </span>
              </div>
              <div className="d-flex">
                <div className="avatars">
                  <img
                    src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896"
                    className="avatarImg p-1"
                    alt=""
                  />
                  <img
                    src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896"
                    className="avatarImg p-1"
                    alt=""
                  />
                  <img
                    src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896"
                    className="avatarImg p-1"
                    alt=""
                  />
                </div>
                <i
                  className="fa-solid fa-circle-plus p-2 mt-2"
                  style={{ fontSize: "25px" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="middleCardFirstPage">
            <div className="p-3">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="aboutAt">About at</div>
                  <div>
                    <i className="fa-solid fa-link linkCard"></i>
                  </div>
                </div>
                <div>
                  <i
                    className="fa-solid fa-circle-plus p-2 "
                    style={{ fontSize: "30px" }}
                  ></i>
                </div>
              </div>
              <div>
                <p className="healthNeeds">
                  Receive daily packs personalized <br /> to your
                  <span className="fw-bold">unique health needs</span>
                </p>
              </div>
            </div>
            <div className="">
              <img
                src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/12/woman-home-kitchen-drinking-orange-juice-1296x728-header-1296x728.jpg?w=1155&h=1528"
                className="img-fluid juiceCover"
                alt=""
              />
              <div
                className="avatars"
                style={{ marginTop: "-80px", position: "absolute" }}
              >
                <i className="fa-solid fa-trophy uniqueIcon mx-1"></i>
                <i className="fa-solid fa-mug-hot  uniqueIcon mx-1"></i>
                <i className="fa-solid fa-pepper-hot  uniqueIcon mx-1"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3  d-flex flex-column justify-content-end wholeLibraryTwo">
          <div className="libraryTwo">
            <div className="d-flex justify-content-between p-2">
              <p className="libraryTwoHeader">Library 02</p>
              <i
                className="fa-solid fa-circle-plus"
                style={{ fontSize: "50px" }}
              ></i>
            </div>

            <p className="vitaminHeader d-flex justify-content-center m-2">
              Vitamins <img src={vitamins} alt="" />
            </p>
            <div className="d-flex justify-content-end">
              <p className="vitaminHeader d-flex justify-content-center m-2">
                Minerals <img src={minerals} alt="" />
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="vitaminHeader d-flex justify-content-center m-2">
                Probiotics <img src={probiotics} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="unlock">
        <div className="d-flex justify-content-between">
          <p className="">
            Unlock <span className="fw-bold">Personalized</span> Plan
          </p>
          <i className="fa-solid fa-right-long rightIconCol"></i>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
