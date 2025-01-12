import FetchApi from "../hook/FetchApi";
import { LocalHost } from "../App";

// post Req
export default async function postMessageApi(message) {
  try {
    const response = await FetchApi(`${LocalHost}/chat/send`, "POST", "", {
      message: message,
    });
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.log(error);
  }
}
