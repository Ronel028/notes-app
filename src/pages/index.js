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
  try {
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
  } catch (error) {
    alert("Something's wrong with the server. Please try again later!");
  }
};

export default function Home(props) {
  const router = useRouter();

  const [notesData, setNotesData] = useState([]);

  // fetching notes data
  const getNotes = async () => {
    try {
      const notes = await axios.get("http://localhost:8080/api/notes-list", {
        withCredentials: true,
      });
      setNotesData(notes.data.notes[0].Notes);
    } catch (error) {}
  };

  // use effect hooks to run function the fetch data to database
  useEffect(() => {
    getNotes();
  }, []);

  // delete notes
  const deleteNotes = (id) => {
    console.log(id);
  };

  return (
    <>
      <Head>
        <title>Notes Keep</title>
      </Head>
      {/* main */}
      <MainLayout>
        {notesData.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto max-w-[1200px]">
            {notesData.map((note) => {
              return (
                <NotesCard
                  key={note.id}
                  id={note.id}
                  notes_title={note.notes_title}
                  notes_description={note.notes_description}
                  deleteNotes={deleteNotes}
                />
              );
            })}
          </div>
        ) : (
          <EmptyState />
        )}
      </MainLayout>
    </>
  );
}
