import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="flex flex-col">
      <input
        className="p-4 border-b-2"
        type="text"
        placeholder="Write First Name"
        value={formData.firstName}
        required
        onChange={(event) =>
          setFormData({ ...formData, firstName: event.target.value })
        }
      />
      <input
              className="p-4 border-b-2"
        type="text"
        placeholder="Write Last Name"
        value={formData.lastName}
        required
        onChange={(event) =>
          setFormData({ ...formData, lastName: event.target.value })
        }
      />
    </div>
  );
}

export default SignUpInfo;
