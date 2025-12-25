import ServiceCard from "../../components/marketplace/ServiceCard";
import ServiceFilter from "../../components/marketplace/ServiceFilter";
import ServiceHeader from "../../components/marketplace/ServiceHeader";

const services = [
  {
    id: 1,
    title: "Professional Gaming Video Editing",
    freelancer: "AceEditor",
    rating: 4.8,
    price: 1500,
    boosted: true,
  },
  {
    id: 2,
    title: "Esports Thumbnail Design",
    freelancer: "ThumbPro",
    rating: 4.6,
    price: 800,
  },
  {
    id: 3,
    title: "Gaming Channel SEO",
    freelancer: "RankBoost",
    rating: 4.7,
    price: 1200,
  },
];

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <ServiceHeader
        title="Explore Esports Services"
        subtitle="Hire verified editors & designers"
      />

      <ServiceFilter />

      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div>
  );
}
