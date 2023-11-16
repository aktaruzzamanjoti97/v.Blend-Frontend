import React from "react";
import "../../Assets/Styles/TitleBody.css";
import simplifyImg from "../../assets/Images/simplify.png";
import wellbeing from "../../assets/Images/wellbeing.png";

const TitleBody = () => {
  return (
    <div className="row">
      <div className="col-md-5">
        <h1 style={{ fontSize: "50px" }}>
          Simplify your <img src={simplifyImg} alt="" /> health and{" "}
          <img src={wellbeing} alt="" /> wellbeing
        </h1>
        <div className="my-4 d-flex personalizedHidden">
          <div>
            <h6>
              Unlock your <span className="fw-bolder">personalized</span>
            </h6>
            <h6>vitamin plan</h6>
          </div>
          <div>
            <i
              className="fa-solid fa-circle-arrow-right mx-3"
              style={{ fontSize: "60px" }}
            ></i>
          </div>
        </div>
      </div>
      <div className="col-md-7 d-flex justify-content-end browseLibrary">
        <div>
          <a href="#" className="fw-bold text-black ">
            Browse Library
          </a>
          <i
            className="fa-regular fa-circle-down mx-2 pt-2"
            style={{ fontSize: "30px" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default TitleBody;
