import Link from "next/link";
import InputSearch from "./InputSearch";

export default function Navbar() {
  return (
    <header className="bg-red-500">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="font-bold text-white text-2xl">
          Anime List
        </Link>
        <InputSearch />
      </div>
    </header>
  );
}
