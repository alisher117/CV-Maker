"use client"
import FirstName from "./first_name"
import LastName from "./last_name"
import Email from "./email"
import Phone from "./phone"
import DateOfBirth from "./date_of_birth"
import Location from "./location"
import About from "./about"

export default function PersonalInfo(){
    return (
        <>
        <div>
            <h2>Personal information</h2>
            <p>This gets at the top of your CV. Email and phone are how recruiters reach you.</p>
        </div>
        <form>
            <FirstName/>
            <LastName/>
            <Email/>
            <Phone/>
            <DateOfBirth/>
            <Location/>
            <About/>
        </form>
        </>
    )
}