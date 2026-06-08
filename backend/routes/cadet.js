const express = require("express");
const router = express.Router();
const CadetProfile = require("../models/CadetProfile");
const { protect } = require("../middleware/auth");
const Attendance = require("../models/Attendance");

/**
 * Build full profile response from DB record.
 * All data lives in DB after the one-time seed — no Excel dependency.
 */
function buildFullProfile(dbProfile) {
  if (!dbProfile) return null;
  return {
    regimentalNumber: dbProfile.regimentalNumber,
    // Locked fields (seeded from Excel)
    name:           dbProfile.name          || "",
    rank:           dbProfile.rank          || "",
    wing:           dbProfile.wing          || "",
    battalion:      dbProfile.battalion     || "",
    phone:          dbProfile.phone         || "",
    dateOfBirth:    dbProfile.dateOfBirth   || null,
    gender:         dbProfile.gender        || "",
    joiningYear:    dbProfile.joiningYear   || null,
    attendancePct:  dbProfile.attendancePct || 0,
    totalParades:   dbProfile.totalParades  || 0,
    paradesPresent: dbProfile.paradesPresent|| 0,
    // Editable fields
    address:        dbProfile.address       || "",
    photo:          dbProfile.photo         || "",
  };
}

// @route   GET /api/cadet/profile
// @desc    Get logged-in cadet's full profile from DB
// @access  Private (cadet)
router.get("/profile", protect, async (req, res) => {
  try {
    const dbProfile = await CadetProfile.findOne({ user: req.user._id });

    if (!dbProfile) {
      return res.status(404).json({
        message:
          "Profile not found. Please contact admin — your account may not have been seeded correctly.",
      });
    }

    // Calculate attendance dynamically
    const records = await Attendance.find({
      cadet: req.user._id,
    }).populate("event", "eventCategory");

    const paradeRecords = records.filter(
      (r) => r.event?.eventCategory === "Parade"
    );

    const totalParades = paradeRecords.length;

    const paradesPresent = paradeRecords.filter(
      (r) => r.status === "Present"
    ).length;

    const attendancePct =
      totalParades > 0
        ? Math.round((paradesPresent / totalParades) * 100)
        : 0;

    const profile = buildFullProfile(dbProfile);

    profile.totalParades = totalParades;
    profile.paradesPresent = paradesPresent;
    profile.attendancePct = attendancePct;

    res.json(profile);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

// @route   PUT /api/cadet/profile
// @desc    Update only editable fields (address, photo)
// @access  Private (cadet)
router.put("/profile", protect, async (req, res) => {
  try {
    const dbProfile = await CadetProfile.findOne({ user: req.user._id });

    if (!dbProfile) {
      return res.status(404).json({ message: "Profile not found. Please contact admin." });
    }

    // Only allow these fields to be changed by the cadet
    const allowed = ["address", "photo"];
    for (const key of allowed) {
      if (req.body[key] !== undefined) {
        dbProfile[key] = req.body[key];
      }
    }

    await dbProfile.save();
    res.json(buildFullProfile(dbProfile));
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
