import { GLOBAL_MODAL_KEY } from "../utils/const";
import { useCommonModal } from "../hooks/useCommonModal";

const useControl = () => {
  const globalModalControl = useCommonModal(GLOBAL_MODAL_KEY);
  return {
    globalModalControl
  };
};

export default useControl;
