import { token } from "../App";

export default async function fetchApi(url, method, bodyObj) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    ...(bodyObj && { body: JSON.stringify(bodyObj) }),
  });
  return response;
}
