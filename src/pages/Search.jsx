import React, { memo } from "react";

const Search = memo(({ setInputValueSent }) => {
  //入力された値を監視
  const handleChange = (e) => {
    setInputValueSent(e.target.value);
  };

  return (
    <div className="searchBox container-fluid w-100 p-0 border border-dark">
      <div className="form-outline mb-5 mx-5 text-center">
        <label htmlFor="search-input" className="w-100">
          <div className="titleBox">
            <h5 className="mt-5 mb-5">
              efootball<span className="text-danger">特殊</span>
              フォーメーション検索
            </h5>
            <div className="ruleBox mb-5">
              <p className="text-start m-0">ーご利用にあたってー</p>
              <div className="text-start text-primary">
                <small>ベースチームが下に一覧で表示</small>
              </div>
              <div className="text-start mb-5 text-primary">
                <small>初期設定に存在しない特殊フォーメーションを紹介</small>
              </div>
            </div>
          </div>
        </label>
        <input
          type="search"
          className="form-control"
          id="search-input"
          placeholder="半角での入力をお願いします"
          onChange={(e) => handleChange(e)}
        />
        <label className="form-label" htmlFor="search-input"></label>
        <p className="text-start m-0 p-0 text-primary fw-bold d-flex flex-column">
          <small className="text-danger">-調べる方法-</small>
          <small className="text-danger">
            3バックの特殊型を調べたい : 「3」と入力
          </small>
          <small className="text-danger">
            4バックの特殊型を調べたい : 「4」と入力
          </small>
          <small className="text-danger">
            5バックの特殊型を調べたい : 「5」と入力
          </small>
        </p>
      </div>
    </div>
  );
});
export default Search;
