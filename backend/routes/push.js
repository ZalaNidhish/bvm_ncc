const express = require("express");
const router = express.Router();
const sendNotification = require("../utils/push");

const PushSubscription = require("../models/PushSubscription");
const { protect } = require("../middleware/auth");

router.post("/test", async (req, res) => {
  await sendNotification(
    "NCC Portal Test",
    "Push notifications are working!"
  );

  res.json({ success: true });
});

router.post("/subscribe", protect, async (req, res) => {
  try {
    await PushSubscription.findOneAndUpdate(
      { user: req.user._id },
      {
        user: req.user._id,
        subscription: req.body,
      },
      { upsert: true }
    );

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;