import { useToasts } from "react-toast-notifications";

export const useToast = () => {
  const { addToast } = useToasts();

  return {
    info(msg: string) {
      addToast(msg, { appearance: "info", autoDismiss: true });
    },

    warning(msg: string) {
      addToast(msg, { appearance: "warning", autoDismiss: true });
    },

    error(msg: string) {
      addToast(msg, { appearance: "error", autoDismiss: true });
    },

    success(msg: string) {
      addToast(msg, { appearance: "success", autoDismiss: true });
    }
  };
};
