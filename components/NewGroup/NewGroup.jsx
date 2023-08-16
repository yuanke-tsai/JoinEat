import Button from "./Button";
import Time from "./Time";
import Date from "./Date";
import Limit from "./Limit";

export default function NewGroup() {
  return (
    <div>
      <Time />
      <Date />
      <Limit />
      <Button />
    </div>
  );
}
