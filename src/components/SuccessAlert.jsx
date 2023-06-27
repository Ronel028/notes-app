import { Alert } from "@material-tailwind/react";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const AlertSuccessMsg = (props) => {
  return (
    <Alert
      icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
      open={props.successMsg.open}
      className="bg-[#2ec946]/10 text-[#2ec946] border-l-4 border-[#2ec946] rounded-none font-medium"
    >
      {props.successMsg.msg}
    </Alert>
  );
};

export default AlertSuccessMsg;
