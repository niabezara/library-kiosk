import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput } from "../interfaces/registrationTypes";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const { closeCart } = useAuth();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data) {
      console.log("navigacia gavaketo aq ");
      closeCart();
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
