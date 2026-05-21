"use client";

export default function About() {
  return (
    <>
      <label>About</label>

      <textarea
        name="about"
        required
        placeholder="Tell something about yourself..."
        minLength={10}
        maxLength={500}
        rows={5}
        style={{ resize: "none" }}
        title="About section should be 10-500 characters"
      />
    </>
  );
}