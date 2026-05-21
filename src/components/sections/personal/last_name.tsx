"use client";

export default function LastName() {
  return (
    <>
      <label>Last name</label>

      <input
        type="text"
        name="last_name"
        required
        placeholder="Dave"
        pattern="^[A-Za-z]{2,20}$"
        title="Last name should contain only letters (2-20 characters)"
      />
    </>
  );
}