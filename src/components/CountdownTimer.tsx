/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Define the fixed dates
  const startDate = new Date("2025-02-16T00:00:00");
  const targetDate = new Date("2025-08-13T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    // If current time is before the challenge start date, use the full period
    const diff =
      now < startDate
        ? targetDate.getTime() - startDate.getTime()
        : targetDate.getTime() - now.getTime();

    const safeDiff = diff > 0 ? diff : 0;
    return {
      days: Math.floor(safeDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((safeDiff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((safeDiff / (1000 * 60)) % 60),
      seconds: Math.floor((safeDiff / 1000) % 60),
      milliseconds: safeDiff % 1000,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 50); // update every 50ms for milliseconds accuracy
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="my-4 text-center">
      {/* <h2 className="text-2xl font-bold">Countdown</h2> */}
      <p className="rounded-md border px-4 py-2 text-xl">
        {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes}{" "}
        minutes, {timeLeft.seconds} seconds, {timeLeft.milliseconds} ms
      </p>
    </div>
  );
};

export default CountdownTimer;
