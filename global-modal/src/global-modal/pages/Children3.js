import { Button } from "antd";
import useControl from "../hooks/useControl";

export default (props) => {
  const { globalModalControl } = useControl();
  return (
    <Button type="link" onClick={() => globalModalControl.show({})}>
      Show Modal3
    </Button>
  );
};
