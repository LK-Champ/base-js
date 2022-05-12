import { Button } from "antd";
import useControl from "../hooks/useControl";
import ChildrenSon from "./ChildrenSon";

export default (props) => {
  const { globalModalControl } = useControl();
  return (
    <>
      <Button type="link" onClick={() => globalModalControl.show({})}>
        Show Modal1
      </Button>
      <ChildrenSon />
    </>
  );
};
