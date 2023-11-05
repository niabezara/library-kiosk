import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput } from "../interfaces/registrationTypes";
import { useAuth } from "../context/AuthContext";
import { useQuery } from "react-query";
import fetchUsers from "../api/Login";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const { closeCart, setSession } = useAuth();
  const navigate = useNavigate();
  const { data: users } = useQuery("users", fetchUsers);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (
      users &&
      data.userName === users.name &&
      data.password === users.password
    ) {
      localStorage.setItem("token", users);
      setSession(true);
      closeCart();
      navigate("/Nia");
    } else {
      console.log("Invalid password");
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
