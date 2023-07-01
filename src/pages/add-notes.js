import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import Navigation from "../components/Navigation";
import MarkdownEditor from "@/components/QuillEditor";
import AlertErrorMsg from "@/components/ErrorAlert";

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

    return {
      props: {
        user: user.data,
      },
    };
  } catch (error) {
    alert("Something's wrong with the server. Please try again later!");
  }
};

export default function AddNotes() {
  // hooks
  const [notesData, setNotesData] = useState({
    notes_title: "",
    notes_description: "",
  });
  const [markdownValue, setMarkdownValue] = useState("");
  const [errorMsg, setErrorMsg] = useState({
    open: false,
    msg: "",
  });
  const router = useRouter();

  // get input value
  const getInputValue = (e) => {
    const { name, value } = e.target;
    setNotesData({
      ...notesData,
      [name]: value,
    });
  };

  // save notes to database
  const saveNotes = async (e) => {
    e.preventDefault();
    try {
      const addNotes = await axios.post(
        "http://localhost:8080/api/add-notes",
        {
          notes_title: notesData.notes_title,
          notes_description: notesData.notes_description,
          notes_content: markdownValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (addNotes.status === 200) {
        setErrorMsg({
          ...errorMsg,
          open: false,
          msg: "",
        });
        setNotesData({
          ...notesData,
          notes_title: "",
          notes_description: "",
        });
        setMarkdownValue("");
        router.push("/");
        return;
      }
    } catch (error) {
      console.log(error.response);
      setErrorMsg({
        ...errorMsg,
        open: true,
        msg: error.response.data.msg,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Notes Keep</title>
      </Head>
      <Navigation />

      {/* add notes form */}
      <div className="flex justify-center h-auto min-h-[calc(100vh-78px)]">
        <div className=" w-full sm:w-[70%] sm:max-w-3xl p-4">
          <div className=" mb-5">
            <Typography variant="h5">Add new notes</Typography>
          </div>

          {/* error messag */}
          <AlertErrorMsg errorMsg={errorMsg} />

          <form
            className="mt-4 w-full flex flex-col gap-3"
            onSubmit={saveNotes}
          >
            <div className="w-full flex flex-col gap-6">
              <Input
                label="Notes Title"
                name="notes_title"
                value={notesData.notes_title}
                onChange={getInputValue}
              />
              <Input
                label="Notes Description"
                name="notes_description"
                value={notesData.notes_description}
                onChange={getInputValue}
              />
              <MarkdownEditor
                markdownValue={markdownValue}
                setMarkdownValue={setMarkdownValue}
              />
            </div>
            <div className="flex justify-end items-center">
              <Button
                type="submit"
                className=" bg-indigo-500 hover:shadow-indigo-300"
              >
                Create notes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
