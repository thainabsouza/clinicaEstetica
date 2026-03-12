import Image from "next/image";

type ImageTextCardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

export function CardDescrition({
  imageSrc,
  title,
  description,
}: ImageTextCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto p-6 hover:shadow-2xl transition duration-300">
      {/* Imagem */}
      <div className="relative w-full md:w-1/2 h-100">
        <Image
          src="/carddesc.jpg"
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 space-y-4 text-gray-500 flex flex-col items-center text-center">
        <h3 className="text-2xl text-[#a06b3f] font-bold">{title}</h3>
        <p className="text-lg leading-relaxed">{description}</p>

        <button className="bg-[#d7c2bd] md:w-1/2 text-[#a06b3f] font-bold  rounded-full px-6 py-3  hover:bg-gray-800 transition">
          Saiba mais
        </button>
      </div>
    </div>
  );
}
