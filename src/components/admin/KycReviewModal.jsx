const KycReviewModal = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Pending KYC Requests</h2>

      <div className="border rounded-lg p-4 flex justify-between items-center">
        <div>
          <p className="font-semibold">Alex Gamer</p>
          <p className="text-sm text-gray-500">ID Submitted • 2 days ago</p>
        </div>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Approve
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default KycReviewModal;




// export default function KycReviewModal() {
//   return <div>{/* KYC review modal will go here */}</div>;
// }