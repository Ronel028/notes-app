import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import AlertMsg from "@/components/alert";

const Signup = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [displayRes, setDisplayRes] = useState(false);
  const [open, setOpen] = useState({
    open: false,
    msg: "",
    textColor: "",
    borderColor: "",
    bgColor: "",
    icon: null,
  });
  const router = useRouter();

  // function for add value in alert
  const alertValue = (isOpen, msg, textColor, borderColor, bgColor, icon) => {
    setOpen({
      ...open,
      open: isOpen,
      msg: msg,
      textColor: textColor,
      borderColor: borderColor,
      bgColor: bgColor,
      icon: icon,
    });
  };

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
      alertValue(
        true,
        save.data.msg,
        "#2ec946",
        "#2ec946",
        "#2ec946",
        <CheckCircleIcon className="mt-px h-6 w-6" />
      );
      setUserInput({
        ...userInput,
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setDisplayRes(false);
      alertValue(
        true,
        error.response.data.msg,
        "#ef4444",
        "#dc2626",
        "#f87171",
        <ExclamationTriangleIcon className="mt-px h-6 w-6" />
      );
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
        <AlertMsg open={open} setOpen={setOpen} />
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
