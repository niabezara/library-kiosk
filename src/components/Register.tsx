import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput } from "../interfaces/registrationTypes";
import { useAuth } from "../context/AuthContext";
import { useMutation, useQuery } from "react-query";
import { useState } from "react";
import axios from "axios";
import fetchUsers from "../api/Login";

export default function Register() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [failed, setfailed] = useState<boolean>(false);
  const { closeCart } = useAuth();

  const { data: users } = useQuery("users", fetchUsers);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (
      users &&
      data.userName === users.name &&
      data.password === users.password
    ) {
      console.log("navigacia gavaketo aq");
      closeCart();
      console.log(data);
      // Additional logic for a successful login
    } else {
      console.log("Invalid password");
      // Additional logic for an invalid login
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>UserName</label>
        <input {...register("userName", { required: true, maxLength: 20 })} />
        <label>password</label>
        <input {...register("password", { required: true })} />
        <input type="submit" />
      </form>
    </div>
  );
}
