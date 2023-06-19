import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const Signup = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  // get user input value and save to userInput state
  const getUserInput = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  // sumbit userInput to server
  const saveUser = async (e) => {
    e.preventDefault();
    const save = await axios.post(
      "http://localhost:8000/api/insert-user",
      userInput,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(save);
  };

  return (
    <div className="w-full h-auto min-h-screen p-4 flex items-center justify-center">
      <Card shadow={true} className="p-5 w-full sm:w-96 flex justify-center">
        <Typography variant="h5" color="blue-gray">
          Creating an Account
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-xs">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 max-w-screen-lg w-full" onSubmit={saveUser}>
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Username"
              name="username"
              onChange={getUserInput}
            />
            <Input
              size="lg"
              label="Email"
              name="email"
              onChange={getUserInput}
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              name="password"
              onChange={getUserInput}
            />
          </div>
          <Button
            type="submit"
            className="mt-6 text-xs bg-indigo-500 hover:shadow-indigo-300"
            fullWidth
          >
            Create account
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal text-sm"
          >
            Already have an account?
            <Link
              href="/signin"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
