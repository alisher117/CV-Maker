"use client"

export default function UniversityOrCollege() {
  return (
    <div>
      <label htmlFor="university_or_college">University or College</label>
      <input
        id="university_or_college"
        type="text"
        name="university_or_college"
        required
        placeholder="---"
        pattern="^[A-Za-z]"
        title="Start typing we'll suggest matches."
      />
      <p  className="mt-2 text-xs text-gray-600">Start typing we&apos;ll suggest matches.</p>
    </div>
  );
}