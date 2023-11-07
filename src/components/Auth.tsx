import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput } from "../interfaces/registrationTypes";
import { useAuth } from "../context/AuthContext";
import { useQuery } from "react-query";
import fetchUsers from "../api/Login";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, InputSection } from "../styles/GeneralStyles";
import { HiUser } from "react-icons/Hi";
import { RiLockPasswordFill } from "react-icons/Ri";

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
      navigate("/categories");
    } else {
      console.log("Invalid password");
    }
  };

  return (
    <Card>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>UserName</label>
        <InputSection>
          <div>
            <HiUser className="InputIcon" />
          </div>
          <input
            placeholder="Username"
            {...register("userName", { required: true, maxLength: 20 })}
          />
        </InputSection>
        <label>password</label>
        <InputSection>
          <div>
            <RiLockPasswordFill className="InputIcon" />
          </div>
          <input
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </InputSection>
        <div>
          <Button type="submit">Submit</Button>
          <Button onClick={() => closeCart()}>Cancel</Button>
        </div>
      </form>
    </Card>
  );
}

const Card = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: self-start;

    justify-content: center;
  }
  label {
    color: black;
    font-size: 1.3rem;
    font-weight: 300;
  }
  div {
    display: flex;
    gap: 1rem;
  }
`;
