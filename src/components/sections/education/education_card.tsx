"use client"

export default function EducationCard() {
    return (
        <>
        <section className="education-card">
            <div>
                <p className="font-bold">Bachelor of Business Management</p>
                <p className="text-sm">Nazarbayev University</p>
                <div className="flex gap-2 text-gray-600 text-xs">
                    <p>Astana, Kazakhstan</p>
                    <p> • </p>
                    <p>Sep 2020 - Jun 2024</p>
                </div>
            </div>
            <div className="m-auto">
                <button className="edit_btn">Edit</button>
            </div>
        </section>
        </>
    )
}