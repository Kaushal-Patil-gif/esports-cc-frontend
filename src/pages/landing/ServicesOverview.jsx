import ServiceCard from "../../components/marketplace/ServiceCard";

const services = [
  {
    title: "Development & IT",
    description: "React, Node.js, and full-stack solutions",
    price: "10,000",
  },
  {
    title: "Design & Creative",
    description: "Modern, user-centric design systems",
    price: "7,000",
  },
  {
    title: "Sales & Marketing",
    description: "Strategy consulting and campaign management",
    price: "12,000",
  },
  {
    title: "HR & Training",
    description: "Recruitment, training programs, and talent management",
    price: "5,000",
  },
  {
    title: "Writing & Translation",
    description: "Content writing and professional translation services",
    price: "5,000",
  },
  {
    title: "Finance & Accounting",
    description: "Bookkeeping, tax planning, and financial advisory",
    price: "5,000",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Popular Professional Services
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}