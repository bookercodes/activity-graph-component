import React from "react";
import "./styles.css";

const RECT_SIZE = 10;

const randomColor = () => {
  const colors = ["red", "green", "orange", "purple", "pink", "yellow", "blue"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const renderDayRect = (day, week) => {
  return (
    <rect
      key={day}
      width={RECT_SIZE}
      height={RECT_SIZE}
      fill={randomColor()}
      x={0}
      y={(day - 1) * RECT_SIZE}
    >
      <title>
        week {week}, day {day}
      </title>
    </rect>
  );
};
const renderWeekColumn = (week) => {
  const dayCount = 7;
  const days = Array.from(Array(dayCount), (_, i) => i + 1);
  return (
    <g key={week} transform={`translate(${(week - 1) * RECT_SIZE}, 0)`}>
      {days.map((day) => renderDayRect(day, week))}
    </g>
  );
};

const renderHeatMap = () => {
  const weekCount = 52;
  const weeks = Array.from(Array(weekCount), (_, i) => i + 1);
  const weekColumns = weeks.map((week) => renderWeekColumn(week));
  return weekColumns;
};

export default () => (
  <div>
    <svg width={600} height={300}>
      {renderHeatMap()}
    </svg>
  </div>
);
