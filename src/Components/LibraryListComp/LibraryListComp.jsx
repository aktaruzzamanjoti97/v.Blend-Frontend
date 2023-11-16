import React from "react";
import "../../Assets/Styles/LibraryListComp.css";
import plus from "../../assets/Images/plus.png";

const LibraryListComp = ({ name, imgSrc, titleValidate }) => {
  return (
    <div className={`${titleValidate}`}>
      <input type="checkbox" id={`accordion-${titleValidate}`} />
      <label
        className={`${titleValidate}__handler`}
        htmlFor={`accordion-${titleValidate}`}
      >
        <span className={`${titleValidate}__title`}>
          {name} <img src={imgSrc} alt="" />
        </span>
        <span className={`${titleValidate}__icon`}>
          <img src={plus} style={{ width: "35px" }} alt="" />
        </span>
      </label>
      <div className={`${titleValidate}__body`}>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <p>
              Minerals are chemical elements required as an essential
              nutriment...
            </p>
            <p className="exploreBtn mt-3">
              {" "}
              <i className="fa-solid fa-right-long"></i> Explore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryListComp;
