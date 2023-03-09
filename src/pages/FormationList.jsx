import React, { memo } from "react";
import Four from "./../component/Four";
import Three from "./../component/Three";
import Five from "./../component/Five";

const FormationList = memo(({ inputValueSent }) => {
  //switchを使用する関数
  const page = () => {
    switch (inputValueSent) {
      case "3":
        return (
          <div className="Lists container-fluid w-100 border border-dark p-0">
            <div className="fourBacksBox container-fluid w-100 p-0">
              <Three />
            </div>
          </div>
        );
      case "4":
        return (
          <div className="Lists container-fluid w-100 border border-dark p-0">
            <div className="fourBacksBox container-fluid w-100 p-0">
              <Four />
            </div>
          </div>
        );
      case "5":
        return (
          <div className="Lists container-fluid w-100 border border-dark p-0">
            <div className="fourBacksBox container-fluid w-100 p-0">
              <Five />
            </div>
          </div>
        );
      default:
        console.log("default");
    }
  };

  return (
    <>
      {inputValueSent ? (
        page()
      ) : (
        <div className="Lists container-fluid w-100 border border-dark p-0">
          <div className="fourBacksBox container-fluid w-100 p-0">
            <Three />
            <Four />
            <Five />
          </div>
        </div>
      )}
    </>
  );
});

export default FormationList;
