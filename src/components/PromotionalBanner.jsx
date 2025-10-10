
function PromotionalBanner() {
return (
<section className="h-[500px] max-w-[1200px] mx-auto flex flex-col items-center justify-center p-6">
    <div className="bg-[url(/src/assets/header.jpg)] w-full flex justify-center text-center rounded-4xl p-4 bg-top-left">
        <div className="text text-white p-8 max-w-xl">
            <h2 className="text-3xl font-bold mb-4">
                Descarga nuestra app y lleva tu próxima aventura en el bolsillo
            </h2>
            <p className="text-lg">
                Explora alojamientos únicos, reserva en segundos y vive
                experiencias inolvidables desde tu celular. ¡Todo lo que
                necesitas, en un solo lugar!
            </p>
            <div className="flex justify-center gap-4 mt-6">
                <a href="#"
                    className="bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-full hover:bg-red-900 transition">App
                    Store</a>
                <a href="#"
                    className="bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-full hover:bg-red-900 transition">Google
                    Play</a>
            </div>
        </div>
    </div>
</section>
)
}

export default PromotionalBanner