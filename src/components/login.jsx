import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "./auth";

const Login = () => {
  const { user } = useContext(UserContext);
  const { register, handleSubmit } = useForm();

  const checkLogin = (data) => {
    if (user?.mail === data?.mail && user?.password === data?.password) {
      alert("login successfully");
    } else {
      alert("check your mail & password");
    }
  };
  return (
    <div>
      <form action="#" onSubmit={handleSubmit(checkLogin)}>
        <input
          type="email"
          placeholder="Enter yout Email"
          {...register("mail")}
          required
        />
        <input
          type="password"
          placeholder="Enter yout Password"
          {...register("password")}
          required
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
