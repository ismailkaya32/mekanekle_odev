import React from "react";
function AddUpdateInputLabel({ id, label, defaultValue, type = "text" }) {

  return (
    <div className="form-group">
      <label className="col-xs-10 col-sm-2 control-label">{label}</label>
      <div className="col-xs-12 col-sm-10">
        <input
          name={id}
          type={type}
          className={
            type === "checkbox" ? "form-check-input" : "form-control col-lg-10"
          }
          defaultValue={defaultValue}
          defaultChecked={defaultValue}
        />
      </div>
    </div>
  );
}

export default AddUpdateInputLabel;