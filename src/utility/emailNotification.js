import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_vini25e";
const TEMPLATE_ID = "template_ir8fd8h";
const PUBLIC_KEY = "S6lAoSkIVilEHH072";

emailjs.init({
  publicKey: PUBLIC_KEY,
});

export const sendDeveloperNotification = async ({
  eventType,
  userName = "Unknown User",
  userEmail = "Not provided",
  message = "",
}) => {
  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      event_type: eventType,
      user_name: userName,
      user_email: userEmail,
      event_time: new Date().toLocaleString(),
      message: message,
    });

    console.log("Developer notification sent successfully.");
  } catch (error) {
    console.error("Failed to send developer notification:", error);
  }
};