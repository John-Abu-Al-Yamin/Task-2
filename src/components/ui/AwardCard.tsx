interface AwardCardProps {
  title: string;
  description: string;
  image: string;
}

export function AwardCard({ title, description, image }: AwardCardProps) {
  return (
    <div className="relative aspect-[296/192] p-6 rounded-2xl overflow-hidden group">
      <img src={image} alt="" className="absolute inset-0 w-full h-full" />
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}