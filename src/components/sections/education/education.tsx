"use client"
import EducationHeader from "./education_header"
import EducationCard from "./education_card"
import SaveEntryBtn from "./save_entry_btn"
import EducationForm from "./education_form"
import CancelBtn from "./cancel"

export default function Education() {
    return (
        <>
        <main>
            <EducationHeader/>
            <EducationCard/>
            <EducationCard/>
            <p className="mt-10 mb-5 text-xs font-bold text-gray-600">ADD A NEW ENTRY</p>
            <EducationForm/>
            <section className="flex mt-10 mb-10 gap-2 justify-end">
                <CancelBtn/>
                <SaveEntryBtn/>
            </section>
        </main>
        </>
    )
}