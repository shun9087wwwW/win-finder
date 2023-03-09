import React from "react";
import fourOneFourOneImg from "../images/4141.png";

const Four = () => {
  return (
    <div className="container-fluid w-100 p-0 bg-light">
      {/* 4バック型タイトル */}
      <h3 className="4backsTitle p-0 m-0">4バック型</h3>
      {/* 4バック型一覧 */}
      <div className="container-fluid w-100 p-0">
        <div
          className="formation-introduction container-fluid border p-0 d-flex justify-content-between"
          style={{ maxHeight: "250px" }}
        >
          <div className="container-fluid d-flex justify-content-center align-items-center border">
            <small>4141(疑似451)</small>
          </div>
          <img
            src={fourOneFourOneImg}
            alt="451"
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
            <span className="fw-bold text-danger">エヴァ―トンB</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Four;
