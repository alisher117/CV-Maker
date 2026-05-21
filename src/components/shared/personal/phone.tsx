"use client";

import { useState } from "react";

export default function Phone() {
  const [phone, setPhone] = useState("+7 ");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Keep only digits
    let value = e.target.value.replace(/\D/g, "");

    // Remove leading 7 if user types it manually
    if (value.startsWith("7")) {
      value = value.slice(1);
    }

    // Limit to 10 digits after +7
    value = value.slice(0, 10);

    let formatted = "+7 ";

    if (value.length > 0) {
      formatted += "(" + value.slice(0, 3);
    }

    if (value.length >= 3) {
      formatted += ") " + value.slice(3, 6);
    }

    if (value.length >= 6) {
      formatted += " " + value.slice(6, 8);
    }

    if (value.length >= 8) {
      formatted += " " + value.slice(8, 10);
    }

    setPhone(formatted);
  };

  return (
    <>
      <label>Phone</label>

      <input
        type="tel"
        name="phone"
        placeholder="+7 (777) 777 77 77"
        value={phone}
        onChange={handleChange}
        maxLength={18}
        required
        pattern="^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$"
        title="Use format: +7 (777) 777 77 77"
      />
    </>
  );
}