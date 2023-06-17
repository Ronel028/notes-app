import Link from "next/link";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  RocketLaunchIcon,
  ArrowLongRightIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

const NotesCard = () => {
  return (
    <Card className="mt-6 w-full">
      <CardBody>
        <BookOpenIcon className="text-indigo-500 w-12 h-12 mb-4" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          Because it's about motivating the doers. Because I'm here to follow my
          dreams and inspire others.
        </Typography>
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
    // <Card className="mt-6 w-full">
    //   <CardBody className="flex-1">
    //     <Typography variant="h5" color="blue-gray" className="mb-2">
    //       UI/UX Review Check
    //     </Typography>
    //     <Typography>
    //       The place is close to Barceloneta Beach and bus stop just 2 min by
    //       walk and near to &quot;Naviglio&quot; where you can enjoy the main
    //       night life in Barcelona.
    //     </Typography>
    //   </CardBody>
    //   <CardFooter className="pt-0">
    //     <Button size="sm" className="bg-indigo-500 hover:shadow-indigo-300">
    //       Read More
    //     </Button>
    //   </CardFooter>
    // </Card>
  );
};

export default NotesCard;
