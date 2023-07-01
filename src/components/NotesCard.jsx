import Link from "next/link";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import {
  RocketLaunchIcon,
  ArrowLongRightIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import {
  TrashIcon,
  PencilSquareIcon,
  BookOpenIcon as BookOpenIconSolid,
} from "@heroicons/react/24/solid";

const NotesCard = (props) => {
  return (
    <Card className="mt-6 w-full">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <BookOpenIcon className="text-indigo-500 w-12 h-12" />
          <div className="flex items-center gap-2">
            <Tooltip
              content="Delete"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
              className=" text-[10px] bg-red-600 font-bold"
            >
              <Button
                size="sm"
                color="red"
                variant="gradient"
                className="h-auto w-auto p-[6px] flex items-center justify-center rounded-full"
                onClick={() => props.deleteNotes(props.id)}
              >
                <TrashIcon className="w-4 h-4" />
              </Button>
            </Tooltip>
            <Tooltip
              content="Update"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
              placement="right-start"
              className=" text-[10px] bg-amber-600 font-bold text-indigo-500"
            >
              <Link href="/edit-notes">
                <Button
                  size="sm"
                  color="amber"
                  variant="gradient"
                  className="h-auto w-auto p-[6px] flex items-center justify-center rounded-full"
                >
                  <BookOpenIconSolid className="w-4 h-4 text-indigo-500" />
                </Button>
              </Link>
            </Tooltip>
          </div>
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {props.notes_title}
        </Typography>
        <Typography>{props.notes_description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href="/notes-content" className="inline-block">
          <Button
            size="sm"
            variant="text"
            className="flex items-center gap-2 text-indigo-500"
          >
            View content
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NotesCard;
