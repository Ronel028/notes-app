import Link from "next/link";
import { Typography, Button } from "@material-tailwind/react";
import { BookOpenIcon, PlusIcon } from "@heroicons/react/24/outline";

const EmptyState = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-78px)]">
      <div className="flex flex-col justify-center items-center gap-1">
        <BookOpenIcon className="w-6 h-6 text-blue-gray-900" />
        <Typography className="text-blue-gray-900 font-semibold">
          No notes
        </Typography>
        <Typography variant="small" className="text-blue-gray-900 mb-4">
          Get started by creating new notes
        </Typography>
        <Link href="/add-notes">
          <Button
            className="flex items-center gap-3 bg-indigo-500 hover:shadow-indigo-300"
            size="sm"
          >
            <PlusIcon strokeWidth={2} className="h-5 w-5" /> New Notes
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyState;
