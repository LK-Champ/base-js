import { Button, Card } from "antd";
import useControl from "../hooks/useControl";

const gridStyle = {
  width: "25%",
  textAlign: "center"
};

export default (props) => {
  const { globalModalControl } = useControl();
  return (
    <div className="exp-14-users">
      <main>
        <div style={gridStyle}>
          <Button type="link" onClick={() => globalModalControl.show({})}>
            Show Modal 1-1
          </Button>
        </div>
        <div style={gridStyle}>
          <Button type="link" onClick={() => globalModalControl.show({})}>
            Show Modal 1-2
          </Button>
        </div>
        <div style={gridStyle}>
          <Button type="link" onClick={() => globalModalControl.show({})}>
            Show Modal 1-3
          </Button>
        </div>
        <div style={gridStyle}>
          <Button type="link" onClick={() => globalModalControl.show({})}>
            Show Modal 1-4
          </Button>
        </div>
      </main>
    </div>
  );
};
