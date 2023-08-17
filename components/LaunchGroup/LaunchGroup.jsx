import { useState } from "react";
import Button from "../Button";
import Time from "./Time";
import DateSelect from "./DateSelect";
import Limit from "./Limit";
import Public from "./Public";
import Group from "../Group";

export default function NewGroup() {
  const text = "發起";
  const [isLaunch, setIsLaunch] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsLaunch(true);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2vh",
      }}
    >
      <Group />
      <Time />
      <DateSelect />
      <Limit />
      <Public />
      <Button text={text} callback={handleClick} status={isLaunch} />
    </div>
  );
}
