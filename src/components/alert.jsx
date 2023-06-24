import { Alert, Typography } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

const AlertMsg = (props) => {
  return (
    <Alert
      color="red"
      icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
      open={props.open.open}
    >
      {props.open.msg}
    </Alert>
  );
};

export default AlertMsg;
