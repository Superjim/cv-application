import React from "react";
import "./Popup.css";
import { FaTimes } from "react-icons/fa";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-container">
        <button className="btn-close" onClick={() => props.setTrigger(false)}>
          <FaTimes size={20} />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
