import React from "react";
import FiveFourOneImg from "../images/541.png";

const Five = () => {
  return (
    <div className="container-fluid w-100 p-0 bg-light">
      {/* 5バック型タイトル */}
      <h3 className="5backsTitle p-0 m-0">5バック型</h3>
      {/* 5バック型一覧 */}
      <div className="container-fluid w-100 p-0">
        <div
          className="formation-introduction container-fluid border p-0 d-flex justify-content-between"
          style={{ maxHeight: "250px" }}
        >
          <div className="container-fluid d-flex justify-content-center align-items-center border">
            <small>541(中盤2枚CMFで両サイドハーフやや低め)</small>
          </div>
          <img
            src={FiveFourOneImg}
            alt="541"
            className="img-fluid w-25 h-25"
            style={{ maxHeight: "250px", maxWidth: "150px" }}
          />
        </div>
        {/* ベースチーム代表 */}
        <div
          className="box container-fluid border border-dark p-2 text-center"
          style={{ maxHeight: "250px", backgroundColor: "#fffafa" }}
        >
          <small
            className="container-fluid p-0 m-0"
            style={{ maxHeight: "250px" }}
          >
            <span className="fw-bold">ベースチーム：</span>
            ヨーロッパ＞イングランドリーグ＞
            <span className="fw-bold text-danger">ボーンマスRB</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Five;
