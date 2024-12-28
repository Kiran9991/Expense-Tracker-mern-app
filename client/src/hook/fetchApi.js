import { token } from "../App";

export default async function fetchApi(url, method, bodyObj) {
// console.log(url, method)
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
