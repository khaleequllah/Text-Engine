import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div className="" align="center">
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show d-inline-block`}
          role="alert"
          align="center"
        >
          <strong>{props.alert.type}</strong> : {props.alert.msg}
        </div>
      </div>
    )
  );
}

export default Alert;
