// action creators
function showModal(modalId, args) {
  return {
    type: "global-modal/show",
    payload: {
      modalId,
      args
    }
  };
}

function hideModal(modalId, force) {
  return {
    type: "global-modal/hide",
    payload: {
      modalId,
      force
    }
  };
}

export { showModal, hideModal };
