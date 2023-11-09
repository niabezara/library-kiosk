import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput } from "../../interfaces/AuthTypes";
import { useAuth } from "../../context/AuthContext";
import { useQuery } from "react-query";
import fetchUsers from "../../api/Login";
import { Button, InputSection } from "../../styles/GeneralStyles";
import { HiUser } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Card } from "../../styles/Auth";
import { showErrorMessage } from "../../utils/InformartionMessages";

export default function Register() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const { closeCart, setSession } = useAuth();
  const { data: users } = useQuery("users", fetchUsers);

  // Login Submition
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (users) {
      if (data.userName === users.name && data.password === users.password) {
        localStorage.setItem("token", users);
        setSession(true);
        closeCart();
      } else {
        //error message for the username
        if (data.userName !== users.name) {
          showErrorMessage("Invalid username");
        }
        //error message for the password
        if (data.password !== users.password) {
          showErrorMessage("Invalid password");
        }
      }
      //error message for user not found
    } else {
      showErrorMessage("User not found");
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
            placeholder="Enter Your Username"
            {...register("userName", { required: true, maxLength: 20 })}
          />
        </InputSection>
        <label>password</label>
        <InputSection>
          <div>
            <RiLockPasswordFill className="InputIcon" />
          </div>
          <input
            placeholder="Enter Your Password"
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
