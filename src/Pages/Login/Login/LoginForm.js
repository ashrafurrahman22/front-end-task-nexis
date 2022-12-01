import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const hanldeReview = (event) => {
    console.log(event);
    fetch("https://safe-lake-95138.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("You Successfully added your review");
        console.log(data);
        reset();
      });
  };

  return (
    <div
      style={{
        width: "450px",
      }}
      className="shadow-2xl rounded-lg py-28 px-8"
    >
      <h2 className="text-center text-xl">Log in form</h2>
      <div className="card card-body shadox-xl">
        <form className="flex flex-col" onSubmit={handleSubmit(hanldeReview)}>
          <input
            type="email"
            placeholder="Your Email"
            class="border-b-2 p-4 mb-2"
            {...register("name")}
            required
          />
          <input
            type="password"
            placeholder="Your Password"
            class="border-b-2 p-4 mb-2"
            {...register("designation")}
            required
          />
          <input style={{
            backgroundColor:"#1678CB"
          }} type="submit" value="Log in" class="btn mx-auto my-4 normal-case rounded-2xl border-none w-20" />
        </form>
      </div>
      <div>
      <p className="text-center">
                <small>
                Don't have an account ? {" "}
                  <Link className="text-primary" to="/signup">
                    SignUp
                  </Link>
                </small>
              </p>
      </div>
    </div>
  );
};

export default LoginForm;
