import React from "react";

function DemoBtn(props) {
  return (
    <div>
      <button
        style={{ backgroundColor: props.btnColor }}
        onClick={() => {props.handle(props.btnName)}}
      >
        {props.btnName}
      </button>
    </div>
  );
}

export default DemoBtn;
