"use client";

import { useEffect, useState } from "react";

type ClockValue = {
  dateTime: string;
  label: string;
};

function getIndiaTime(): ClockValue {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "00";

  return {
    dateTime: now.toISOString(),
    label: `${value("hour")}:${value("minute")}`,
  };
}

export function LocalClock() {
  const [clock, setClock] = useState<ClockValue | null>(null);

  useEffect(() => {
    const update = () => setClock(getIndiaTime());
    update();
    const interval = window.setInterval(update, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="local-clock">
      <time dateTime={clock?.dateTime} aria-label="Local time in Vadodara, India">
        {clock?.label ?? "--:--"}
      </time>
      <span className="local-clock-zone" aria-hidden="true">IST</span>
    </span>
  );
}
