"use client"

export default function EndDate() {
    return (
        <div>
            <label htmlFor="end_date">End Date</label>
            <input
            id="end_date"
            type="text"
            name="date"
            placeholder="---"
            maxLength={6}
            pattern="^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$"
            title="MM.YYYY "
            />
        </div>
    )
}