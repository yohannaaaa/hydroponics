"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Thermometer, Droplets, Fan } from "lucide-react";

export default function StatusPage() {
  const [data, setData] = useState({
    temperature: "Loading...",
    humidity: "Loading...",
    soilMoisture: "Loading...",
  });

  const [isClient, setIsClient] = useState(false);

  const arduinoBaseUrl = "http://192.168.43.9"; // Ensure the protocol is correct

  useEffect(() => {
    setIsClient(true); // Ensures client-side rendering

    async function fetchMoisture() {
      try {
        const response = await fetch(`${arduinoBaseUrl}/readMoisture`);
        if (!response.ok) throw new Error("Failed to fetch soil moisture");
        const soilMoisture = await response.text();
        setData((prev) => ({ ...prev, soilMoisture: `${soilMoisture} %` }));
      } catch (error) {
        console.error("Error fetching soil moisture:", error);
        setData((prev) => ({ ...prev, soilMoisture: "Error" }));
      }
    }

    async function fetchDHT() {
      try {
        const response = await fetch(`${arduinoBaseUrl}/readDHT`);
        if (!response.ok) throw new Error("Failed to fetch DHT data");
        const dhtData = await response.text();
        const [temp, hum] = JSON.parse(dhtData);
        setData((prev) => ({
          ...prev,
          temperature: `${temp} °C`,
          humidity: `${hum} %`,
        }));
      } catch (error) {
        console.error("Error fetching DHT data:", error);
        setData((prev) => ({ ...prev, temperature: "Error", humidity: "Error" }));
      }
    }

    fetchMoisture();
    fetchDHT();
  }, []);

  return (
    <div className="space-y-6 md:space-y-8 px-4 md:px-0">
      {/* Header Section */}
      <div className="relative h-[180px] md:h-[240px] rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/50" />
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">System Status</h1>
          <p className="text-green-100">Real-time monitoring dashboard</p>
        </div>
      </div>

      {/* Status Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-48">
        {/* Temperature Card */}
        <Card className="p-4 md:p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-t-green-500">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            {isClient && (
              <div className="bg-green-100 dark:bg-green-900 p-3 md:p-4 rounded-xl">
                <Thermometer className="h-6 w-6 md:h-8 md:w-8 text-green-600 dark:text-green-400" />
              </div>
            )}
            <div>
              <h3 className="font-semibold text-base md:text-lg">Temperature</h3>
              <p className="text-2xl md:text-3xl font-bold">{data.temperature}</p>
            </div>
          </div>
        </Card>

        {/* Humidity Card */}
        <Card className="p-4 md:p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-500">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            {isClient && (
              <div className="bg-blue-100 dark:bg-blue-900 p-3 md:p-4 rounded-xl">
                <Droplets className="h-6 w-6 md:h-8 md:w-8 text-blue-600 dark:text-blue-400" />
              </div>
            )}
            <div>
              <h3 className="font-semibold text-base md:text-lg">Humidity</h3>
              <p className="text-2xl md:text-3xl font-bold">{data.humidity}</p>
            </div>
          </div>
        </Card>

        {/* Soil Moisture Card */}
        <Card className="p-4 md:p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-t-brown-500">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            {isClient && (
              <div className="bg-brown-100 dark:bg-brown-900 p-3 md:p-4 rounded-xl">
                <Fan className="h-6 w-6 md:h-8 md:w-8 text-brown-600 dark:text-brown-400" />
              </div>
            )}
            <div>
              <h3 className="font-semibold text-base md:text-lg">Soil Moisture</h3>
              <p className="text-2xl md:text-3xl font-bold">{data.soilMoisture}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
