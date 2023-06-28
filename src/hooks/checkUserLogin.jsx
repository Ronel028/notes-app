import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const checkUserLogin = (url) => {
  const [data, setData] = useState({
    login: false,
    user: "",
  });
  const router = useRouter();

  useEffect(() => {
    const user = async () => {
      const userInfo = await axios.get(url, {
        withCredentials: true,
      });
      if (userInfo.data.login) {
        setData({
          ...data,
          login: userInfo.data.login,
          user: userInfo.data,
        });
        router.push("/");
      } else {
        router.push("/signin");
      }
    };
    user();
  }, []);

  return [data, setData];
};

export default checkUserLogin;
