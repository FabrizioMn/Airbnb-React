function Information({ highcontent, info }) {
  return (
    <>
      <section className="information max-w-[1400px] mx-auto min-h-[500px] my-[70px]">
        <div className="highcontent flex flex-col justify-center md:flex-row md:justify-between items-center px-5 py-2 gap-5 text-center md:text-left md:gap-0 ">
          <div className="text-4xl font-bold">
            <p className="max-w-2xs">{highcontent}</p>
          </div>
          <div className="max-w-[250px] text-md ">
            <p>{info}</p>
          </div>
        </div>
        <div className="content  p-1 gap-5 grid grid-cols-1 md:grid-cols-3">
          {/* Elemento destacado */}
          <div className="bg-[url(/src/assets/hospedajes/hospedaje1.webp)] bg-center bg-cover rounded-3xl h-[400px] md:col-span-1 md:row-span-2 md:h-auto md:block transition-all hover:scale-105 hover:shadow-xl"></div>

          {/* Elementos secundarios */}
          <div className="bg-[url(/src/assets/hospedajes/hospedaje2.webp)] bg-center bg-cover h-[280px] rounded-3xl col-span-2 hidden md:block transition-all hover:scale-105 hover:shadow-xl"></div>
          <div className="bg-[url(/src/assets/hospedajes/hospedaje3.webp)] bg-cover h-[280px] rounded-3xl hidden md:block transition-all hover:scale-105 hover:shadow-xl"></div>
          <div className="bg-[url(/src/assets/hospedajes/hospedaje4.webp)] bg-cover rounded-3xl hidden md:block transition-all hover:scale-105 hover:shadow-xl"></div>
        </div>
      </section>
    </>
  );
}

export default Information;
