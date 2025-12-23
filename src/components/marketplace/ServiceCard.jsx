import Card from "../common/Card";

export default function ServiceCard({ title, description, price }) {
  return (
    <Card 
      title={title}
      description={description}
      price={price}
    />
  );
}