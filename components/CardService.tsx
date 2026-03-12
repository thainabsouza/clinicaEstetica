type CardProps = {
  image: string;
  title: string;
};

export function CardService({ image, title }: CardProps) {
  return (
    <div
      className="relative h-80 rounded-3xl overflow-hidden bg-cover bg-center flex items-end shadow-lg  group-hover:shadow-2xl transition duration-300"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* legenda */}
      <div className="w-full cursor-pointer bg-[#d7c2bd] text-white text-center py-4 text-xl font-semibold">
        {title}
      </div>
    </div>
  );
}
