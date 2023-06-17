import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const NotesCard = () => {
  return (
    <Card className="mt-6 w-full">
      <CardBody className="flex-1">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button size="sm" className="bg-indigo-500 hover:shadow-indigo-300">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NotesCard;
