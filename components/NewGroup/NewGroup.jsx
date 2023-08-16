import { useState } from "react";
import Button from "../Button";
import Time from "./Time";
import DateSelect from "./DateSelect";
import Limit from "./Limit";
import Public from "./Public";

export default function NewGroup() {
  const text = "發起";
  const [isLaunch, setIsLaunch] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsLaunch(true);
  };
  return (
    <div>
      <Time />
      <DateSelect />
      <Limit />
      <Public />
      <Button text={text} callback={handleClick} status={isLaunch} />
    </div>
  );
}
