import Head from "next/head";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { Editable, useEditor } from "@wysimark/react";
import Navigation from "../components/Navigation";

export default function AddNotes() {
  const editor = useEditor({
    initialMarkdown: "",
  });

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
          <form className="w-full flex flex-col gap-3">
            <div className="w-full flex flex-col gap-3">
              <Input label="Notes Title" />
              <Editable editor={editor} />
            </div>
            <div className="flex justify-end items-center">
              <Button className=" bg-indigo-500 hover:shadow-indigo-300">
                Create notes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
