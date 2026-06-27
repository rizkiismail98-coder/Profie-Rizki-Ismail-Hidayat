export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-black/80 backdrop-blur-lg border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-white">
            Rizki
            <span className="text-yellow-500">
              {" "}Ismail
            </span>
            <span className="text-white">
              {" "}Hidayat
            </span>
          </h1>

        </div>
      </div>
    </nav>
  );
}