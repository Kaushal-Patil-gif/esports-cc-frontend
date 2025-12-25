const ServiceModeration = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Service Moderation</h2>

      <div className="flex justify-between items-center border p-4 rounded-lg">
        <div>
          <p className="font-semibold">Instagram Shoutout Service</p>
          <p className="text-sm text-gray-500">Creator: Luna Plays</p>
        </div>
        <div className="space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Review
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Disable
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModeration;



// export default function ServiceModeration() {
//   return <div>{/* Service moderation will go here */}</div>;
// }