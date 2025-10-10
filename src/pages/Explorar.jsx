import Cards from "../components/Cards";

function Explorar() {
  return (
    <div className="bg-white py-10 items-center flex flex-col justify-center">
  <form
    className="shadow-xl border-1 border-zinc-300 rounded-4xl px-6 py-4 flex flex-wrap md:flex-nowrap justify-center gap-4 items-center max-w-[900px] w-full mb-10">

    {/* Destino */}
    <div className="flex flex-col min-w-full md:min-w-0 items-center md:items-start">
      <label className="text-sm font-semibold text-zinc-600">Destino</label>
      <input type="text" placeholder="¿A dónde quieres ir?"
        className="border border-zinc-300 rounded-md px-3 py-2 w-[200px]" />
    </div>

    {/* Check-in */}
    <div className="flex flex-col min-w-full md:min-w-0 items-center md:items-start">
      <label className="text-sm font-semibold text-zinc-600">Check-in</label>
      <input type="date" className="border border-zinc-300 rounded-md px-3 py-2 w-[200px]" />
    </div>

    {/* Check-out */}
    <div className="flex flex-col min-w-full md:min-w-0 items-center md:items-start">
      <label className="text-sm font-semibold text-zinc-600">Check-out</label>
      <input type="date" className="border border-zinc-300 rounded-md px-3 py-2 w-[200px]" />
    </div>

    {/* Personas */}
    <div className="flex flex-col min-w-full md:min-w-0 items-center md:items-start">
      <label className="text-sm font-semibold text-zinc-600">Personas</label>
      <input type="number" min="1" className="border border-zinc-300 rounded-md px-3 py-2 w-[100px]" />
    </div>

    {/* Botón */}
        <div className="flex flex-col min-w-full md:min-w-0 mt-3 items-center md:items-start">
    <button type="submit"
      className="bg-red-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition mx-auto">
      Buscar
    </button>

    </div>
  </form>
  <Cards />
</div>
);
}

export default Explorar;
