import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#d7c2bd] text-white">
      <div className="max-w-6xl mx-auto font-bold px-6 py-4 flex  items-center gap-4">
        <Link href="/">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={320}
            height={80}
            className="object-contain"
          />
        </Link>

        <nav className="space-x-6 text-[#fdf9f2]">
          <Link href="/" className="hover:text-gray-300 transition">
            Inicio
          </Link>
          <Link href="/blog" className="hover:text-gray-300 transition">
            Sobre mim
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition">
            Procedimentos
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition">
            Agendar
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
