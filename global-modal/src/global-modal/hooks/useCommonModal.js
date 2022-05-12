import { useCallback, useMemo } from "react";
import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { showModal, hideModal } from "../redux/action";

const modalCallbacks = {};
export const useCommonModal = (modalId) => {
  const dispatch = useDispatch();
  const show = useCallback(
    (args) => {
      console.log(modalId, args);
      return new Promise((resolve) => {
        modalCallbacks[modalId] = resolve;
        dispatch(showModal(modalId, args));
      });
    },
    [dispatch, modalId]
  );
  const resolve = useCallback(
    (args) => {
      if (modalCallbacks[modalId]) {
        modalCallbacks[modalId](args);
        delete modalCallbacks[modalId];
      }
    },
    [modalId]
  );

  const hide = useCallback(
    (force) => {
      dispatch(hideModal(modalId, force));
      delete modalCallbacks[modalId];
    },
    [dispatch, modalId]
  );

  const args = useSelector((s) => s[modalId]);
  const hiding = useSelector((s) => s.hiding[modalId]);

  return useMemo(
    () => ({ args, hiding, visible: !!args, show, hide, resolve }),
    [args, hide, show, resolve, hiding]
  );
};

function CommonModal({ id, children, ...rest }) {
  const modal = useCommonModal(id);
  return (
    <Modal
      onCancel={() => modal.hide()}
      onOk={() => modal.hide()}
      afterClose={() => modal.hide(true)}
      visible={!modal.hiding}
      {...rest}
    >
      {children}
    </Modal>
  );
}

export const createCommonModal = (modalId, Comp) => {
  return (props) => {
    const { visible, args } = useCommonModal(modalId);
    console.log(visible);
    if (!visible) return null;
    return <Comp {...args} {...props} />;
  };
};

CommonModal.create = createCommonModal;
CommonModal.useCommonModal = useCommonModal;

export default CommonModal;
