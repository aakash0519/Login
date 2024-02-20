import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "./auth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { setUser } = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const registerUser = (data) => {
    setUser(data);
    navigate("/login");
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit(registerUser)}>
        <input
          type="email"
          placeholder="Enter yout Email"
          {...register("mail")}
          required
        />
        <input
          type="text"
          placeholder="Enter yout name"
          {...register("name")}
          required
        />
        <input
          type="password"
          placeholder="Enter yout Password"
          {...register("password")}
          required
        />
        <button>Register</button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default Register;
