import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  PowerIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useGlobalContext } from "@/context/store";

// profile menu component
const profileMenuItems = [
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

const ProfileMenu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <MenuItem className="hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10">
          <div
            variant="text"
            className="w-auto h-auto p-0 flex items-center gap-2 rounded hover:bg-transparent"
            onClick={props.signout}
          >
            <PowerIcon className="h-4 w-4 text-red-500" />
            <Typography
              as="span"
              variant="small"
              className="font-normal"
              color="red"
            >
              Sign out
            </Typography>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default function Navigation() {
  const router = useRouter();
  const userInfo = useGlobalContext();

  const signout = async () => {
    console.log("sign out");
    try {
      const signoutUser = await axios.get("http://localhost:8080/api/signout", {
        withCredentials: true,
      });
      if (signoutUser.data.logout) {
        router.push("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar className="mx-auto p-2 border-r-0 shadow-md lg:pl-6 mb-5">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Link href="/" className="mr-4 ml-2 cursor-pointer py-1.5 font-medium">
          KeepNotes
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/add-notes" className="text-blue-gray-900">
            <PlusCircleIcon className="h-6 w-6" />
          </Link>
          <Typography>{`${userInfo.user}`}</Typography>
          <ProfileMenu signout={signout} />
        </div>
      </div>
    </Navbar>
  );
}
