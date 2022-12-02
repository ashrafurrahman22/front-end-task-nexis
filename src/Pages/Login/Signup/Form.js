import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import { Link } from "react-router-dom";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: ""
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div style={{
      width: "450px",
    }}
    className="shadow-2xl rounded-lg py-28 px-8">
      <h2 className="text-xl text-center pb-6">SignUp Form</h2>
      <div className="form-container">
        <div className="header">
          {/* <h1>{FormTitles[page]}</h1> */}
        </div>
        <div className="card card-body">{PageDisplay()}</div>
        <div className="flex justify-center gap-10">
          <button
          className="bg-blue-600 rounded-xl py-4 px-8 text-white btn my-3 normal-case font-medium"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
          className="bg-blue-600 rounded-xl px-8 my-3 py-4 text-white normal-case font-medium btn"
            onClick={() => {
                if (page === FormTitles.length - 1) {
                    // alert("FORM SUBMITTED");
                    console.log(formData);
                } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
      <div>
      <p className="text-center mt-5">
                <small>
                Already have an account ? {" "}
                  <Link className="text-primary" to="/login">
                    Login
                  </Link>
                </small>
              </p>
      </div>
    </div>
  );
}

export default Form;
