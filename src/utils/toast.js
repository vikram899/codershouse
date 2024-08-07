import toast from "react-hot-toast";
import { TOAST_DURATION } from "./constants";

class Toast {
  static errorToast(message) {
    toast.error(message, { duration: TOAST_DURATION });
  }
  static successToast(message) {
    toast.success(message, { duration: TOAST_DURATION });
  }
}

export default Toast;
