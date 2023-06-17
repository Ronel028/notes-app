import Head from "next/head";
import Navigation from "../components/Navigation";
import EmptyState from "@/components/EmtyState";
import NotesCard from "@/components/NotesCard";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
