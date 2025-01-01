"use client";

import { useState } from "react";
import { LogOut } from "lucide-react"; // Icon
import { Button } from "./ui/button"; // Button Component
import { Card } from "./ui/card"; // Card Component

export function Chatbot() {
  const [isChatVisible, setIsChatVisible] = useState(true); // Toggle visibility of chatbot
  const [hasSeenIntro, setHasSeenIntro] = useState(false); // Track if the user has seen the intro message

  const BOTPRESS_URL =
    "https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/30/12/20241230122325-TK30WE6Y.json";

  const handleToggleChat = () => {
    if (isChatVisible) {
      setIsChatVisible(false);
    } else {
      setIsChatVisible(true);
      if (!hasSeenIntro) {
        setHasSeenIntro(true);
      }
    }
  };

  return (
    <div className="space-y-4">
      {/* Introductory Message */}
      {!hasSeenIntro && isChatVisible && (
        <div className="p-4 bg-blue-100 text-blue-900 rounded-md">
          <p>
            Welcome to the Hydroponics Assistant! I’m here to help you with
            questions or guidance about your hydroponic system. Feel free to
            explore or ask anything.
          </p>
        </div>
      )}

      {/* Botpress Webchat */}
      {isChatVisible && (
        <Card className="p-6">
          <iframe
            src={BOTPRESS_URL}
            title="Hydroponics Assistant"
            style={{
              width: "100%",
              height: "500px",
              border: "none",
            }}
          ></iframe>
        </Card>
      )}

      {/* Toggle Chat Visibility */}
      <Button
        variant={isChatVisible ? "destructive" : "default"}
        className="w-full"
        onClick={handleToggleChat}
      >
        {isChatVisible ? (
          <>
            <LogOut className="h-4 w-4 mr-2" />
            Close Chat
          </>
        ) : (
          "Open Chat"
        )}
      </Button>
    </div>
  );
}
