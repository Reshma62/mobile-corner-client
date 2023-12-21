import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../../components/Shared/Input";
import Button from "../../components/Shared/Button";
import useAxiosSecure from "../../Hooks/Axios/useAxiosSecure";

const Login = () => {
  const axios = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const userData = {
      email: data.email,
      name: data.name,
      password: data.password,
    };
    console.log("userData", userData);
    const res = await axios.post("/user/createUser", userData);
    console.log("res", res);
  };
  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
      <div className=" border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-[500px]">
        <h1 className="font-bold text-center block text-2xl">Log In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            id="email"
            name="email"
            label="Email Address"
            placeholder="me@example.com"
            autofocus={true}
            register={register}
          />
          <Input
            type="password"
            id="password"
            name="password"
            label="Password"
            placeholder="••••••••••"
            register={register}
          />
          <Button value="Submit" />
        </form>
        <div className="text-center mt-5">
          <p>
            Dont have an account?{" "}
            <Link to={"/register"} className="font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
