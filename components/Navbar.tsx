export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto max-w-6xl px-6 py-4 flex justify-between">
        <div className="font-bold">Beez Pixel</div>
        <a href="#contact" className="bg-black text-white px-4 py-2 rounded-xl">
          Cere oferta
        </a>
      </div>
    </header>
  );
}