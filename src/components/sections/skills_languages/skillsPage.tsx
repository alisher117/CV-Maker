'use client';

export default function SkillsPage() {
    return (
        <>
        <section className="skills-info">
            <h2>Skills & languages</h2>
            <p>Add what you actually use on daily basis. We&apos;ll rank them by relevance to your target role.</p>
        </section>
        <section>
            <p className="font-bold ">Languages</p>
            <div className="languages">
                <div>
                    <p>English</p>
                </div>
                <div className="flex flex-row">
                    <p>C1 • Advanced</p>
                    <button type="submit" className="border-[#D9D9D9] m-l-2 rounded-sm">🖊️</button>
                </div>
            </div>
            <div className="languages">
                <div>
                    <p>Kazakh</p>
                </div>
                <div className="flex flex-row">
                    <p>Native</p>
                    <button type="submit" className="border-[#D9D9D9] m-l-2 rounded-sm">🖊️</button>
                </div>
            </div>
            <div>
                <button type="submit" className="add-lang">+ Add language</button>
            </div>
        </section>
        <section>
            <p className="font-bold ">Skills</p>
            <div>
                <form>
                    <input type="text" name="search" placeholder="Type a skill e.g. 'Photoshop'" className="search-input"/>
                </form>
                <div className="m-0">
                    <button className="skill-btn">MS Office ×</button>
                    <button className="skill-btn">Figma ×</button>
                </div>
            </div>
            <div className="bg-neutral-100 rounded-lg p-1 mt-5">
                <p className="font-bold text-gray-600 text-xs ">💡 SUGGESTED FOR BUSINESS MANAGER ROLES</p>
                <div className="mt-4">
                    <button className="suggested-skill-btn">+ Python</button>
                    <button className="suggested-skill-btn">+ Salesforce</button>
                </div>
            </div>
        </section>
        </>
    )
}