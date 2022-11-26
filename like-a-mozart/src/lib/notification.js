import { toast } from "react-toastify";

export const notifySuccess = message =>
  toast(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    className: "foo-bar",
  });

export const notifyError = message =>
  toast(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    className: "foo-bar",
    type: "error"
  });


export const notifyUnexpectedError = () => notifyError("Um error inesperado ocorreu")
