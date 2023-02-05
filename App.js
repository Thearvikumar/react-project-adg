import React from "react";
import "./index.css";

const Container = () => (
  <div className="container">
    <h1 className="header">FILE UPLOADER ADG</h1>
    <div className="box">
      <div className="upload-box">
        <input type="file" className="input-file" id="file" />
        <label htmlFor="file" className="upload-label">
          UPLOAD FILE
        </label>
        <button className="upload-button">Choose File</button>
      </div>
    </div>
  </div>
);

export default Container;