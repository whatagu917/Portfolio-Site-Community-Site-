import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <div className="container">
      <b>{props.title}</b>
      <hr />
      <div>
        <label>コメント：</label>
        <input type="text" />
      </div>
      <button type="submit">送信</button>
    </div>
  );
};

export default Form;