import Groups from "./Groups";
import Button from "./Button";
// import LaunchGroup from "./LaunchGroup/LaunchGroup";

export default function NewGroups({ setIsNewGroup, setGoEvent }) {
  const text = "開新團";
  const handleClickRender = (e) => {
    e.preventDefault();
    setIsNewGroup(true);
  };
  return (
    <div>
      <Groups setGoEvent={setGoEvent} />
      <Button text={text} callback={handleClickRender} />
    </div>
  );
}
