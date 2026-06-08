const webpush = require("web-push");
const PushSubscription = require("../models/PushSubscription");

webpush.setVapidDetails(
  "mailto:admin@nccportal.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

async function sendNotification(title, body) {
  const subscriptions = await PushSubscription.find();

  const payload = JSON.stringify({
    title,
    body,
  });

  for (const sub of subscriptions) {
    try {
      await webpush.sendNotification(
        sub.subscription,
        payload
      );
    } catch (err) {
      console.log(err.message);
    }
  }
}

module.exports = sendNotification;