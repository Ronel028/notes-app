import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import EmptyState from "@/components/EmtyState";
import NotesCard from "@/components/NotesCard";
import MainLayout from "@/layout/MainLayout";
import checkUserLogin from "@/hooks/checkUserLogin";

const notify = (name) => toast.success("Welcome ", name);

// server side rendering
export const getServerSideProps = async ({ req, res }) => {
  const user = await axios("http://localhost:8080/api/verify-user-login", {
    headers: req.headers,
    withCredentials: true,
  });

  if (!user.data.login) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return { props: { user: user.data, header: req.headers } };
};

export default function Home(props) {
  const router = useRouter();

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
