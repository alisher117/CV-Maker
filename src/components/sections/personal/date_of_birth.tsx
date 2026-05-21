"use client";

import { useState } from "react";

export default function DateOfBirth() {
  const [date, setDate] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    // DD.MM.YYYY formatting
    if (value.length > 2 && value.length <= 4) {
      value = value.slice(0, 2) + "." + value.slice(2);
    } else if (value.length > 4) {
      value =
        value.slice(0, 2) +
        "." +
        value.slice(2, 4) +
        "." +
        value.slice(4, 8);
    }

    setDate(value);
  };

  return (
    <>
      <label>Date of birth • <p className="text-gray-500 font-normal">Optional</p></label>

      <input
        type="text"
        name="date"
        placeholder="01.01.2000"
        value={date}
        onChange={handleChange}
        maxLength={10}
        pattern="^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$"
        title="Use format DD.MM.YYYY "
        max="31.12.2020"//user can't be born in future or be child. for further functionality must be updated
      />

    </>
  );
}