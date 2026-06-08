const webpush = require("web-push");
const PushSubscription = require("../models/PushSubscription");

webpush.setVapidDetails(
  "mailto:admin@nccportal.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY,
);

async function sendNotification(title, body) {
  const subscriptions = await PushSubscription.find();

  console.log("Sending to", subscriptions.length, "subscriptions");

  const payload = JSON.stringify({
    title,
    body,
  });

  for (const sub of subscriptions) {
    try {
      await webpush.sendNotification(sub.subscription, payload);
    } catch (err) {
      if (err.statusCode === 404 || err.statusCode === 410) {
        await PushSubscription.deleteOne({
          _id: sub._id,
        });
      }
    }
  }
}

module.exports = sendNotification;
