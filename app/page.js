import Link from "next/link";
import Upload from "../components/upload";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link
        href="/login"
        className="bg-gray-500 text-white p-3 rounded my-5 hover:-translate-y-1 w-40 text-center"
      >
        login
      </Link>
      <Upload />
    </main>
  );
}
