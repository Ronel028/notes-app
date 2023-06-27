import { Alert } from "@material-tailwind/react";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const AlertErrorMsg = (props) => {
  return (
    <Alert
      icon={<ExclamationTriangleIcon className="mt-px h-6 w-6" />}
      open={props.errorMsg.open}
      className={`bg-[#f87171]/10 text-[#ef4444] border-l-4 border-[#dc2626] rounded-none font-medium`}
    >
      {props.errorMsg.msg}
    </Alert>
  );
};

export default AlertErrorMsg;
