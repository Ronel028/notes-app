import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import AlertErrorMsg from "@/components/ErrorAlert";
import AlertSuccessMsg from "@/components/SuccessAlert";

const Signup = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [displayRes, setDisplayRes] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    open: false,
    msg: "",
  });
  const [successMsg, setSuccessMsg] = useState({
    open: false,
    msg: "",
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
    try {
      setDisplayRes(true);
      const save = await axios.post(
        "http://localhost:8080/api/insert-user",
        userInput,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setDisplayRes(false);
      setSuccessMsg({
        ...successMsg,
        open: true,
        msg: save.data.msg,
      });
      setErrorMsg({
        ...errorMsg,
        open: false,
        msg: "",
      });
      setUserInput({
        ...userInput,
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setDisplayRes(false);
      setErrorMsg({
        ...errorMsg,
        open: true,
        msg: error.response.data.msg,
      });
      setSuccessMsg({
        ...successMsg,
        open: false,
        msg: "",
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
          Creating an Account
        </Typography>
        <Typography color="gray" className="mt-1 mb-8 font-normal text-xs">
          Enter your details to register.
        </Typography>

        {/* alert */}
        <AlertErrorMsg errorMsg={errorMsg} setErrorMsg={setErrorMsg} />
        <AlertSuccessMsg
          successMsg={successMsg}
          setSuccessMsg={setSuccessMsg}
        />
        {/* alert */}

        <form className="mt-4 mb-2 max-w-screen-lg w-full" onSubmit={saveUser}>
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Username"
              name="username"
              value={userInput.username}
              onChange={getUserInput}
            />
            <Input
              size="lg"
              label="Email"
              name="email"
              value={userInput.email}
              onChange={getUserInput}
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              name="password"
              value={userInput.password}
              onChange={getUserInput}
            />
          </div>
          <Button
            type="submit"
            className="mt-6 text-xs bg-indigo-500 hover:shadow-indigo-300 flex items-center justify-center gap-3"
            fullWidth
            disabled={displayRes}
          >
            Create account
            {displayRes ? <Spinner className="h-4 w-4" /> : ""}
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
