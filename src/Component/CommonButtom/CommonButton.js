import React from "react";

const CommonButton = ({ children }) => {
  return (
    <div>
      <button className="btn btn-success bg-lime-500 text-white">{children}</button>
    </div>
  );
};

export default CommonButton;
