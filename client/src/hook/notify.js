import { toast, Bounce } from "react-toastify";

export default function notify(message, type, span) {
  toast[type](message, {
    position: "top-right",
    autoClose: span ? span : 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
}
