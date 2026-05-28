'use client';

export default function CertificationPage(){
	return (
		<>
		<section className="certifi-info">
			<div>
				<h2>Certifications</h2>
				<p className="text-[#757475] text-xs p-1 rounded-sm bg-[#F7F5F4] font-bold w-25 text-center">OPTIONAL</p>
				<p>Courses, licenses, professional credentials, language tests. List the most recent first — skip if none.</p>
			</div>
		</section>
		<section className="certifi-cards">
			<div>
				<p className="bg-[#FBEBEE] text-[#A4102A] rounded-xl w-15 h-15 text-center">★</p>
			</div>
			<div>
				<p className="font-bold text-base mb-1">Cisco Certified Network Associate (CCNA)</p>
				<p className="bg-[#E9F6ED] text-[#388A6A] font-semibold rounded-xl text-xs w-20">✓ VERIFIED</p>
				<p className="text-sm mb-1">Cisco Networking Academy</p>
				<p className="text-sm text-gray-700">Issued Mar 2025 • No expiry • Credential ID CSCO-13059417</p>
			</div>
			<div>
				<button type="button" className="border-[#D9D9D9] rounded-lg p-2 w-30 text-center">Edit</button>
			</div>
		</section>
		{/* inputs */}
		<section>
			<p className="mt-10 mb-5 text-xs font-bold text-gray-600">ADD A NEW CERTIFICATION</p>
			<form className="certifi-form">
				<div>
					<label htmlFor="certification_name">Certification Name</label>
					<input
					id="certification_name"
					type="text"
					name="certification_name"
					placeholder="---"
					/>
					<p className="mt-2 text-xs text-gray-600">e.g. AWS Solutions Architect.</p>
				</div>
				<div>
					<label htmlFor="issuing_organization">Issuing Organization</label>
					<input
					id="issuing_organization"
					type="text"
					name="issuing_organization"
					placeholder="---"
					/>
					<p className="mt-2 text-xs text-gray-600">Start typing — we&apos;ll suggest.</p>
				</div>
				<div>
					<label htmlFor="issue_date">Issue Date</label>
					<input
					id="issue_date"
					type="text"
					name="issue_date"
					placeholder="---"
					/>
					<p className="mt-2 text-xs text-gray-600">MM/YYYY</p>
				</div>
				<div>
					<label htmlFor="expiry_date">Expiry Date • Optional</label>
					<input
					id="expiry_date"
					type="text"
					name="expiry_date"
					placeholder="---"
					/>
					<p className="mt-2 text-xs text-gray-600">MM/YYYY</p>
				</div>
				<div>
					<label htmlFor="credential_id">Credential ID • Optional</label>
					<input
					id="credential_id"
					type="text"
					name="credential_id"
					placeholder="---"
					/>
				</div>
				<div>
					<label htmlFor="credential_url">Credential URL • Optional</label>
					<input
					id="credential_url"
					type="text"
					name="credential_url"
					placeholder="---"
					/>
				</div>
			</form>
		</section>
		</>
	)
}