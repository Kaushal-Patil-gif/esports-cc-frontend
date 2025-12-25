import KycReviewModal from "../../components/admin/KycReviewModal";

const KycManagement = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">KYC Management</h1>
      <KycReviewModal />
    </div>
  );
};

export default KycManagement;



// export default function KycManagement() {
//   return (
//     <div>
//       <h1>KYC Management</h1>
//       {/* KYC management will go here */}
//     </div>
//   );
// }