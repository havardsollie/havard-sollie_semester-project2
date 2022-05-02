export function displayMessage(messageType, message = "An error occurred") {

  return `<div class="message ${messageType}">${message}</div>`;
}