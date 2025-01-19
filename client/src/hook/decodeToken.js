export default function decodeToken(token) {
  if (!token) return;
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((char) => "%" + ("00" + char.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );
    //   console.log(jsonPayload, 'jsonPlayload')
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.log(error.message);
  }
}
