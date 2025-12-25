import ServiceCard from "../../components/marketplace/ServiceCard";
import ServiceHeader from "../../components/marketplace/ServiceHeader";

const freelancerServices = [
  {
    id: 1,
    title: "Gaming Montage Editing",
    freelancer: "AceEditor",
    rating: 4.9,
    price: 1800,
    boosted: true,
  },
  {
    id: 2,
    title: "YouTube Shorts Editing",
    freelancer: "AceEditor",
    rating: 4.7,
    price: 1000,
  },
];

export default function FreelancerServices() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <ServiceHeader
        title="AceEditor’s Services"
        subtitle="Professional esports editing services"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {freelancerServices.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div>
  );
}
