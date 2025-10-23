
function PromotionalBanner() {
return (
<section className="h-[500px] mx-auto flex flex-col items-center justify-center p-6">
    
    <div className="bg-red-500 max-h-[300px] h-full w-full max-w-[1400px] flex flex-col justify-center text-center rounded-4xl p-4 xl:flex-row xl:justify-between xl:items-center xl:px-[100px]">
        <div className=" text-white text-center mx-auto sm:max-w-xl :text-left">
            <h2 className="text-2xl sm:text-4xl font-md mb-4 ">Descarga nuestra app y lleva tu próxima aventura en el bolsillo</h2>
            <p className="text-[15px] sm:text-lg font-light text-gray-200">Explora alojamientos únicos, reserva en segundos y vive
                experiencias inolvidables desde tu celular. ¡Todo lo que
                necesitas, en un solo lugar!</p>
        </div>
        
        <div className=" flex justify-center gap-4 mt-6 text-md sm:text-xl">
            <a href="#" className="border-1 text-nowrap bg-white text-red-500  px-7 py-3 rounded-xl hover:bg-red-500 hover:text-white transition">App Store</a>
            <a href="#" className="border-1 text-nowrap bg-red-500 text-white px-7 py-3 rounded-xl hover:bg-white hover:text-red-500 transition">Google Play</a>
        </div>
    </div>
</section>
)
}

export default PromotionalBanner