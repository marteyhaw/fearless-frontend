// Get the cookie out of the cookie store
const payloadCookie = await cookieStore.get("jwt_access_payload"); // FINISH THIS
if (payloadCookie) {
  // The cookie value is a JSON-formatted string, so parse it
  const encodedPayload = JSON.parse(payloadCookie.value);

  // Convert the encoded payload from base64 to normal string
  const decodedPayload = atob(encodedPayload); // FINISH THIS

  // The payload is a JSON-formatted string, so parse it
  const payload = JSON.parse(decodedPayload); // FINISH THIS

  // Print the payload
  console.log(payload);

  // Check if "events.add_conference" is in the permissions.
  // If it is, remove 'd-none' from the link
  const permissions = payload.user.perms;
  if (permissions.includes("events.add_conference"))
    document.getElementById("nav-new-conference").classList.remove("d-none");

  // Check if "events.add_location" is in the permissions.
  // If it is, remove 'd-none' from the link
  if (permissions.includes("events.add_location"))
    document.getElementById("nav-new-location").classList.remove("d-none");

  if (permissions.includes("presentations.add_presentation"))
    document.getElementById("nav-new-presentation").classList.remove("d-none");
}
