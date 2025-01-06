interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

export function FeatureCard({ title, description, image }: FeatureCardProps) {
  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden group">
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}