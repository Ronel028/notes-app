import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });

const MarkdownEditor = () => {
  return (
    <ReactQuill
      theme="snow"
      className="text-blue-gray-700 border-blue-gray-200 min-h-[200px]"
      placeholder="Content"
      style={{ height: "200px" }}
    />
  );
};

export default MarkdownEditor;
