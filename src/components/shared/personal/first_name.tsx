"use client";

export default function FirstName() {
  return (
    <>
      <label>First name</label>

      <input
        type="text"
        name="first_name"
        required
        placeholder="John"
        pattern="^[A-Za-z]{2,20}$"
        title="First name should contain only letters (2-20 characters)"
      />
    </>
  );
}