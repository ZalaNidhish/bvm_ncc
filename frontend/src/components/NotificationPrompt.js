import React, { useState } from "react";
import { subscribeToPush } from "../utils/push";

const NotificationPrompt = () => {
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleEnable = async () => {
    try {
      setLoading(true);

      await subscribeToPush();

      if (Notification.permission === "granted") {
        setHidden(true);
      }
    } finally {
      setLoading(false);
    }
  };

  if (hidden || Notification.permission !== "default") {
    return null;
  }

  return (
    <div
      style={{
        background: "#fff8e1",
        border: "1px solid #facc15",
        borderRadius: "12px",
        padding: "14px 18px",
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
      }}
    >
      <div>
        <strong>🔔 Enable Notifications</strong>
        <p
          style={{
            margin: "4px 0 0",
            color: "#666",
            fontSize: "14px",
          }}
        >
          Get instant notice and attendance updates.
        </p>
      </div>

      <button
        onClick={handleEnable}
        disabled={loading}
        style={{
          background: "#1f4e79",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "10px 18px",
          fontSize: "14px",
          fontWeight: "600",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "all 0.2s ease",
          boxShadow: "0 2px 8px rgba(31, 78, 121, 0.25)",
        }}
      >
        {loading ? "Enabling..." : "Enable"}
      </button>
    </div>
  );
};

export default NotificationPrompt;
