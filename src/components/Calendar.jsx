// Calendar.js
import React from "react";
import { Calendar } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const CalendarComponent = ({ value, onChange }) => {
  return (
    <Calendar
      date={value.startDate}
      onChange={(date) => onChange({ startDate: date, endDate: date })}
      minDate={new Date()}
      color="#5f6FFF"
      className="border border-gray-400 rounded-xl mb-4"
    />
  );
};

export default CalendarComponent;
