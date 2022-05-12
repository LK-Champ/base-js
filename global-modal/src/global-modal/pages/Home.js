import React from "react";
import { Button } from "antd";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Card } from "antd";
import Modal from "../pages/Modal";
import { GLOBAL_MODAL_KEY } from "../utils/const";
import { modalReducer } from "../redux/reducer";
import { createCommonModal } from "../hooks/useCommonModal";
import useControl from "../hooks/useControl";

import Children1 from "./Children1";
import Children2 from "./Children2";
import Children3 from "./Children3";
import Children4 from "./Children4";

const gridStyle = {
  width: "25%",
  textAlign: "center"
};

const store = createStore(modalReducer);

const ModalWrapper = createCommonModal(GLOBAL_MODAL_KEY, (props) => (
  <Modal {...props} />
));

function Main() {
  const { globalModalControl } = useControl();

  return (
    <div className="exp-14-users">
      <sider>
        <Button type="primary" onClick={() => globalModalControl.show({})}>
          + Show Modal
        </Button>
      </sider>
      <main>
        <Card title="Card Title">
          <Card.Grid style={gridStyle}>
            <Children1 />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Children2 />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Children3 />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Children4 />
          </Card.Grid>
        </Card>
      </main>
      <ModalWrapper
        handleOk={() => {
          globalModalControl.hide(true);
        }}
        handleCancel={() => {
          globalModalControl.hide(true);
        }}
      />
    </div>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
