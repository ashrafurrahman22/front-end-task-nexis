import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        className="p-4 border-b-2 w-full"
        type="number"
        placeholder="+880 1xxxxxxxxx"
        value={formData.phone}
        onChange={(e) => {
          setFormData({ ...formData, phone: e.target.value });
        }}
      />
      <input
              className="p-4 border-b-2 w-full"
        type="email"
        placeholder="Write Email Address"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;
