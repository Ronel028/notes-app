import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });

const MarkdownEditor = (props) => {
  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <ReactQuill
      theme="snow"
      className="text-blue-gray-700 text-sm border-blue-gray-200 "
      placeholder="Content"
      modules={modules}
      value={props.markdownValue}
      onChange={props.setMarkdownValue}
    />
  );
};

export default MarkdownEditor;
