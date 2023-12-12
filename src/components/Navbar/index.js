import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-red-500">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="font-bold text-white text-2xl">
          Anime List
        </Link>
        <input placeholder="Cari Anime..." className="" />
      </div>
    </header>
  );
}
