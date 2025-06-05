const TermsCondition = () => {
  return (
    <div className="space-y-8">
      <h1 className="section-title">Terms and Conditions</h1>
      
      <div className="card space-y-8">
        <section>
          <h2 className="section-subtitle">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing and using Voice of Azamgarh, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2 className="section-subtitle">2. Use License</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Permission is granted to temporarily access the materials (information or software) on Voice of Azamgarh's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </section>

        <section>
          <h2 className="section-subtitle">3. Business Listings</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            By submitting a business listing, you agree to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Provide accurate and complete information</li>
            <li>Maintain the accuracy of your listing</li>
            <li>Not submit false or misleading information</li>
            <li>Not use the service for any illegal purposes</li>
            <li>Not violate any applicable laws or regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="section-subtitle">4. User Responsibilities</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Users of Voice of Azamgarh are responsible for:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Maintaining the confidentiality of their account information</li>
            <li>All activities that occur under their account</li>
            <li>Ensuring their account information is accurate and up-to-date</li>
            <li>Reporting any unauthorized use of their account</li>
          </ul>
        </section>

        <section>
          <h2 className="section-subtitle">5. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            The content, organization, graphics, design, and other matters related to the website are protected under applicable copyrights and other proprietary laws. The copying, redistribution, use, or publication of any such content is prohibited without the express permission of Voice of Azamgarh.
          </p>
        </section>

        <section>
          <h2 className="section-subtitle">6. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            In no event shall Voice of Azamgarh or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website.
          </p>
        </section>

        <section>
          <h2 className="section-subtitle">7. Revisions and Errata</h2>
          <p className="text-gray-600 leading-relaxed">
            The materials appearing on Voice of Azamgarh's website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="section-subtitle">8. Contact Information</h2>
          <div className="text-gray-600 leading-relaxed">
            <p>If you have any questions about these Terms and Conditions, please contact us:</p>
            <div className="mt-4 space-y-2">
              <p className="flex items-center">
                <span className="font-medium mr-2">Email:</span>
                <a href="mailto:legal@voiceofazamgarh.com" className="text-accent hover:text-accent-dark transition-colors">
                  legal@voiceofazamgarh.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-medium mr-2">Phone:</span>
                <a href="tel:+91XXXXXXXXXX" className="text-accent hover:text-accent-dark transition-colors">
                  +91 XXXXXXXXXX
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsCondition; 