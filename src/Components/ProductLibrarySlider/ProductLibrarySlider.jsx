import React from "react";

const ProductLibrarySlider = () => {
  return (
    <div className="row">
      <div className="col-md-10 mx-auto">
        <div className="middleCardFirstPage ">
          <div className="p-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="aboutAt px-4">Bones</div>
                <div>
                  <i className="fa-solid fa-link linkCard mx-2"></i>
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
              <p className="healthNeeds my-3">
                <span className="fw-bold">Calcium plus D3</span>
              </p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <p className="rightFor">Is that right for you?</p>
              <p className="startQuiz">
                {" "}
                <i className="fa-solid fa-right-long fw-bold"></i>
                Start the quiz!
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
    </div>
  );
};

export default ProductLibrarySlider;
