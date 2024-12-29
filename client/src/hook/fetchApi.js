import { useContext } from "react";
import { token } from "../App";
import { UserContext } from "../store/user-context";

export default async function FetchApi(url, method, bodyObj) {
  // console.log(url, method)
  const { token } = useContext(UserContext);
  // console.log('api call', token)
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    ...(bodyObj && { body: JSON.stringify(bodyObj) }),
  });
  // let out = await response.json();
  // console.log('req made')
  return response;
}
