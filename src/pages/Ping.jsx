import { useEffect, useState, useRef } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useLangContext } from "../context/LangContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Ping = () => {
  const { lang } = useLangContext();
  const [pingTimes, setPingTimes] = useState([
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ]);

  const labels = [
    "16s ago",
    "14s ago",
    "12s ago",
    "10s ago",
    "8s ago",
    "6s ago",
    "4s ago",
    "2s ago",
  ];

  const options = {
    scales: {
      x: {
        // type: "linear", // For x-axis
      },
      y: {
        type: "linear", // For y-axis
        min: 0, // Define the minimum value
        //max: 200, // Define the maximum value
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text:
          lang == "en" ? "Latency Check (Ping)" : "اختبار سرعة الإتصال (Ping)",
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: lang == "en" ? "Latency" : "التأخير",
        backgroundColor: "#3185FF10",
        borderColor: "#3185FF",
        borderWidth: 2,
        pointRadius: 5,
        fill: true,
        data: pingTimes,
      },
    ],
  };

  const ping = async () => {
    const startTime = Date.now();
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      if (response.ok) {
        const endTime = Date.now();
        const latency = endTime - startTime;
        setPingTimes((prevTimes) => [
          ...prevTimes.slice(1), // Remove the oldest value
          latency, // Add the new latency value
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      ping();
    }, 2000);
    return () => clearInterval(timer);
  }, [pingTimes]);

  return (
    <main className="pt-[76px] sm:pt-[96px] lg:pt-[110px] min-h-screen">
      <div className="container mx-auto pt-16 px-4">
        {/* Section Title */}
        <h2 className="section-title w-fit mx-auto">
          {lang == "en" ? "Ping Test" : "اختبار سرعة الإتصال"}
        </h2>
        <p className="text-center text-paragraph">
          {lang == "en"
            ? "Ping may not always be accurate"
            : "التأخير من الممكن ان لا يكون دائما دقيق"}
        </p>
        {/* Chart */}
        <div className="max-w-[1100px] mx-auto flex justify-center h-[400px]">
          <Line options={options} data={data} />
        </div>
      </div>
    </main>
  );
};

export default Ping;
