import { sendDeveloperNotification } from "./emailNotification";

sendDeveloperNotification({
  eventType: "NEXORA EMAIL TEST",
  userName: "Jayesh",
  userEmail: "gujar327@gmail.com",
  message: "This is a test notification from NEXORA.",
});