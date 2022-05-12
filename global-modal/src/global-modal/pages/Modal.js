import React from "react";
import { Modal } from "antd";
import { GLOBAL_MODAL_KEY } from "../utils/const";
import { useSelector } from "react-redux";

export default (props) => {
  const { handleOk, handleCancel } = props;
  const modalReducer = useSelector((state) => state.modalReducer);
  const { title } = modalReducer?.[GLOBAL_MODAL_KEY] || {};
  return (
    <Modal
      visible
      title={title || "global-modal"}
      okText={"Ok"}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
    </Modal>
  );
};
