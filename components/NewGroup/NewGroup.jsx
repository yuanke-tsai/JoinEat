import Button from "./Button";
import Time from "./Time";
import DateSelect from "./DateSelect";
import Limit from "./Limit";
import Public from "./Public";

export default function NewGroup() {
  return (
    <div>
      <Time />
      <DateSelect />
      <Limit />
      <Public />
      <Button />
    </div>
  );
}
