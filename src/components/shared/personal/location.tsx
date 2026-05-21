"use client";

export default function Location() {
  return (
    <>
      <label>Location • <p className="text-gray-500 font-normal">Optional</p></label>

      <input
        type="text"
        name="location"
        placeholder="Kazakhstan, Atyrau, Satpayev AVE, 11"
        pattern="^[A-Za-z0-9\s,.\-]{5,100}$"
        title="Enter a valid location"
        className="w-2xs"
      />
    </>
  );
}