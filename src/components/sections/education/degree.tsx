"use client"

export default function Degree() {
    return (
        <div>
            <label htmlFor="degree">Degree</label>
            <input
                id="degree"
                type="text"
                name="degree"
                required
                placeholder="---"
                pattern="^[A-Za-z]"
                title=""
            />
            <p className="mt-2 text-xs text-gray-600">E.g BSC Computer Science</p>
        </div>
    )
}