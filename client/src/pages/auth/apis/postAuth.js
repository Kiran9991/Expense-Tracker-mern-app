import { LocalHost } from "../../..";

export async function postAuth(distination, userDetails) {
  const response = await fetch(`${LocalHost}/user/${distination}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  });
  return response;
}
