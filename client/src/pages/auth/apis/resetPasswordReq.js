import FetchApi from "../../../hook/FetchApi";
import { LocalHost } from "../../..";
import notify from "../../../hook/notify";

const resetPasswordReq = async (setLoading, obj) => {
  setLoading(true);
  try {
    const response = await FetchApi(
      `${LocalHost}/user/reset-password`,
      "POST",
      "",
      obj
    );
    const data = await response.json();
    console.log(data);
    if (!response.ok) throw new Error(data.message);
    notify(data.message, 'success')
  } catch (error) {
    console.log(error);
    notify(error.message, "error");
  }
  setLoading(false);
};

export default resetPasswordReq
