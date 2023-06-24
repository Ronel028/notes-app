import { Alert } from "@material-tailwind/react";

const AlertMsg = (props) => {
  return (
    <Alert
      icon={props.open.icon}
      open={props.open.open}
      className={`bg-[${props.open.bgColor}]/10 text-[${props.open.textColor}] border-l-4 border-[${props.open.borderColor}] rounded-none font-medium`}
    >
      {props.open.msg}
    </Alert>
  );
};

export default AlertMsg;
