"use client";
import React, { useState, useEffect } from "react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";
import { ThermometerIcon, Droplets } from "lucide-react"; // Adjust imports as per your setup

// Define the Notification interface
interface Notification {
  id: string;
  type: "warning" | "error" | "success" | "info";
  title: string;
  message: string;
  timestamp: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  status: "urgent" | "active" | "resolved";
}

// Main Component
const NotificationComponent = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Mock sensor data for demonstration
  const [sensorData, setSensorData] = useState({
    temperature: 25, // degrees Celsius
    humidity: 75,    // percentage
    soilMoisture: 25, // percentage
  });

  useEffect(() => {
    const newNotifications: Notification[] = [];

    if (sensorData.temperature > 24) {
      newNotifications.push({
        id: "1",
        type: "warning",
        title: "High Temperature Alert",
        message: `Temperature reached ${sensorData.temperature}°C, above optimal range of 18-24°C`,
        timestamp: "1 minute ago",
        icon: ThermometerIcon,
        status: "urgent",
      });
    }

    if (sensorData.humidity > 70) {
      newNotifications.push({
        id: "2",
        type: "warning",
        title: "High Humidity Alert",
        message: `Humidity levels have risen to ${sensorData.humidity}%, above optimal range`,
        timestamp: "1 minute ago",
        icon: Droplets,
        status: "active",
      });
    }

    if (sensorData.soilMoisture < 30) {
      newNotifications.push({
        id: "3",
        type: "warning",
        title: "Low Soil Moisture",
        message: `Soil moisture is at ${sensorData.soilMoisture}%, below optimal range`,
        timestamp: "1 minute ago",
        icon: Droplets,
        status: "urgent",
      });
    }

    setNotifications(newNotifications);
  }, [sensorData]);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id} className={`notification-${notification.type}`}>
            <notification.icon className="notification-icon" />
            <div>
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>
              <small>{notification.timestamp}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationComponent;
