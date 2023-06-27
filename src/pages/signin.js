import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import AlertErrorMsg from "@/components/ErrorAlert";

const Signin = () => {
  // state
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    open: false,
    msg: "",
  });
  const [displayRes, setDisplayRes] = useState(false);
  // state

  // get user input
  const getUserInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // login user
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      setDisplayRes(true);
      const signin = await axios.post(
        "http://localhost:8080/api/signin",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(signin);
      setDisplayRes(false);
    } catch (error) {
      setDisplayRes(false);
      setErrorMsg({
        ...errorMsg,
        open: true,
        msg: error.response.data.msg,
      });
    }
  };

  return (
    <div className="w-full h-auto min-h-screen p-4 flex items-center justify-center">
      <Card
        shadow={true}
        className="p-5 w-full sm:w-[550px] flex justify-center"
      >
        <Typography variant="h5" color="blue-gray">
          Sign in
        </Typography>
        <Typography color="gray" className="mt-1 mb-8 font-normal text-xs">
          Enter your details to Sign in.
        </Typography>

        {/* errorMessage */}
        <AlertErrorMsg errorMsg={errorMsg} />
        {/* errorMessage */}

        <form className="mt-4 mb-2 max-w-screen-lg w-full" onSubmit={loginUser}>
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Username"
              name="username"
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
            className="mt-6 text-xs bg-indigo-500 hover:shadow-indigo-300 flex items-center justify-center gap-3"
            fullWidth
            disabled={displayRes}
          >
            Sign in
            {displayRes ? <Spinner className="h-4 w-4" /> : ""}
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal text-sm"
          >
            Don't have an account?
            <Link
              href="/signup"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Create account
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Signin;
