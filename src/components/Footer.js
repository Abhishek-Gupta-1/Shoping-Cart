// State bana na hoga
// Agar using class component then we have to make state in object
// And if using function then we have to use hooks

import React from "react";

export default function footer(props) {
  return (
    <div className="row fixed-bottom">
      <button
        className="btn btn-danger col-2"
        onClick={() => {
          props.resetData();
        }}
      >
        Reset 
      </button>
      <div className="col-8 bg-dark text-white text-center">
        {props.totalAmount}
      </div>
      <button className="btn btn-primary col-2">Pay Now</button>
    </div>
  );
}
