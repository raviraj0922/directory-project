const RefundCancellation = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Refund and Cancellation Policy</h1>
      
      <div className="card space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-4">1. Business Listing Services</h2>
          <p className="text-gray-700">
            Voice of Azamgarh provides business listing services. The following policy applies to all paid services and subscriptions:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>All payments for business listings are non-refundable once the listing is published</li>
            <li>Business owners can request modifications to their listings at any time</li>
            <li>Cancellation of a listing will not result in a refund of the paid amount</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">2. Cancellation Process</h2>
          <p className="text-gray-700">
            To cancel your business listing:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>Submit a cancellation request through our contact form</li>
            <li>Include your business name and listing ID in the request</li>
            <li>Allow up to 5 business days for processing</li>
            <li>You will receive a confirmation email once the cancellation is complete</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">3. Refund Eligibility</h2>
          <p className="text-gray-700">
            Refunds may be considered in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>Technical issues preventing the listing from being published</li>
            <li>Duplicate charges for the same service</li>
            <li>Service unavailability for an extended period</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">4. Refund Process</h2>
          <p className="text-gray-700">
            If you believe you are eligible for a refund:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>Contact our support team with your request</li>
            <li>Provide relevant documentation and transaction details</li>
            <li>Allow up to 10 business days for review and processing</li>
            <li>Refunds will be issued through the original payment method</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">5. Contact Information</h2>
          <p className="text-gray-700">
            For any questions regarding refunds or cancellations, please contact us:
            <br />
            Email: support@voiceofazamgarh.com
            <br />
            Phone: +91 XXXXXXXXXX
            <br />
            Hours: Monday to Friday, 9:00 AM to 6:00 PM IST
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">6. Policy Updates</h2>
          <p className="text-gray-700">
            We reserve the right to modify this refund and cancellation policy at any time. Any changes will be posted on this page and will be effective immediately upon posting.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundCancellation; 