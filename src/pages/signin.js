import Link from "next/link";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const Signin = () => {
  return (
    <div className="w-full h-auto min-h-screen p-4 flex items-center justify-center">
      <Card shadow={true} className="p-5 w-full sm:w-96 flex justify-center">
        <Typography variant="h5" color="blue-gray">
          Sign in
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-xs">
          Enter your details to Sign in.
        </Typography>
        <form className="mt-8 mb-2 max-w-screen-lg w-full">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Username" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <Button
            className="mt-6 text-xs bg-indigo-500 hover:shadow-indigo-300"
            fullWidth
          >
            Sign in
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
