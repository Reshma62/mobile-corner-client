import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../../components/Shared/Input";
import Button from "../../components/Shared/Button";
import useAxiosSecure from "../../Hooks/Axios/useAxiosSecure";

const Register = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      name: data.name,
      password: data.password,
    };
    const res = await axiosSecure.post("/user/createUser", userData);
    console.log("res", res.data);
  };
  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
      <div className=" border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-[500px]">
        <h1 className="font-bold text-center block text-2xl">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            id="name"
            name="name"
            label="Name"
            placeholder="Enter your name"
            register={register}
          />
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
            Already have an account?
            <Link to={"/login"} className="font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
