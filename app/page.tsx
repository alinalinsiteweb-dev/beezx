import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold">
          Site-uri moderne care aduc clienti
        </h1>
        <p className="mt-4 text-gray-600">
          One-page demo Beez Pixel gata pentru Vercel.
        </p>
      </main>
    </>
  );
}