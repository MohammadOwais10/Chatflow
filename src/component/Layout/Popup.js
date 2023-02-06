import React from "react";
import "./Popup.css";
import { SidePopup } from "../Collection/Collection";

const Popup = () => {
  return (
    <>
      <div className="popup-section">
        {SidePopup.map((list, idx) => {
          return <div className="popup-icon">{list.icon}</div>;
        })}
      </div>
    </>
  );
};

export default Popup;
