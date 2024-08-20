export async function sendSlackMessage(message: string) {
  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

  if (!SLACK_WEBHOOK_URL) {
    console.error("Slack webhook URL is not defined");
    return;
  }

  try {
    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: "error from anjik \n" + message,
      }),
    });

    if (!response.ok) {
      console.error("Failed to send message to Slack:", response.statusText);
    }
  } catch (error) {
    console.error("Error sending message to Slack:", error);
  }
}
