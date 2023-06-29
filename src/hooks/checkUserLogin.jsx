import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const checkUserLogin = (url) => {
  const [data, setData] = useState({
    login: false,
    user: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = async () => {
      setLoading(true);
      const userInfo = await axios.get(url, {
        withCredentials: true,
      });
      setData({
        ...data,
        login: userInfo.data.login,
        user: userInfo.data,
      });
      setLoading(false);
    };
    user();
  }, []);

  return [data, setData, loading];
};

export default checkUserLogin;
