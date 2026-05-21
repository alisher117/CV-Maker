"use client";

export default function Email() {
  return (
    <>
      <label>Email</label>

      <input
        type="email"
        name="email"
        required
        placeholder="johndave@example.com"
        pattern="^[A-Za-z]{2,20}$"
        title="Email should contain only letters (2-20 characters)"
      />
    </>
  );
}