import { useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import EmptyState from "@/components/EmtyState";
import NotesCard from "@/components/NotesCard";
import MainLayout from "@/layout/MainLayout";
import checkUserLogin from "@/hooks/checkUserLogin";

export default function Home(props) {
  const router = useRouter();

  const [data, setData] = checkUserLogin(
    "http://localhost:8080/api/verify-user-login"
  );

  console.log(data);

  //check user if login
  // useEffect(() => {
  //   const checkUser = async () => {
  //     try {
  //       const checkUserLogin = await axios.get(
  //         "http://localhost:8080/api/verify-user-login",
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       if (!checkUserLogin.data.login) {
  //         router.push("/signin");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   checkUser();
  // }, []);

  return (
    <>
      <Head>
        <title>Notes Keep</title>
      </Head>
      {/* main */}
      <MainLayout>
        {/* display this if the user doesn't have note yet. */}
        {/* <EmptyState /> */}
        {/* display this if the user doesn't have note yet. */}

        {/* if have display notes */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto max-w-[1200px]">
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
        </div>
        {/* if have display notes */}
      </MainLayout>
    </>
  );
}
