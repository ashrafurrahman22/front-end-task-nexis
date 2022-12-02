import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
              className="p-4 border-b-2 w-full"
        type="password"
        placeholder="Write Password"
        value={formData.password}
        required
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
        }}
      />
    </div>
  );
}

export default OtherInfo;
