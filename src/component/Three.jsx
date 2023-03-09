import React from "react";
import threeFourThreeImg from "../images/343.png";

const Three = () => {
  return (
    <div className="container-fluid w-100 p-0 bg-light">
      {/* 3バック型タイトル */}
      <h3 className="3backsTitle p-0 m-0">3バック型</h3>
      {/* 3バック型一覧 */}
      <div className="container-fluid w-100 p-0">
        <div
          className="formation-introduction container-fluid border p-0 d-flex justify-content-between"
          style={{ maxHeight: "250px" }}
        >
          <div className="container-fluid d-flex justify-content-center align-items-center border">
            <small>343(疑似3TOP 1TOP+ウイングが絞って2ST)</small>
          </div>
          <img
            src={threeFourThreeImg}
            alt="343"
            className="img-fluid w-25 h-25"
            style={{ maxHeight: "250px", maxWidth: "150px" }}
          />
        </div>
        {/* ベースチーム代表 */}
        <div
          className="baseTeamBox container-fluid border border-dark p-2 text-center"
          style={{ maxHeight: "250px", backgroundColor: "#fffafa" }}
        >
          <small
            className="container-fluid p-0 m-0"
            style={{ maxHeight: "250px" }}
          >
            <span className="fw-bold">ベースチーム：</span>
            ヨーロッパ＞イングランドリーグ＞
            <span className="fw-bold text-danger">トッテナムWB</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Three;
