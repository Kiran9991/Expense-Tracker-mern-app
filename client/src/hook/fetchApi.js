
export default async function FetchApi(url, method, token, bodyObj) {
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
